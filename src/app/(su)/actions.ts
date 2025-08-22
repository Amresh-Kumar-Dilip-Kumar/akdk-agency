"use server";
import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify } from "jose";
import { mailer } from "@/lib/mail";
import { db } from "@/db/prisma";


const users = [
  {
    username:'utsavsoni619@gmail.com',
    password:'utsav99',
    sessionId:'utsav'
  },
    {
        username: "nknapster@gmail.com",
        password: "Nikhil1234",
        sessionId: "admin",
    },
    {
        username: "user",
        password: "user",
        sessionId: "user",
    },
]


const isProd = process.env.NODE_ENV === "production";
// encrypt session and decrypt session
const key = new TextEncoder().encode(process.env.SECRET as string);

async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

async function decrypt(session: string) {
  // used in _middleware // currently imported form _lib/session
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (e) {
    return null;
  }
}

//----------------------------------------------
export async function getUser() {
  const cookieStore = await cookies() 
  const encryptedSessionValue = cookieStore.get("sessionId") as
    | { name: string; value: string }
    | undefined;
  console.log(encryptedSessionValue);
  if (!encryptedSessionValue) {
    return null;
  }
    const sessionUser = await decrypt(encryptedSessionValue.value) as { userId: string| undefined } | undefined

    console.log(sessionUser);
  const user = users.find((user) => user.sessionId === sessionUser?.userId);
  if (!user) {
    return null;
  }
  return { username: user.username, }
}


// with check user name and password and set the cookie using next cookies
export async function login(username: string, password: string) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    const sessionId = await encrypt({ userId: user.sessionId });
    const cookieStore =await  cookies();
    cookieStore.set("sessionId",sessionId);
      // {
      // maxAge: 24 * 60 * 60 * 1000,
      // ...(isProd
      //   ? {
      //       httpOnly: true,
      //       sameSite: "lax",
      //       secure: true,
      //       path: "/",
      //     }
      //   : {}),
    // }
    return redirect("/admin");
    return user;
  }
  return null;
}




export async function logout(){
  const cookieStore =await cookies();
  cookieStore.set("sessionId", "", {
    maxAge: 0,
    httpOnly: true,
  });
  redirect("/login");
}

export async function submitJobApplication(
  name: string,
  email: string,
  resumeUrl: string,
  message: string,
  role: string
) {
  try {
    // Save to database first
    const jobApplication = await db.jobApplication.create({
      data: {
        name,
        email,
        resumeUrl,
        message,
        role,
        status: "pending"
      }
    });

    // Send email notification (commented out for now)
    // await mailer.sendMail({
    //   from: `AKDK Careers <${process.env.EMAIL_USERNAME}>`,
    //   to: "nknapster@gmail.com",
    //   subject: `New Application for ${role}`,
    //   html: `
    //     <h2>Job Application</h2>
    //     <p><strong>Application ID:</strong> ${jobApplication.id}</p>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Resume:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>
    //     <p><strong>Message:</strong> ${message}</p>
    //     <p><strong>Role:</strong> ${role}</p>
    //     <p><strong>Status:</strong> ${jobApplication.status}</p>
    //   `,
    // });
    
    return { success: true, applicationId: jobApplication.id };
  } catch (error) {
    console.log("Error submitting job application:", error);
    return { success: false, error: "Failed to send application" };
  }
}

export async function getJobApplications() {
  try {
    const applications = await db.jobApplication.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return applications;
  } catch (error) {
    console.log("Error fetching job applications:", error);
    return [];
  }
}

export async function updateJobApplicationStatus(id: number, status: string) {
  try {
    const updatedApplication = await db.jobApplication.update({
      where: { id },
      data: { status }
    });
    return { success: true, application: updatedApplication };
  } catch (error) {
    console.log("Error updating job application status:", error);
    return { success: false, error: "Failed to update status" };
  }
}

export async function deleteJobApplicationAction(id: number) {
  try {
    await db.jobApplication.delete({ where: { id } });
    return { success: true };
  } catch (error) {
    console.log("Error deleting job application:", error);
    return { success: false, error: "Failed to delete application" };
  }
}
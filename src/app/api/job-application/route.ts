// route.ts
import { NextResponse } from "next/server";
import {mailer} from "@/lib/mail";

export async function POST(req: Request) {
  const { name, email, resumeUrl, message, role } = await req.json();

  await mailer.sendMail({
    from: `AKDK Careers <${process.env.EMAIL_USERNAME}>`,
    to: "nknapster@gmail.com",
    subject: `New Application for ${role}`,
    html: `
      <h2>Job Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Resume:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  }).catch(e=>{
    console.log("error from file ./app/api/job-application/route line:20")
  });

  return NextResponse.json({ success: true });
}


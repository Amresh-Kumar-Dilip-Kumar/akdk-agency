"use server";
import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify } from "jose";


const users = [
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
  const encryptedSessionValue = (await cookies()).get("sessionId") as
    | { name: string; value: string }
    | undefined;
  console.log(encryptedSessionValue);
  if (!encryptedSessionValue) {
    return null;
  }
    const sessionUser = await decrypt(encryptedSessionValue.value) as { userId: string; }
    console.log(sessionUser);
  const user = users.find((user) => user.sessionId === sessionUser.userId);
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
    (await cookies()).set("sessionId",await encrypt({userId: user.sessionId}), {
      maxAge: 24 * 60 * 60 * 1000,
      ...(isProd
        ? {
            httpOnly: true,
            sameSite: "lax",
            secure: true,
            path: "/",
          }
        : {}),
    });
    return redirect("/admin");
    return user;
  }
  return null;
}

export async function logout() {
  (await cookies()).set("sessionId", "", {
    maxAge: 0,
    httpOnly: true,
  });
}

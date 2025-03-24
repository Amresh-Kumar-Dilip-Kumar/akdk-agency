"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const users = [
    {
        username: "admin",
        password: "admin",
        sessionId: "admin"

    },
    {
        username: "user",
        password: "user",
        sessionId: "user"
    }
]

export async function getUser() {
    const sessionId = (await cookies()).get('sessionId') as {name:string,value:string} | undefined
    console.log(sessionId);
    if (!sessionId) {
        return null
    }
    return users.find(user => user.sessionId === sessionId.value)
}
// with check user name and password and set the cookie using next cookies
export async function login(username:string, password:string) {
    console.log("logging in");
    const user = users.find(user => user.username === username && user.password === password)
    console.log(user);
    if (user) {
        console.log("setting cookie");
       (await cookies()).set('sessionId', user.sessionId, {
        maxAge: 60 * 60 * 24 * 7,
        // httpOnly: process.env.NODE_ENV === 'production',
        // sameSite: 'strict',
        // secure: process.env.NODE_ENV === 'production',
       })
        return redirect('/admin')
        return user
    }
    return null
}

export async function logout() {
    (await cookies()).set('sessionId', '', {
        maxAge: 0,
        httpOnly: true,
    })
}

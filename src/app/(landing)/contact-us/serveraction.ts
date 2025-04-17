"use server"
import db from "@/db/prisma";

type ContactForm = {
    name: string;
    email: string;
    message: string;
    terms: string;
}
export async function contactformdetail(formdata: FormData) {
    console.log(formdata);
    const data = Object.fromEntries(formdata) as ContactForm;
    console.log(data);

    await db.contactformdetails.create({
        data:{
            name: data.name,
            email: data.email,
            message: data.message,
            phone :""
        }
    })
    return ;

} 
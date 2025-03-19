"use server"
export async function contactFormHandler({
    
    formdata
}:{
    formdata: FormData
}){
    "use server"
    const name = formdata.get('name');
    const email = formdata.get('email');
    const message = formdata.get('message');
    //---
    // You can now use the extracted values
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
}
// route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, resumeUrl, message, role } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true, // true for 465, false for other ports
    logger: true,
    debug: true, // include SMTP traffic in the logs
    secureConnection: true, // use TLS
    tls: {
      rejectUnauthorized: true, // allow self-signed certificates
    },

    auth: {
      user: process.env.EMAIL_USERNAME,   // your Gmail
      pass: process.env.EMAIL_PASSWORD,   // your Gmail App Password
    },
  });

  await transporter.sendMail({
    from: `AKDK Careers <${process.env.EMAIL_USERNAME}>`,
    to: "utsavsoni619@gmail.com",
    subject: `New Application for ${role}`,
    html: `
      <h2>Job Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Resume:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}


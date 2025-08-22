import nodemailer from "nodemailer"

const useSecure = process.env.NODEMAILER_SECURE === 'true';

const NODEMAILER_ARGS = {
    host:"smtp.hostinger.com",
    port: useSecure ? 465 : 587,
    secure: useSecure,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
}

// Create a test account or replace with real credentials.
export const mailer = nodemailer.createTransport(NODEMAILER_ARGS)

// const transporter = nodemailer.createTransport({
  //   service: "Gmail",
  //   port: 465,
  //   secure: true, // true for 465, false for other ports
  //   logger: true,
  //   debug: true, // include SMTP traffic in the logs
  //   secureConnection: true, // use TLS
  //   tls: {
  //     rejectUnauthorized: true, // allow self-signed certificates
  //   },

  //   auth: {
  //     user: process.env.EMAIL_USERNAME,   // your Gmail
  //     pass: process.env.EMAIL_PASSWORD,   // your Gmail App Password
  //   },
  // });

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

export async function sendEmailOTP(email: string, otp: string) {
    const mailOptions = {
        from: '"AKDK Digital" <mail@ermonline.in>',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}. It will expire in 5 minutes.`,
        html: `<p>Your OTP code is: <strong>${otp}</strong>. It will expire in 5 minutes.</p>`,
    };

    try {
        await mailer.sendMail(mailOptions);
        console.log(`OTP email sent to ${email}`);
    }
    catch (error) {
        console.error(`Failed to send OTP email to ${email}:`, error);
        throw new Error('Failed to send OTP email');
    }
}
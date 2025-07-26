"use server"
import { db } from "@/db/prisma";
import { mailer } from "@/lib/mail";
import z from "zod";

const jobApplicationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  resumeUrl: z.string().url(),
  message: z.string().max(1000).optional(),
  role: z.string().min(2).max(100),
});
export type JobApplication = z.infer<typeof jobApplicationSchema>;

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

    // Send email notification
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
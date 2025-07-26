"use server";
import { cookies } from "next/headers";
import  {db}  from "@/db/prisma"

import type { QuestionnaireData } from "@/components/new-landing-comp/questionnaire-modal";


interface OTPData {
  code: string;
  email?: string;
  phone?: string;
  expiresAt: number;
}

// In a real application, you would use a proper database
// For OTP storage, we'll keep the in-memory store (you can later move this to Redis or database)
const otpStore = new Map<string, OTPData>();

// Then, use Prisma queries to create, find, and delete OTPs instead of the in-memory Map.
// Remove the otpStore Map entirely.

// Remove the submissionStore as we'll use Prisma instead

export async function sendOTP(email: string, phone: string, preferredMethod: string) {
  try {
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
    
    // Create unique key
    const key = preferredMethod === 'email' ? email : phone;
    
    // Store OTP
    otpStore.set(key, {
      code: otp,
      email: preferredMethod === 'email' ? email : undefined,
      phone: preferredMethod === 'phone' ? phone : undefined,
      expiresAt
    });

    // In a real application, you would:
    // - Send email via service like SendGrid, AWS SES, etc.
    // - Send SMS via service like Twilio, AWS SNS, etc.
    
    if (preferredMethod === 'email') {
      // Simulate email sending
      console.log(`Sending OTP ${otp} to email: ${email}`);
      // await sendEmailOTP(email, otp);
    } else {
      // Simulate SMS sending  
      console.log(`Sending OTP ${otp} to phone: ${phone}`);
      // await sendSMSOTP(phone, otp);
    }

    return { 
      success: true, 
      message: `OTP sent to your ${preferredMethod === 'email' ? 'email' : 'phone number'}` 
    };
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { 
      success: false, 
      message: 'Failed to send OTP. Please try again.' 
    };
  }
}

export async function verifyOTPAndSubmit(
  otp: string, 
  contactKey: string, 
  questionnaireData: QuestionnaireData
) {
  try {
    // Get stored OTP
    const storedOTP = otpStore.get(contactKey);
    
    if (!storedOTP) {
      return { 
        success: false, 
        message: 'OTP not found or expired. Please request a new one.' 
      };
    }

    // Check if OTP is expired
    if (Date.now() > storedOTP.expiresAt) {
      otpStore.delete(contactKey);
      return { 
        success: false, 
        message: 'OTP has expired. Please request a new one.' 
      };
    }

    // Verify OTP
    if (storedOTP.code !== otp) {
      return { 
        success: false, 
        message: 'Invalid OTP. Please check and try again.' 
      };
    }

    // OTP is valid, process the submission
    try {
      // Save to database using Prisma
      const submission = await db.questionnaireSubmission.create({
        data: {
          contactName: questionnaireData.contactName,
          email: questionnaireData.email,
          phone: questionnaireData.phone,
          businessName: questionnaireData.businessName || null,
          projectType: questionnaireData.projectType,
          services: JSON.stringify(questionnaireData.services), // Store as JSON string
          timeline: questionnaireData.timeline,
          budget: questionnaireData.budget,
          industry: questionnaireData.industry || null,
          description: questionnaireData.description || null,
        }
      });

      // Clean up OTP
      otpStore.delete(contactKey);

      // Send notification email to your team
      await sendTeamNotification(questionnaireData);

      return { 
        success: true, 
        message: 'Thank you! Your request has been submitted successfully. We\'ll contact you within 24 hours.',
        submissionId: submission.id.toString()
      };
    } catch (dbError) {
      console.error('Database error:', dbError);
      return { 
        success: false, 
        message: 'An error occurred while saving your request. Please try again.' 
      };
    }
  } catch (error) {
    console.error('Error verifying OTP and submitting:', error);
    return { 
      success: false, 
      message: 'An error occurred while processing your request. Please try again.' 
    };
  }
}

async function sendTeamNotification(data: QuestionnaireData) {
  // In a real application, send email to your team
  const emailContent = `
    New Questionnaire Submission:
    
    Contact: ${data.contactName}
    Email: ${data.email}
    Phone: ${data.phone}
    Business: ${data.businessName}
    
    Project Type: ${data.projectType}
    Services: ${data.services.join(', ')}
    Timeline: ${data.timeline}
    Budget: ${data.budget}
    Industry: ${data.industry}
    
    Please follow up within 24 hours.
  `;
  
  console.log('Team notification:', emailContent);
  
  // Here you would use your preferred email service:
  // await sendEmail({
  //   to: 'team@akdkdigital.com',
  //   subject: 'New Project Inquiry from Website',
  //   text: emailContent
  // });
}

export async function getSubmissionStats() {
  // For admin dashboard - get submission statistics
  return{
    total: await db.questionnaireSubmission.count(),
    recent: await db.questionnaireSubmission.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10
    })
  }
}

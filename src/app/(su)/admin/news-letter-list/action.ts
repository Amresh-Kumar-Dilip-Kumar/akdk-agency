"use server";

import db from "@/db/prisma";
import { z } from "zod";

export async function addNewsletter(_: any, formData: FormData) {
  const email = formData.get("email");

  const schema = z.string().email();
  const result = schema.safeParse(email);

  if (!result.success) {
    return { success: false, message: "Invalid email address" };
  }

  await db.subscriber.create({
    data: { email: result.data },
  });

  return { success: true, message: "🎉 Successfully subscribed!" };
}

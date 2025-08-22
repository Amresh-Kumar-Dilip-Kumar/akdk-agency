"use server";

import {db} from "@/db/prisma";
import { z } from "zod";

export async function quoteformdetail(data: FormData) {
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  const phone = data.get("phone");

  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number too long")
      .regex(/^\+?\d{10,15}$/, "Invalid phone number format"),
  });

  const result = schema.safeParse({ name, email, message, phone });

  if (!result.success) {
    throw new Error("Validation failed");
  }

  await db.quoteformdetails.create({
    data: result.data,
  });
}

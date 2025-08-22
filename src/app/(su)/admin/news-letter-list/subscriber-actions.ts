"use server";

import { db } from "@/db/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export async function addSubscriberAction(email: string) {
  const schema = z.string().email();
  const result = schema.safeParse(email);

  if (!result.success) {
    return { success: false, message: "Invalid email address" };
  }

  try {
    // Check if subscriber already exists
    const existingSubscriber = await db.subscriber.findFirst({
      where: { email: result.data }
    });

    if (existingSubscriber) {
      return { success: false, message: "Email already subscribed" };
    }

    await db.subscriber.create({
      data: { email: result.data },
    });

    revalidatePath("/admin/news-letter-list");
    return { success: true, message: "Subscriber added successfully!" };
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return { success: false, message: "Failed to add subscriber" };
  }
}

export async function deleteSubscriberAction(id: number) {
  try {
    await db.subscriber.delete({
      where: { id }
    });

    revalidatePath("/admin/news-letter-list");
    return { success: true, message: "Subscriber deleted successfully!" };
  } catch (error) {
    console.error("Error deleting subscriber:", error);
    return { success: false, message: "Failed to delete subscriber" };
  }
}

export async function bulkDeleteSubscribersAction(ids: number[]) {
  try {
    await db.subscriber.deleteMany({
      where: {
        id: {
          in: ids
        }
      }
    });

    revalidatePath("/admin/news-letter-list");
    return { success: true, message: `${ids.length} subscribers deleted successfully!` };
  } catch (error) {
    console.error("Error bulk deleting subscribers:", error);
    return { success: false, message: "Failed to delete subscribers" };
  }
}

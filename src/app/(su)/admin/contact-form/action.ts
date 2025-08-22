"use server"
import {db} from "@/db/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {z} from "zod"

export async function deleteMessage(data: FormData) {
  const idString = data.get("id") as string | null;
  if (!idString) {
    throw new Response("Invalid ID", { status: 403 });
  }

  const id = z.coerce.number().safeParse(idString);
  if (!id.success) {
    throw new Response("Invalid ID", { status: 403 });
  }

  await db.contactformdetails.delete({
    where: {
      id: id.data,
    },
  });

  revalidatePath("/admin/contact-form");
  return redirect("/admin/contact-form");
}

export async function markAsReplied(id: number) {
  try {
    await db.contactformdetails.update({
      where: { id },
      data: { 
        status: 'replied',
        repliedAt: new Date()
      }
    });

    revalidatePath("/admin/contact-form");
    return { success: true, message: "Message marked as replied!" };
  } catch (error) {
    console.error("Error marking as replied:", error);
    return { success: false, message: "Failed to update message status" };
  }
}

export async function markAsRead(id: number) {
  try {
    await db.contactformdetails.update({
      where: { id },
      data: { 
        status: 'read',
        readAt: new Date()
      }
    });

    revalidatePath("/admin/contact-form");
    return { success: true, message: "Message marked as read!" };
  } catch (error) {
    console.error("Error marking as read:", error);
    return { success: false, message: "Failed to update message status" };
  }
}

export async function archiveMessage(id: number) {
  try {
    await db.contactformdetails.update({
      where: { id },
      data: { 
        status: 'archived',
        archivedAt: new Date()
      }
    });

    revalidatePath("/admin/contact-form");
    return { success: true, message: "Message archived!" };
  } catch (error) {
    console.error("Error archiving message:", error);
    return { success: false, message: "Failed to archive message" };
  }
}

export async function setPriority(id: number, priority: 'high' | 'medium' | 'normal') {
  try {
    await db.contactformdetails.update({
      where: { id },
      data: { priority }
    });

    revalidatePath("/admin/contact-form");
    return { success: true, message: `Priority set to ${priority}!` };
  } catch (error) {
    console.error("Error setting priority:", error);
    return { success: false, message: "Failed to update priority" };
  }
}

export async function bulkDeleteMessages(ids: number[]) {
  try {
    await db.contactformdetails.deleteMany({
      where: {
        id: {
          in: ids
        }
      }
    });

    revalidatePath("/admin/contact-form");
    return { success: true, message: `${ids.length} messages deleted successfully!` };
  } catch (error) {
    console.error("Error bulk deleting messages:", error);
    return { success: false, message: "Failed to delete messages" };
  }
}

export async function bulkArchiveMessages(ids: number[]) {
  try {
    await db.contactformdetails.updateMany({
      where: {
        id: {
          in: ids
        }
      },
      data: {
        status: 'archived',
        archivedAt: new Date()
      }
    });

    revalidatePath("/admin/contact-form");
    return { success: true, message: `${ids.length} messages archived successfully!` };
  } catch (error) {
    console.error("Error bulk archiving messages:", error);
    return { success: false, message: "Failed to archive messages" };
  }
}

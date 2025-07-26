// app/(su)/admin/quote-form/action.ts
"use server";

import {db} from "@/db/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function deleteMessage(data: FormData) {
  const idString = data.get("id") as string | null;

  if (!idString) {
    throw new Response("Invalid ID", { status: 403 });
  }

  const id = z.coerce.number().safeParse(idString);
  if (!id.success) {
    throw new Response("Invalid ID", { status: 403 });
  }

  await db.quoteformdetails.delete({
    where: { id: id.data },
  });

  return redirect("/admin/quote");
}

"use server"
import db from "@/db/prisma";
import { redirect } from "next/navigation";
import {z  } from "zod"
// export async function deleteMesage (data: FormData) {
//     "use server";

//     const idString = data.get("id") as string | null;
//     if (!idString) {
//       throw new Response("Invalid ID", { status: 403 });
//     }

//     const id = z.coerce.number().safeParse(idString);
//     if (!id.success) {
//       throw new Response("Invalid ID", { status: 403 });
//     }

//     await db.contactformdetails.delete({
//       where: {
//         id: id.data,
//       },

//     });
//     return redirect("/admin/contact-form")
//   }
``

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

  return redirect("/admin/contact-form"); // Optional: change this if needed
}

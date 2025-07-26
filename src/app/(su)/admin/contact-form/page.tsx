"use server";
import React from "react";
import {db} from "@/db/prisma";
// import { z } from "zod";
import { deleteMessage } from "./action";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default async function ContactFormEntriesPage() {
  const data = await db.contactformdetails.findMany({});

  return (
    <Table>
      <TableCaption>List of messages from the Contact Us form</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Name</TableHead>
          <TableHead className="w-[250px]">Email</TableHead>
          <TableHead>Message</TableHead>
          <TableHead className="text-right w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.message}</TableCell>
            <TableCell className="text-right">
              <AlertDialog>
                <AlertDialogTrigger className="text-red-500 hover:underline text-sm">
                  Delete
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the message.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <form action={deleteMessage}>
                      <input type="hidden" name="id" value={item.id} />
                      <AlertDialogAction type="submit">
                        Yes, delete
                      </AlertDialogAction>
                    </form>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

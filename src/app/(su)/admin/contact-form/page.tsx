"use server";
import React from "react";
import db from "@/db/prisma";
import { z } from "zod";
import { deleteMesage } from "./action";

export default async function ContactFormEntriesPage() {
  const data = await db.contactformdetails.findMany({});
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            {item.email} - {item.message}
            <form action={deleteMesage}>
              <input type="hidden" name="id" value={item.id} />
              <button type="submit">delete</button>
            </form>
            <br />
          </div>
        );
      })}
    </div>
  );
}

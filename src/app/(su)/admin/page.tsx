import { redirect } from "next/navigation";
import React from "react";
import { getUser } from "../actions";
export default async function AdminPage() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
    return <div>{user?.username}</div>;
  }
  return <div>user : {user.username}</div>;
}

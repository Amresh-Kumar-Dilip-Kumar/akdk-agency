import { redirect } from "next/navigation";
import React from "react";
import { getUser } from "../actions";


// import data from "./data.json";

export default async function AdminPageLayout() {
  const user = await getUser();
  if (!user) redirect("/login");
  return <div>

    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Admin Page</h1>
      <p className="mt-2 text-gray-600">Welcome, {user.username}!</p>
       <p className="mt-1 text-gray-600">Your role is: {user.username}</p>
    </div>
    {/* You can add more admin-specific content here */}
  </div>;
  
  // return <div>user : {user.username}</div>;
}

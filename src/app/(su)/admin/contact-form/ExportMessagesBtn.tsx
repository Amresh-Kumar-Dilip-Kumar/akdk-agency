"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { format } from "date-fns";
import { contactformdetails } from "@/../prisma/generated/client";

export default function ExportMessagesBtn({
  messages = [],
}: {
  messages: contactformdetails[];
}) {
  const exportMessages = () => {
    if (typeof window !== "undefined") {
      const csvContent = [
        "ID,Name,Email,Phone,Message,Status,Priority,Submitted At",
        ...messages.map(
          (msg) =>
            `${msg.id},"${msg.name}","${msg.email}","${msg.phone || ""}","${
              msg.message || ""
            }","${msg.status || "unread"}","${
              msg.priority || "normal"
            }","${format(new Date(msg.created_at), "yyyy-MM-dd HH:mm:ss")}"`
        ),
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `contact-messages-${format(new Date(), "yyyy-MM-dd")}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={exportMessages}>
      <Download className="h-4 w-4 mr-2" />
      Export CSV
    </Button>
  );
}

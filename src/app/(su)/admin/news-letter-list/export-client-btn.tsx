"use client"
import React from 'react'
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { format } from "date-fns";
import { Subscriber } from '@/../generated';
export default function ExportClientBtn(
    { subscribers }:{subscribers: Subscriber[]} 
) {
    const exportSubscribers = () => {
        if (typeof window !== "undefined") {
          const csvContent = [
            "ID,Email,Subscribed At",
            ...subscribers.map(
              (sub) =>
                `${sub.id},"${sub.email}","${format(
                  new Date(sub.subscribedAt),
                  "yyyy-MM-dd HH:mm:ss"
                )}"`
            ),
          ].join("\n");
    
          const blob = new Blob([csvContent], { type: "text/csv" });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `newsletter-subscribers-${format(
            new Date(),
            "yyyy-MM-dd"
          )}.csv`;
          a.click();
          window.URL.revokeObjectURL(url);
        }
      };
  return (
    <Button
                variant="outline"
                size="sm"
                onClick={exportSubscribers}
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
  )
}

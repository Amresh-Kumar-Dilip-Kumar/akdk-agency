"use client";

import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ApplyNowModal({ role }: { role: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/job-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, resumeUrl, message, role }),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Failed to send application");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="third">Apply Now</Button>
      </DialogTrigger>
      <DialogContent className="space-y-4">
        <h2 className="text-xl font-semibold">Apply for {role}</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="Resume URL (Google Drive, etc.)"
              value={resumeUrl}
              onChange={(e) => setResumeUrl(e.target.value)}
              required
            />
            <Textarea
              placeholder="Short Note or Cover Letter"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" variant="third">
              Submit Application
            </Button>
          </form>
        ) : (
          <p className="text-green-600">
            Thanks! Your application has been submitted.
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}

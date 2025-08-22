"use client";

import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { submitJobApplication } from "@/app/(su)/actions.apply-for-job";

export function ApplyNowModal({ role }: { role: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await submitJobApplication(name, email, resumeUrl, message, role);
      
      if (result.success) {
        setSubmitted(true);
      } else {
        alert(result.error || "Failed to send application");
      }
    } catch (error) {
      alert("Failed to send application");
    } finally {
      setIsLoading(false);
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
            <Button type="submit" variant="third" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Application"}
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

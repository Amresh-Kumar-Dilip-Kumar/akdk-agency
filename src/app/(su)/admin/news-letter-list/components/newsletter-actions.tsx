"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Upload, FileDown } from "lucide-react";

export function NewsletterActions() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isImportDialogOpen, setIsImportDialogOpen] = useState(false);

  const handleAddSubscriber = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      // TODO: Implement add subscriber API call
      console.log("Adding subscriber:", email);
      alert("Subscriber added successfully!");
      setIsAddDialogOpen(false);
    } catch (error) {
      alert("Failed to add subscriber. Please try again.");
    }
  };

  const handleImportCSV = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("csvFile") as File;

    if (!file) {
      alert("Please select a CSV file.");
      return;
    }

    try {
      // TODO: Implement CSV import functionality
      console.log("Importing CSV file:", file.name);
      alert(`Importing ${file.name}. You'll be notified when complete.`);
      setIsImportDialogOpen(false);
    } catch (error) {
      alert("Failed to import CSV file. Please try again.");
    }
  };

  const downloadTemplate = () => {
    const csvContent = "email\nexample1@domain.com\nexample2@domain.com";
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "newsletter-import-template.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2">
      {/* Import Dialog */}
      <Dialog open={isImportDialogOpen} onOpenChange={setIsImportDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Import Subscribers</DialogTitle>
            <DialogDescription>
              Upload a CSV file with email addresses to import subscribers in bulk.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleImportCSV} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="csvFile">CSV File</Label>
              <Input
                id="csvFile"
                name="csvFile"
                type="file"
                accept=".csv"
                required
              />
              <p className="text-sm text-muted-foreground">
                CSV should have an "email" column header.{" "}
                <Button
                  type="button"
                  variant="link"
                  size="sm"
                  className="p-0 h-auto"
                  onClick={downloadTemplate}
                >
                  <FileDown className="h-3 w-3 mr-1" />
                  Download template
                </Button>
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsImportDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Import</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add Subscriber Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Subscriber
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Subscriber</DialogTitle>
            <DialogDescription>
              Add a new email address to your newsletter subscription list.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddSubscriber} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="subscriber@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="note">Note (Optional)</Label>
              <Textarea
                id="note"
                name="note"
                placeholder="Any additional notes about this subscriber..."
                rows={3}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Add Subscriber</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

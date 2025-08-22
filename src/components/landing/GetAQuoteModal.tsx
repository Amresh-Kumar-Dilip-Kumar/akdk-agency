"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { quoteformdetail } from "@/app/(su)/admin/quote-form/serveraction"; // ✅ imported server action

export default function GetAQuoteModal({
  setShowQuoteModal,
}: {
  setShowQuoteModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("message", formData.message);

    try {
      await quoteformdetail(formPayload); // ✅ calling server action
      setSuccessMessage("✅ Thank you! Your quote request has been submitted.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setShowQuoteModal(false), 2000);
    } catch (err) {
      console.error(err);
      alert("There was a problem. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setShowQuoteModal(false)}
    >
      <div
        className="bg-white rounded-lg p-8 max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-4">Get a Quote</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {successMessage && (
            <p className="text-green-600 text-sm mb-4">{successMessage}</p>
          )}

          <div className="flex items-center justify-between">
            <Button type="submit" variant="secondary" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </Button>
            <Button
              variant="link"
              type="button"
              onClick={() => setShowQuoteModal(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

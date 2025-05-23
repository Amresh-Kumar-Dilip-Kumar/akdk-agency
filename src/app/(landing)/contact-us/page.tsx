// ✅ FILE 1: ContactForm.tsx
"use client";
import { PageHeader } from "@/components/landing/page-header2";
import { useState } from "react";
import { contactformdetail } from "./serveraction";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");

    const Formdata = new FormData();
    Formdata.append("name", formData.name);
    Formdata.append("email", formData.email);
    Formdata.append("message", formData.message);
    Formdata.append("terms", formData.terms.toString());

    try {
      await contactformdetail(Formdata);
      setSuccessMessage(
        "✅ Thank you for contacting us! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "", terms: false });
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="text-gray-900">
      <PageHeader
        heading={<>Get in Touch</>}
        description={
          <>
            Reach out to us for expert web development solutions. Our team is
            ready to assist you with any inquiries or project discussions.
          </>
        }
      />

      <div className="max-w-[1440px]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-40">
        <div className="w-full">
          <iframe
            className="w-full h-[400px] rounded-xl shadow-xl border-2 border-gray-200"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.2198753309365!2d81.6250420411519!3d21.246457543528056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd456d116d29%3A0xde610a4386781852!2sAKDK%20Digital!5e0!3m2!1sen!2sin!4v1739782384777!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-full space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            We’d Love to Hear From You!
          </h2>

          {successMessage && (
            <div className="p-4 text-green-800 bg-green-100 border border-green-200 rounded-md">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <input
                disabled={submitting}
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                name="message"
                placeholder="Type your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="w-4 h-4 text-red-600 border-gray-300 rounded"
              />
              <label className="text-gray-600">I accept the Terms</label>
            </div>

            <button
              disabled={submitting}
              type="submit"
              className="rounded-md bg-red-600 px-8 py-2.5 text-sm font-normal hover:bg-red-500 text-white disabled:bg-slate-50"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

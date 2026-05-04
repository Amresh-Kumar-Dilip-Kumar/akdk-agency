"use client";

import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHeader } from "@/components/landing/page-header2";
import { useAnalytics } from "@/app/(analytics)/_hooks/use-analytics";
import { contactformdetail } from "./serveraction";

export default function ContactPage() {
  const { trackEvent, trackFormSubmission } = useAnalytics();
  const hasTrackedStart = useRef(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const trackContactFormStart = () => {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    trackEvent("form", "contact_form_start", "contact-us", {
      page: "/contact-us",
      section: "project_inquiry_form",
    });
  };

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

    trackFormSubmission("contact_us_inquiry", {
      page: "/contact-us",
      hasMessage: Boolean(formData.message.trim()),
      acceptedTerms: formData.terms,
    });
    trackEvent("form", "contact_form_submit", "contact-us", {
      page: "/contact-us",
      section: "project_inquiry_form",
    });

    const requestData = new FormData();
    requestData.append("name", formData.name);
    requestData.append("email", formData.email);
    requestData.append("message", formData.message);
    requestData.append("terms", String(formData.terms));

    try {
      await contactformdetail(requestData);
      trackEvent("form", "contact_form_submit_success", "contact-us", {
        page: "/contact-us",
      });
      setSuccessMessage("Thanks for reaching out. We will contact you shortly.");
      setFormData({ name: "", email: "", message: "", terms: false });
      hasTrackedStart.current = false;
    } catch (error) {
      trackEvent("form", "contact_form_submit_error", "contact-us", {
        page: "/contact-us",
      });
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section>
      <PageHeader
        heading={<>Let us design the right digital experience for your business.</>}
        description={
          <>
            Share your goals and constraints. We will reply with a practical approach,
            timeline, and implementation recommendation.
          </>
        }
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
          <aside className="space-y-4">
            <article className="rounded-xl border border-border bg-card p-5">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="mt-3 text-lg font-bold text-foreground">Visit</h2>
              <p className="mt-1 text-sm text-muted-foreground">Raipur, Chhattisgarh, India</p>
            </article>
            <article className="rounded-xl border border-border bg-card p-5">
              <Phone className="h-5 w-5 text-primary" />
              <h2 className="mt-3 text-lg font-bold text-foreground">Call</h2>
              <p className="mt-1 text-sm text-muted-foreground">Call support available after inquiry confirmation.</p>
            </article>
            <article className="rounded-xl border border-border bg-card p-5">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="mt-3 text-lg font-bold text-foreground">Email</h2>
              <p className="mt-1 text-sm text-muted-foreground">akdkdigital@gmail.com</p>
            </article>

            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                className="h-64 w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.2198753309365!2d81.6250420411519!3d21.246457543528056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd456d116d29%3A0xde610a4386781852!2sAKDK%20Digital!5e0!3m2!1sen!2sin!4v1739782384777!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-black text-foreground md:text-3xl">Project Inquiry</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Provide brief details and we will get back within one business day.
            </p>

            {successMessage ? (
              <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
                {successMessage}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                disabled={submitting}
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                onFocus={trackContactFormStart}
                required
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <input
                disabled={submitting}
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                onFocus={trackContactFormStart}
                required
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <textarea
                disabled={submitting}
                name="message"
                placeholder="Tell us what you need"
                value={formData.message}
                onChange={handleChange}
                onFocus={trackContactFormStart}
                required
                className="h-36 w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input
                  disabled={submitting}
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  onFocus={trackContactFormStart}
                  required
                  className="mt-0.5 h-4 w-4 rounded border-border"
                />
                I accept the Terms and Conditions.
              </label>

              <button
                disabled={submitting || !formData.terms}
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}

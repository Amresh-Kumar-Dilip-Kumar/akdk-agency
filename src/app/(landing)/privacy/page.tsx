import { PageHeader } from "@/components/landing/page-header2";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect details you submit through forms, including name, email, phone, and project context.",
  },
  {
    title: "How We Use Information",
    content:
      "Information is used to respond to inquiries, deliver services, improve user experience, and share updates where consent is provided.",
  },
  {
    title: "Data Security",
    content:
      "We apply reasonable technical and operational safeguards to protect data from unauthorized access or misuse.",
  },
  {
    title: "Third-Party Sharing",
    content:
      "We do not sell personal data. We may share data only when necessary to operate services or comply with legal obligations.",
  },
  {
    title: "Your Rights",
    content:
      "You may request access, correction, or deletion of personal data by contacting us through our official support channels.",
  },
  {
    title: "Policy Updates",
    content:
      "This policy may be revised periodically. Updated versions will be published on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <section>
      <PageHeader
        heading={<>Privacy Policy</>}
        description={<>This page explains how AKDK Digital collects, uses, and protects information.</>}
      />

      <div className="mx-auto w-full max-w-4xl px-6 py-16 lg:px-10">
        <div className="space-y-5">
          {sections.map((section) => (
            <article key={section.title} className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                {section.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

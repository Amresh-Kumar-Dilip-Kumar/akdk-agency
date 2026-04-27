import { PageHeader } from "@/components/landing/page-header2";

const terms = [
  {
    title: "Definitions",
    content:
      "Client refers to any individual or organization engaging AKDK Digital. Services refer to digital design, development, and related consulting delivered by our team.",
  },
  {
    title: "Scope of Services",
    content:
      "Service timelines, deliverables, and obligations are governed by signed proposals or contracts for each engagement.",
  },
  {
    title: "Intellectual Property",
    content:
      "Ownership terms for design files, source code, and assets are specified in the project agreement and may vary by engagement.",
  },
  {
    title: "Liability",
    content:
      "AKDK Digital is not liable for indirect or consequential damages arising from website or service usage beyond limits stated in project agreements.",
  },
  {
    title: "Governing Law",
    content:
      "These terms are governed by applicable local laws where the company is registered and operating.",
  },
  {
    title: "Updates to Terms",
    content:
      "We may revise these terms at any time. Continued use of our website or services implies acceptance of the current version.",
  },
];

export default function TermsPage() {
  return (
    <section>
      <PageHeader
        heading={<>Terms & Conditions</>}
        description={<>The terms below define usage rules for AKDK Digital services and website.</>}
      />

      <div className="mx-auto w-full max-w-4xl px-6 py-16 lg:px-10">
        <div className="space-y-5">
          {terms.map((section) => (
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

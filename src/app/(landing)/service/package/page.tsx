import { ServiceDetailTemplate } from "@/components/landing/service-detail-template";

export default function PackageServicePage() {
  return (
    <ServiceDetailTemplate
      title="Custom Package Solutions"
      subtitle="Flexible engagement packages aligned to your priorities, scope, and budget."
      description="Not every project fits a fixed service box. Our custom packages combine design, development, optimization, and support into one scoped roadmap tailored to your business stage."
      heroImage="/package.jpg"
      highlights={[
        "Fully customized scope and milestones",
        "Scalable implementation roadmap",
        "Transparent timelines and pricing",
        "Dedicated communication and delivery updates",
        "Long-term support and iteration options",
      ]}
      process={[
        {
          title: "Consultation",
          description: "We discuss your objectives, constraints, and desired outcomes in detail.",
        },
        {
          title: "Package Definition",
          description: "We propose a focused package with clear deliverables and phases.",
        },
        {
          title: "Execution",
          description: "We deliver each milestone with quality checks and regular visibility.",
        },
        {
          title: "Handoff & Support",
          description: "We transition smoothly and stay available for improvements.",
        },
      ]}
      cta="Get a package designed exactly around your business goals."
    />
  );
}

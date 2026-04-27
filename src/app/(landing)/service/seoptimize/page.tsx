import { ServiceDetailTemplate } from "@/components/landing/service-detail-template";

export default function SeoServicePage() {
  return (
    <ServiceDetailTemplate
      title="SEO & Search Visibility"
      subtitle="Data-led SEO strategies that improve rankings, qualified traffic, and conversion opportunities."
      description="Our SEO work combines technical improvements, keyword strategy, content structure, and performance tracking. We focus on discoverability that translates into measurable business impact."
      heroImage="/seo.jpg"
      highlights={[
        "Technical SEO audits and fixes",
        "Keyword and content strategy",
        "On-page optimization and metadata",
        "Local SEO and profile optimization",
        "Monthly reporting and iteration plans",
      ]}
      process={[
        {
          title: "Audit & Baseline",
          description: "We review your current rankings, site health, and competition landscape.",
        },
        {
          title: "Strategy Design",
          description: "We map keywords, content structure, and priority pages.",
        },
        {
          title: "Implementation",
          description: "We execute technical and on-page updates across your website.",
        },
        {
          title: "Track & Improve",
          description: "We monitor outcomes and improve continuously based on real data.",
        },
      ]}
      cta="Improve discoverability and turn search traffic into leads."
    />
  );
}

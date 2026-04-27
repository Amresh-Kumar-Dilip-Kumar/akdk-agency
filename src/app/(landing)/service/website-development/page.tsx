import { ServiceDetailTemplate } from "@/components/landing/service-detail-template";

export default function WebsiteDevelopmentServicePage() {
  return (
    <ServiceDetailTemplate
      title="Website Design & Development"
      subtitle="High-performance websites and web systems crafted for conversion, speed, and maintainability."
      description="We build modern websites that are easy to manage, SEO-ready, and aligned with your business goals. From architecture to deployment, every decision is made for long-term growth."
      heroImage="/web.jpg"
      highlights={[
        "Responsive design across all devices",
        "SEO-ready technical foundations",
        "Fast loading and Core Web Vitals optimization",
        "CMS and custom admin integration",
        "Post-launch maintenance and support",
      ]}
      process={[
        {
          title: "Discovery & Planning",
          description: "We define your business goals, audience, content map, and technical architecture.",
        },
        {
          title: "Design System & UI",
          description: "We craft purposeful layouts and reusable components that represent your brand clearly.",
        },
        {
          title: "Development & QA",
          description: "We implement with scalable code standards, then test for quality and performance.",
        },
        {
          title: "Launch & Iteration",
          description: "We deploy, monitor, and improve based on analytics and user behavior.",
        },
      ]}
      cta="Build a website your team can scale with confidence."
    />
  );
}

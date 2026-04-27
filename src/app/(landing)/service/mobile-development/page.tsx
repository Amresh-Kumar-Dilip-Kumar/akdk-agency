import { ServiceDetailTemplate } from "@/components/landing/service-detail-template";

export default function MobileDevelopmentServicePage() {
  return (
    <ServiceDetailTemplate
      title="Mobile App Development"
      subtitle="Reliable iOS, Android, and cross-platform apps designed for usability and business outcomes."
      description="Our mobile solutions focus on intuitive user flows, production stability, and scalable architecture. Whether you need an MVP or a mature app roadmap, we align technology with user value."
      heroImage="/mobile.jpg"
      highlights={[
        "Cross-platform and native app strategy",
        "UI/UX flows optimized for engagement",
        "Secure authentication and API integration",
        "App store launch support",
        "Ongoing enhancements and maintenance",
      ]}
      process={[
        {
          title: "Product Discovery",
          description: "We clarify app goals, user journeys, and feature priorities for efficient delivery.",
        },
        {
          title: "Interface & Prototype",
          description: "We design screen systems and interactions to validate usability early.",
        },
        {
          title: "Engineering & Testing",
          description: "We build robust app modules and validate across devices and scenarios.",
        },
        {
          title: "Release & Growth",
          description: "We manage deployment, analytics, and feature refinement after launch.",
        },
      ]}
      cta="Launch a mobile experience that users trust and keep using."
    />
  );
}

import { ServiceDetailTemplate } from "@/components/landing/service-detail-template";

export default function EcommerceCmsServicePage() {
  return (
    <ServiceDetailTemplate
      title="E-commerce & CMS Solutions"
      subtitle="Storefronts and management systems engineered for conversion, operations, and growth."
      description="We deliver complete e-commerce platforms with secure checkout, catalog management, analytics, and editorial workflows. The result is a commerce system your team can manage confidently."
      heroImage="/cms.jpg"
      highlights={[
        "Secure payment gateway integration",
        "Catalog and inventory workflows",
        "Order management dashboard",
        "SEO and structured content setup",
        "Scalable foundation for future growth",
      ]}
      process={[
        {
          title: "Commerce Planning",
          description: "We define funnel, product structure, and operational requirements.",
        },
        {
          title: "Store Experience Design",
          description: "We design navigation, product detail, and checkout for stronger conversion.",
        },
        {
          title: "Platform Development",
          description: "We implement storefront, CMS, and admin workflows with secure architecture.",
        },
        {
          title: "Optimization",
          description: "We improve conversion, retention, and performance through analytics feedback.",
        },
      ]}
      cta="Turn your e-commerce stack into a dependable growth engine."
    />
  );
}

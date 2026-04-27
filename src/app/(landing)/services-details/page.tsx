import Link from "next/link";
import { PageHeader } from "@/components/landing/page-header2";

const detailPages = [
  { title: "Website Development", href: "/service/website-development" },
  { title: "Mobile Development", href: "/service/mobile-development" },
  { title: "E-commerce & CMS", href: "/service/ecommerce" },
  { title: "Custom Package", href: "/service/package" },
  { title: "SEO Optimization", href: "/service/seoptimize" },
];

export default function ServicesDetailsPage() {
  return (
    <section>
      <PageHeader
        heading={<>Detailed service pages</>}
        description={<>Explore complete breakdowns of each service, process, and delivery model.</>}
      />

      <div className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2">
          {detailPages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-border bg-card px-5 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

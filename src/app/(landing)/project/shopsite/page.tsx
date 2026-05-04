import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/landing/page-header2";

const snapshots = [
  { src: "/shop-1.png", title: "Homepage and product discovery" },
  { src: "/shop-2.png", title: "Catalog browsing and category flow" },
  { src: "/shop-3.png", title: "Product detail and checkout journey" },
];

const outcomes = [
  { label: "Checkout completion uplift", value: "+34%" },
  { label: "Average page load improvement", value: "-41%" },
  { label: "Mobile conversion uplift", value: "+27%" },
  { label: "Launch timeline", value: "5 weeks" },
];

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Server Actions",
];

export default function ShopsiteDetailPage() {
  return (
    <section>
      <PageHeader
        heading={<>Shopsite Commerce Platform: case study</>}
        description={
          <>
            A conversion-focused e-commerce platform built to improve product discovery,
            reduce checkout drop-off, and scale merchant operations.
          </>
        }
      />

      <div className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-10">
        <article className="rounded-xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-black text-foreground md:text-3xl">Client challenge</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            The client needed a modern storefront that could be launched quickly,
            perform reliably on mobile traffic, and support seamless checkout at scale.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-muted-foreground md:text-base">
            <li>- High bounce rates due to slow product pages</li>
            <li>- Inconsistent cart flow causing drop-offs</li>
            <li>- Limited operational visibility for order lifecycle</li>
            <li>- Weak mobile UX for key buying journeys</li>
          </ul>
        </article>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((metric) => (
            <article key={metric.label} className="rounded-lg border border-border bg-card p-4">
              <p className="text-2xl font-black text-foreground">{metric.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">{metric.label}</p>
            </article>
          ))}
        </div>

        <article className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-black text-foreground md:text-3xl">Solution approach</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            We redesigned the customer journey from landing to payment confirmation,
            optimized frontend performance, and built a structured order management flow
            for day-to-day operations.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground md:text-base">
            <li>- Conversion-first information architecture for category and product pages</li>
            <li>- Streamlined cart and checkout sequence with clearer trust cues</li>
            <li>- Performance optimization on hero assets and critical rendering path</li>
            <li>- Structured data model for orders, products, and merchant operations</li>
          </ul>
        </article>

        <article className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-black text-foreground md:text-3xl">Stack and delivery</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            Timeline: 5 weeks from discovery to launch, including UX refinements,
            QA rounds, and production deployment.
          </p>
        </article>

        <div className="mt-8 space-y-5">
          {snapshots.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative aspect-[16/9]">
                <Image src={image.src} alt={image.title} fill className="object-cover" sizes="100vw" />
              </div>
              <div className="border-t border-border px-5 py-3 text-sm text-muted-foreground">
                {image.title}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-slate-900 px-7 py-10 text-slate-100 md:px-10">
          <h3 className="text-2xl font-black md:text-3xl">Need similar e-commerce results?</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 md:text-base">
            We can adapt this architecture to your catalog, logistics, and growth goals,
            then ship with a clear timeline and measurable outcome targets.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
            >
              Discuss a Similar Project
            </Link>
            <Link
              href="https://our-shop.site/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              Visit Live Site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

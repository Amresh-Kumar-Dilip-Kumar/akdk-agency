import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/landing/page-header2";

const shots = [
  { src: "/project-detail/greenagri-1.png", title: "Brand and company overview" },
  { src: "/project-detail/greenagri-2.png", title: "Quote request workflow" },
  { src: "/project-detail/greenagri-3.png", title: "Admin operations dashboard" },
  { src: "/project-detail/greenagri-4.png", title: "Analytics and reporting" },
  { src: "/project-detail/greenagri-5.png", title: "Contact and lead management" },
];

export default function GreenAgriDetailPage() {
  return (
    <section>
      <PageHeader
        heading={<>Green Agri Corp: project detail</>}
        description={
          <>
            A digital platform for global rice trade, built to support trust,
            transparency, quote handling, and operational visibility.
          </>
        }
      />

      <div className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-10">
        <article className="rounded-xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-black text-foreground md:text-3xl">About the solution</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Green Agri Corp required a platform that communicates credibility while enabling
            practical trade workflows. We implemented a structured user journey from discovery
            to quote requests and paired it with an internal admin system for management.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground md:text-base">
            <li>- Global-focused brand presentation for rice trading</li>
            <li>- Lead generation through streamlined quote request forms</li>
            <li>- Admin panel for operations and client data visibility</li>
            <li>- Analytics layer for traffic and engagement monitoring</li>
          </ul>
        </article>

        <div className="mt-8 space-y-5">
          {shots.map((shot) => (
            <article key={shot.src} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative aspect-[16/9]">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="border-t border-border px-5 py-3 text-sm text-muted-foreground">
                {shot.title}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-slate-900 px-7 py-10 text-slate-100 md:px-10">
          <h3 className="text-2xl font-black md:text-3xl">Planning a domain-specific business platform?</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 md:text-base">
            We can architect the same operational clarity for your industry use case.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
          >
            Discuss Requirements
          </Link>
        </div>
      </div>
    </section>
  );
}

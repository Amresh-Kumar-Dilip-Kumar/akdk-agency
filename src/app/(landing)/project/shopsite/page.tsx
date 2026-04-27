import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/landing/page-header2";

const snapshots = [
  { src: "/shop-1.png", alt: "Shopsite homepage" },
  { src: "/shop-2.png", alt: "Shopsite category page" },
  { src: "/shop-3.png", alt: "Shopsite checkout and product page" },
];

export default function ShopsiteDetailPage() {
  return (
    <section>
      <PageHeader
        heading={<>Our-Shop.site project breakdown</>}
        description={
          <>
            A conversion-focused e-commerce product built for simple onboarding,
            secure checkout, and reliable business operations.
          </>
        }
      />

      <div className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-10">
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-black text-foreground md:text-3xl">Project Goals</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            The platform was designed to help small merchants launch quickly with a
            modern storefront, clear product management, and secure payment flow.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-muted-foreground md:text-base">
            <li>- Frictionless shopping experience with clear navigation</li>
            <li>- Scalable catalog and inventory structure</li>
            <li>- Secure checkout and order lifecycle visibility</li>
            <li>- Mobile-first responsiveness for high engagement</li>
          </ul>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {snapshots.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative aspect-[16/10]">
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-slate-900 px-7 py-10 text-slate-100 md:px-10">
          <h3 className="text-2xl font-black md:text-3xl">Need an e-commerce platform like this?</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 md:text-base">
            We can tailor the same architecture to your brand, product model, and operations.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}

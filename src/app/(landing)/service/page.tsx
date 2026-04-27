"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/landing/page-header2";

const services = [
  {
    title: "Website Design & Development",
    description:
      "Marketing websites and business sites engineered for speed, discoverability, and conversions.",
    image: "/web.jpg",
    link: "/service/website-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform and native app interfaces with smooth performance and scalable architecture.",
    image: "/mobile.jpg",
    link: "/service/mobile-development",
  },
  {
    title: "E-commerce & CMS",
    description:
      "Conversion-ready storefronts with secure checkout, admin workflows, and product operations.",
    image: "/cms.jpg",
    link: "/service/ecommerce",
  },
  {
    title: "Custom Product Builds",
    description:
      "Internal tools, dashboards, and custom web systems built around your business process.",
    image: "/package.jpg",
    link: "/service/package",
  },
  {
    title: "SEO & Performance",
    description:
      "Technical SEO and page-speed optimization to improve rankings and user retention.",
    image: "/seo.jpg",
    link: "/service/seoptimize",
  },
];

export default function ServicePage() {
  return (
    <section>
      <PageHeader
        heading={<>Comprehensive digital services for modern businesses.</>}
        description={
          <>
            We handle strategy, design, engineering, and optimization so your team can
            move faster with confidence.
          </>
        }
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <Link
                    href={service.link}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-slate-900 px-7 py-10 text-slate-100 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Need a custom stack?</p>
            <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl">
              We can design your roadmap and delivery phases in one workshop.
            </h2>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
            >
              Get Free Consultation
              <CheckCircle2 className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

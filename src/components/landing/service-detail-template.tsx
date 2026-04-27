"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

type ServiceDetailTemplateProps = {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  highlights: string[];
  process: { title: string; description: string }[];
  cta: string;
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export function ServiceDetailTemplate({
  title,
  subtitle,
  description,
  heroImage,
  highlights,
  process,
  cta,
}: ServiceDetailTemplateProps) {
  return (
    <main className="pt-20 text-foreground">
      <section className="relative overflow-hidden border-b border-border py-16 md:py-20">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>
        <div className="pointer-events-none absolute inset-0 template-grid opacity-20" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
          <Link
            href="/service"
            className="mb-7 inline-flex items-center text-sm font-semibold text-sky-200 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl text-balance text-4xl font-black leading-tight text-white md:text-6xl"
          >
            {title}
          </motion.h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">
            {subtitle}
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-300/90 md:text-base">
            Structured delivery with transparent milestones, frequent updates, and production-grade engineering.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black md:text-4xl">Service Overview</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {description}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-lg font-bold text-foreground">What You Get</h3>
            <ul className="mt-4 space-y-3">
              {highlights.map((item) => (
                <motion.li variants={fadeUp} key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <h2 className="text-3xl font-black md:text-4xl">Our Process</h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {process.map((step, index) => (
              <motion.article
                key={step.title}
                variants={fadeUp}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-12 overflow-hidden rounded-2xl bg-slate-900 px-7 py-10 text-slate-100 md:px-10"
          >
            <div className="pointer-events-none absolute -left-10 -top-14 h-36 w-36 rounded-full bg-sky-200/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-8 h-36 w-36 rounded-full bg-primary/30 blur-2xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Ready to move forward?</p>
            <h3 className="mt-2 max-w-3xl text-3xl font-black leading-tight md:text-4xl">{cta}</h3>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

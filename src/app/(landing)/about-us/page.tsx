"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users2 } from "lucide-react";
import { PageHeader } from "@/components/landing/page-header2";

const values = [
  {
    title: "Clear Strategy",
    description: "Every project starts with goals, users, and business outcomes.",
  },
  {
    title: "Thoughtful Execution",
    description: "We build with maintainable systems and production-level quality.",
  },
  {
    title: "Fast Iteration",
    description: "Weekly progress with transparent communication and measurable milestones.",
  },
  {
    title: "Long-Term Support",
    description: "After launch, we improve performance and ship enhancements.",
  },
];

const team = [
  {
    name: "Nikhil Kumar",
    role: "Founder & Product Lead",
    image: "/profile/nikhil.png",
  },
  {
    name: "Utsav Soni",
    role: "Frontend Engineer & Co-Founder",
    image: "/profile/utsav.png",
  },
];

export default function AboutUs() {
  return (
    <section>
      <PageHeader
        heading={<>A focused team building impactful digital products.</>}
        description={
          <>
            AKDK Digital partners with businesses that need practical web solutions,
            reliable delivery, and a team that understands growth.
          </>
        }
      />

      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Who We Are</p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                We combine product thinking, design systems, and engineering execution.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Since 2020, our team has delivered websites, dashboards, and custom web apps
                for startups and service companies. We keep processes simple and outcomes clear.
              </p>
              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Talk With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
                <Image
                  src="/team.webp"
                  alt="AKDK Digital team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/60 py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Core Values</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">How we work with every client</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="mb-10 flex items-center gap-3">
            <Users2 className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-black md:text-4xl">Leadership</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={72}
                    height={72}
                    className="rounded-full border border-border object-cover"
                  />
                  <div>
                    <p className="text-lg font-bold text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-900 px-7 py-10 text-slate-100 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Let us build together</p>
            <h3 className="mt-2 text-3xl font-black leading-tight md:text-4xl">
              Ready to launch your next digital experience?
            </h3>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
            >
              Start A Conversation
              <CheckCircle2 className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

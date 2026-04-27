"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Rocket, Users, Briefcase } from "lucide-react";
import { PageHeader } from "@/components/landing/page-header2";
import { ApplyNowModal } from "@/components/careers/apply-now-modal";

const benefits = [
  "Build products with modern tools and clear ownership.",
  "Work in a collaborative team with practical mentorship.",
  "Flexible working style focused on outcomes over hours.",
  "Contribute to projects used by real businesses.",
];

const jobs = [
  {
    title: "Frontend Developer",
    location: "Raipur / Remote",
    type: "Full-time",
    status: "Closed",
    description:
      "Create polished interfaces with React and modern frontend architecture for production applications.",
  },
  {
    title: "UI/UX Designer",
    location: "Raipur / Remote",
    type: "Internship",
    status: "Open",
    description:
      "Design user flows and visual systems that simplify complex tasks and improve conversion outcomes.",
  },
  {
    title: "Backend Developer",
    location: "Raipur / Remote",
    type: "Full-time",
    status: "Open",
    description:
      "Develop robust backend services, APIs, and data models that power reliable product experiences.",
  },
];

export default function CareerPage() {
  return (
    <section>
      <PageHeader
        heading={<>Join a team that ships meaningful digital products.</>}
        description={
          <>
            We are building a culture of ownership, quality, and continuous growth.
            If that matches your mindset, we would like to hear from you.
          </>
        }
      />

      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Join</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
              Build your career with high-impact projects.
            </h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
          >
            <Image src="/career.jpg" alt="AKDK team culture" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-black md:text-4xl">Open Positions</h2>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.article
                key={job.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{job.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{job.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{job.type}</span>
                      <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4" />{job.status}</span>
                    </div>
                  </div>
                  <ApplyNowModal role={job.title} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{job.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-900 px-7 py-10 text-slate-100 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">General Application</p>
            <h3 className="mt-2 text-3xl font-black leading-tight md:text-4xl">
              Do not see your role? We still want to know your strengths.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              Send your profile with projects and we will reach out when there is a fit.
            </p>
            <div className="mt-6 inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              <Rocket className="mr-2 h-4 w-4" />
              careers@akdkdigital.com
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

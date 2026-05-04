"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/landing/page-header2";
import { useAnalytics } from "@/app/(analytics)/_hooks/use-analytics";

const projects = [
  {
    title: "Our-Shop.site",
    summary:
      "A streamlined e-commerce experience that helps small businesses launch quickly and sell confidently.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    image: "/shop-1.png",
    link: "https://our-shop.site/",
    detail: "/project/shopsite",
    category: "E-commerce",
    live: true,
  },
  {
    title: "Green Corp Agriculture",
    summary:
      "A brand and information platform focused on sustainable farming and premium product storytelling.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/green-1.png",
    link: "https://greenagricorp.netlify.app/",
    detail: "/project/greenagri",
    category: "B2B Platform",
    live: true,
  },
  {
    title: "Warehouse Gate Logger",
    summary:
      "An operational tool to track vehicle and inventory movement with greater accountability and visibility.",
    techStack: ["Next.js", "Tailwind CSS", "Prisma"],
    image: "/warehouse-1.png",
    link: "https://server.ermonline.in/",
    detail: "/contact-us",
    category: "Operations",
    live: true,
  },
];

const filters = ["All", "E-commerce", "Operations", "B2B Platform"];

export default function ProjectPage() {
  const { trackEvent } = useAnalytics();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const [featured, ...rest] = filtered;

  return (
    <section>
      <PageHeader
        heading={<>Selected products built for real-world impact.</>}
        description={
          <>
            Explore projects where strategy, design, and engineering came together
            to solve clear business problems.
          </>
        }
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">

        {/* Filter + Count bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActiveFilter(f);
                trackEvent("interaction", "project_filter_change", f, {
                  page: "/project",
                  section: "filter_bar",
                  selectedFilter: f,
                });
              }}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "Project" : "Projects"}
          </span>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-16 text-center text-sm text-muted-foreground"
            >
              No projects in this category yet.
            </motion.p>
          ) : (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="mt-10 space-y-10"
            >
              {/* Featured card — full width */}
              {featured && (
                <article className="group relative overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="grid lg:grid-cols-[1fr_1fr]">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[400px]">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Live badge */}
                      {featured.live && (
                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
                          Live
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-8 lg:p-10">
                      <div>
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                          {featured.category}
                        </span>
                        <h2 className="mt-4 text-2xl font-black text-foreground md:text-3xl lg:text-4xl">
                          {featured.title}
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                          {featured.summary}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {featured.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <a
                          href={featured.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() =>
                            trackEvent("click", "project_live_site_click", featured.title, {
                              page: "/project",
                              section: "featured_project",
                              projectTitle: featured.title,
                              outboundUrl: featured.link,
                            })
                          }
                          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          Live Project
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                        <Link
                          href={featured.detail}
                          onClick={() =>
                            trackEvent("click", "case_study_click", featured.title, {
                              page: "/project",
                              section: "featured_project",
                              projectTitle: featured.title,
                            })
                          }
                          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                        >
                          Case Study
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Rest — 2-column grid with hover overlay */}
              {rest.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2">
                  {rest.map((project) => (
                    <Link
                      key={project.title}
                      href={project.detail}
                      onClick={() =>
                        trackEvent("click", "case_study_click", project.title, {
                          page: "/project",
                          section: "project_grid",
                          projectTitle: project.title,
                          projectCategory: project.category,
                        })
                      }
                      className="group relative overflow-hidden rounded-2xl border border-border bg-card"
                    >
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 45vw"
                        />
                        {/* Gradient always visible */}
                        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent" />
                        {/* Static label */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <span className="inline-block rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                            {project.category}
                          </span>
                          <h3 className="mt-1 text-lg font-black text-white">{project.title}</h3>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-black/80 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="inline-block self-start rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                            {project.category}
                          </span>
                          <h3 className="mt-2 text-lg font-black text-white">{project.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-white/75 line-clamp-2">
                            {project.summary}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {project.techStack.map((t) => (
                              <span key={t} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/90">
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 rounded-md bg-white px-4 py-2 text-xs font-bold text-slate-900">
                              Case Study
                            </span>
                            {project.live && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  trackEvent("click", "project_live_site_click", project.title, {
                                    page: "/project",
                                    section: "project_grid",
                                    projectTitle: project.title,
                                    outboundUrl: project.link,
                                  });
                                }}
                                className="inline-flex items-center gap-1.5 rounded-md border border-white/40 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Live
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </div>
                        {/* Live badge */}
                        {project.live && (
                          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
                            Live
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
        <Link
          href="/contact-us"
          onClick={() =>
            trackEvent("click", "sticky_mobile_cta_click", "Start Your Project", {
              page: "/project",
              section: "sticky_mobile_cta",
              ctaText: "Start Your Project",
            })
          }
          className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/30"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  );
}

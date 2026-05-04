"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useAnalytics } from "@/app/(analytics)/_hooks/use-analytics";
import { ExternalLink } from "lucide-react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  FolderKanban,
  Globe,
  Linkedin,
  Medal,
  Rocket,
  ShieldCheck,
  Sparkles,
  Twitter,
  Users,
  X,
} from "lucide-react";

const stats = [
  { value: "2050+", label: "Happy Clients", icon: Users },
  { value: "800k", label: "Completed Project", icon: FolderKanban },
  { value: "500K", label: "Investments", icon: CircleDollarSign },
  { value: "45+", label: "Winning Awards", icon: Medal },
];

const projects = [
  {
    title: "Shopsite Commerce Platform",
    category: "E-commerce",
    image: "/shop-1.png",
    description: "A streamlined e-commerce experience helping small businesses launch fast and sell confidently with modern UI.",
    techStack: ["Next.js", "React", "Tailwind"],
    link: "https://our-shop.site/",
    detail: "/project/shopsite",
    live: true,
  },
  {
    title: "Warehouse Operations Suite",
    category: "Operations",
    image: "/warehouse-1.png",
    description: "An operational tool tracking vehicle and inventory movement with full accountability and real-time visibility.",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
    link: "https://server.ermonline.in/",
    detail: "/contact-us",
    live: true,
  },
  {
    title: "Green Agri Trade Platform",
    category: "B2B Platform",
    image: "/green-1.png",
    description: "A brand and information platform focused on sustainable farming and premium product storytelling.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://greenagricorp.netlify.app/",
    detail: "/project/greenagri",
    live: true,
  },
];

const portfolioFilters = ["All", "E-commerce", "Operations", "B2B Platform"];

const services = [
  "Web Development",
  "Mobile Application Development",
  "Cloud Deployment",
  "Performance Optimization",
];

const team = [
  {
    name: "Nikhil Kumar",
    role: "Founder & Product Lead",
    image: "/profile/nikhil.png",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Utsav Soni",
    role: "Frontend Engineer & Co-Founder",
    image: "/profile/utsav.png",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    subtitle: "For small businesses",
    price: "₹25,000",
    priceNote: "One-time project",
    icon: Globe,
    highlighted: false,
    features: [
      { text: "5-page website", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "Contact form integration", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Custom admin dashboard", included: false },
      { text: "Post-launch support", included: false },
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    subtitle: "Best for growing brands",
    price: "₹60,000",
    priceNote: "One-time project",
    icon: Rocket,
    highlighted: true,
    features: [
      { text: "Up to 15 pages", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "Contact form integration", included: true },
      { text: "Advanced SEO setup", included: true },
      { text: "Custom admin dashboard", included: true },
      { text: "30 days post-launch support", included: false },
    ],
    cta: "Get Started",
  },
  {
    name: "Business",
    subtitle: "Full-scale web product",
    price: "₹1,20,000",
    priceNote: "One-time project",
    icon: ShieldCheck,
    highlighted: false,
    features: [
      { text: "Unlimited pages", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "All form integrations", included: true },
      { text: "Full SEO + analytics", included: true },
      { text: "Custom admin dashboard", included: true },
      { text: "60 days post-launch support", included: true },
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    subtitle: "Custom solutions",
    price: "Custom",
    priceNote: "Let's talk",
    icon: Sparkles,
    highlighted: false,
    features: [
      { text: "Full custom scope", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "All integrations", included: true },
      { text: "Full SEO + analytics", included: true },
      { text: "Custom admin dashboard", included: true },
      { text: "Ongoing retainer available", included: true },
    ],
    cta: "Contact Us",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A typical 5-10 page website takes 3-6 weeks from design to launch. Larger projects with custom dashboards or e-commerce can take 8-12 weeks. We share a clear timeline before we start.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. All Growth and Business plans include post-launch support. We also offer ongoing retainers for updates, new features, and performance monitoring.",
  },
  {
    q: "What technologies do you use?",
    a: "We primarily build with Next.js, React, Tailwind CSS, and PostgreSQL with Prisma. For simpler sites we also use HTML/CSS/JS. We pick the stack that fits your project's needs.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely - every project we ship is fully responsive across mobile, tablet, and desktop. We test on real devices before delivery.",
  },
  {
    q: "Can I update the website content myself?",
    a: "Yes. Business and above plans include a custom admin dashboard so you can edit content, images, and listings without touching code.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We've worked with clients across India and internationally. All communication is in English and we work across time zones.",
  },
];

const insights = [
  {
    date: "Apr 20, 2026",
    title: "Why your website is losing customers (and how to fix it)",
    excerpt: "Slow load times, unclear messaging, and weak mobile UX are the top three conversion killers. Here's a practical checklist to fix each.",
    image: "/shop-1.png",
    tag: "Performance",
  },
  {
    date: "Mar 14, 2026",
    title: "The case for a custom dashboard over off-the-shelf CMS",
    excerpt: "Generic CMS tools add bloat and constrain your brand. A purpose-built admin interface gives you exactly what you need - nothing more.",
    image: "/warehouse-1.png",
    tag: "Strategy",
  },
  {
    date: "Feb 28, 2026",
    title: "How we shipped a full e-commerce site in 5 weeks",
    excerpt: "A behind-the-scenes look at the process, decisions, and trade-offs we made while building Our-Shop.site from zero to launch.",
    image: "/green-1.png",
    tag: "Case Study",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.75, ease: smoothEase },
  },
};

const revealMotion = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay = 0,
  distance = 42,
) => {
  const axisMap = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return {
    initial: { opacity: 0, ...axisMap[direction] },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 1.7, delay, ease: smoothEase },
  };
};

export default function LandingPageV2() {
  const { scrollYProgress } = useScroll();
  const { trackEvent } = useAnalytics();
  const heroY = useTransform(scrollYProgress, [0, 0.12], [0, -40]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden pb-24 pt-20 text-foreground md:pb-0">
      <section className="relative border-b border-border pb-20 pt-14 md:pb-24 md:pt-20">
        <div className="absolute inset-0 template-grid opacity-40" />
        <div className="absolute left-1/2 top-8 h-44 w-[70%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-12 top-24 h-44 w-44 rounded-full bg-sky-300/15 blur-3xl" />
        <div className="absolute -right-10 bottom-8 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="section-fade-in max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary"
            >
              Trusted by founders. 50+ launches. Fast delivery.
            </motion.span>
            <motion.h1 variants={fadeUp} className="mt-6 text-balance text-4xl font-black leading-[1.03] md:text-6xl">
              Build Conversion-Ready
              <br />
              Websites and Apps
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              AKDK Digital designs and ships fast, scalable digital products for startups
              and growth-stage businesses with clear business outcomes.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                onClick={() =>
                  trackEvent("click", "hero_cta_click", "Book a Free Strategy Call", {
                    page: "/",
                    section: "hero",
                    ctaText: "Book a Free Strategy Call",
                  })
                }
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/project"
                onClick={() =>
                  trackEvent("click", "hero_cta_click", "See Our Case Studies", {
                    page: "/",
                    section: "hero",
                    ctaText: "See Our Case Studies",
                  })
                }
                className="inline-flex items-center rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                See Our Case Studies
              </Link>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-3 text-xs font-medium text-muted-foreground">
              We respond within 24 hours.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-5 text-sm text-muted-foreground">
              {[
                "Fast launch cycles",
                "Design + engineering in one flow",
                "Scalable codebase handoff",
              ].map((point) => (
                <div key={point} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-primary" />
                  {point}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 42, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ delay: 0.38, duration: 1.95, ease: smoothEase }}
            className="relative lg:pl-6"
            style={{ y: heroY }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
              <Image
                src="/team.webp"
                alt="AKDK Digital team discussing projects"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-background/95 px-5 py-4 shadow-lg backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Delivery
              </p>
              <p className="mt-1 text-2xl font-black text-primary">From Idea To Launch</p>
            </div>
            <div className="absolute -right-3 top-4 rounded-lg border border-border bg-background/90 px-4 py-3 text-sm font-semibold text-foreground shadow-md backdrop-blur">
              Typical MVP Timeline: 4-8 Weeks
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-card/50 py-14">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Achievements
            </p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Our Achievements</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((item) => (
              <motion.article
                key={item.label}
                variants={fadeUp}
                className="rounded-xl border border-border bg-background p-6 text-center transition-transform hover:-translate-y-1"
              >
                <item.icon className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-4 text-3xl font-black text-foreground">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio Section ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          {/* Header */}
          <motion.div
            {...revealMotion("left")}
            className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our Portfolio</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Our Recent Projects</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Real-world products designed, built, and shipped.
              </p>
            </div>
            <Link
              href="/project"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              See All Projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            {...revealMotion("down", 0.12)}
            className="mt-8 flex flex-wrap gap-2"
          >
            {portfolioFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  trackEvent("interaction", "project_filter_change", filter, {
                    page: "/",
                    section: "portfolio",
                    selectedFilter: filter,
                  });
                }}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
            <span className="ml-auto hidden items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground sm:inline-flex">
              {activeFilter === "All" ? projects.length : projects.filter(p => p.category === activeFilter).length} Projects
            </span>
          </motion.div>

          {/* Project Grid — Featured large + 2 stacked */}
          <AnimatePresence mode="wait">
            {(() => {
              const filtered = activeFilter === "All"
                ? projects
                : projects.filter((p) => p.category === activeFilter);
              const [featured, ...rest] = filtered;
              if (!featured) return (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-14 text-center text-sm text-muted-foreground"
                >
                  No projects in this category yet.
                </motion.p>
              );
              return (
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 1.35, ease: smoothEase }}
                  className={`mt-8 grid gap-5 ${rest.length > 0 ? "lg:grid-cols-2" : ""}`}
                >
                  {/* Featured card */}
                  <Link
                    href={featured.detail}
                    onClick={() =>
                      trackEvent("click", "case_study_click", featured.title, {
                        page: "/",
                        section: "portfolio",
                        projectTitle: featured.title,
                        projectCategory: featured.category,
                      })
                    }
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[400px]">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Bottom gradient overlay always visible */}
                      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent" />
                      {/* Static label */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                          {featured.category}
                        </span>
                        <h3 className="mt-1.5 text-xl font-black text-white md:text-2xl">{featured.title}</h3>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end bg-black/75 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="inline-block self-start rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                          {featured.category}
                        </span>
                        <h3 className="mt-2 text-xl font-black text-white md:text-2xl">{featured.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/80">{featured.description}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {featured.techStack.map((t) => (
                            <span key={t} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/90">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-4 py-2 text-xs font-bold text-slate-900">
                            View Details
                          </span>
                          {featured.live && (
                            <a
                              href={featured.link}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => {
                                e.stopPropagation();
                                trackEvent("click", "project_live_site_click", featured.title, {
                                  page: "/",
                                  section: "portfolio",
                                  projectTitle: featured.title,
                                  outboundUrl: featured.link,
                                });
                              }}
                              className="inline-flex items-center gap-1.5 rounded-md border border-white/40 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              Live Site
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Stacked smaller cards */}
                  {rest.length > 0 && (
                    <div className="flex flex-col gap-5">
                      {rest.map((project) => (
                        <Link
                          key={project.title}
                          href={project.detail}
                          onClick={() =>
                            trackEvent("click", "case_study_click", project.title, {
                              page: "/",
                              section: "portfolio",
                              projectTitle: project.title,
                              projectCategory: project.category,
                            })
                          }
                          className="group relative flex-1 overflow-hidden rounded-2xl border border-border bg-card"
                        >
                          <div className="relative aspect-[16/7] w-full">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Bottom gradient always visible */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <span className="inline-block rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                                {project.category}
                              </span>
                              <h3 className="mt-1 text-base font-black text-white">{project.title}</h3>
                            </div>
                            {/* Hover overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end bg-black/75 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <span className="inline-block self-start rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                                {project.category}
                              </span>
                              <h3 className="mt-1.5 text-base font-black text-white">{project.title}</h3>
                              <p className="mt-1.5 text-xs leading-relaxed text-white/75 line-clamp-2">{project.description}</p>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {project.techStack.map((t) => (
                                  <span key={t} className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/90">
                                    {t}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-3 flex items-center gap-2">
                                <span className="inline-flex items-center gap-1 rounded-md bg-white px-3 py-1.5 text-xs font-bold text-slate-900">
                                  View Details
                                </span>
                                {project.live && (
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      trackEvent("click", "project_live_site_click", project.title, {
                                        page: "/",
                                        section: "portfolio",
                                        projectTitle: project.title,
                                        outboundUrl: project.link,
                                      });
                                    }}
                                    className="inline-flex items-center gap-1 rounded-md border border-white/40 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/10"
                                  >
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    Live
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </section>

      <section className="border-b border-border bg-card/60 py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What We Build</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
              We design digital systems that increase trust, conversion, and retention.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={index % 2 === 0 ? { opacity: 0, x: -28 } : { opacity: 0, y: -28 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.18, duration: 1.55, ease: smoothEase }}
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          {/* Header */}
          <motion.div
            {...revealMotion("down")}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our Team</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">The People Behind The Work</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
              A small but sharp team of builders who care deeply about craft, performance, and outcomes.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="mt-14 flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={
                  index % 3 === 0
                    ? { opacity: 0, x: -34 }
                    : index % 3 === 1
                    ? { opacity: 0, y: -30 }
                    : { opacity: 0, x: 34 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2, duration: 1.6, ease: smoothEase }}
                className="group relative flex w-[220px] flex-col items-center"
              >
                {/* Photo with hover ring */}
                <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-transparent shadow-lg transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-primary/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="192px"
                  />
                  {/* Subtle gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Info */}
                <div className="mt-5 text-center">
                  <p className="text-base font-black text-foreground">{member.name}</p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    {member.role}
                  </p>
                </div>

                {/* Social links */}
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft CTA */}
          <motion.div
            {...revealMotion("up", 0.22)}
            className="mt-14 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Want to work with us?{" "}
              <Link href="/career" className="font-semibold text-primary underline-offset-4 hover:underline">
                We&apos;re hiring →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Plans ── */}
      <section className="border-b border-border bg-card/40 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <motion.div
            {...revealMotion("right")}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our Pricing Plans</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Ready to start your project?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
              Transparent, fixed-price packages — no hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={index % 2 === 0 ? { opacity: 0, x: -30 } : { opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2, duration: 1.6, ease: smoothEase }}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  plan.highlighted
                    ? "border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/25"
                    : "border-border bg-card text-foreground"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                )}

                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className={`text-base font-black ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                      {plan.name}
                    </p>
                    <p className={`mt-0.5 text-xs ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {plan.subtitle}
                    </p>
                  </div>
                  <plan.icon className={`h-6 w-6 opacity-80 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                </div>

                {/* Price */}
                <div className="mt-6">
                  <p className={`text-3xl font-black ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.price}
                  </p>
                  <p className={`mt-1 text-xs ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.priceNote}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href="/contact-us"
                  onClick={() =>
                    trackEvent("click", "pricing_plan_select", plan.name, {
                      page: "/",
                      section: "pricing",
                      planName: plan.name,
                      ctaText: plan.cta,
                    })
                  }
                  className={`mt-5 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-bold transition-all ${
                    plan.highlighted
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-foreground dark:text-background"
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Divider */}
                <div className={`my-5 h-px w-full ${plan.highlighted ? "bg-white/20" : "bg-border"}`} />

                {/* Features */}
                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 text-sm">
                      {f.included ? (
                        <CheckCircle2 className={`h-4 w-4 shrink-0 ${plan.highlighted ? "text-white" : "text-primary"}`} />
                      ) : (
                        <X className={`h-4 w-4 shrink-0 ${plan.highlighted ? "text-white/40" : "text-muted-foreground/50"}`} />
                      )}
                      <span className={f.included ? (plan.highlighted ? "text-primary-foreground" : "text-foreground") : (plan.highlighted ? "text-primary-foreground/50" : "text-muted-foreground/60")}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 1.6, ease: smoothEase }}
            className="mt-8 text-center text-xs text-muted-foreground"
          >
            All prices are indicative. Final scope and cost confirmed after a free discovery call.{" "}
            <Link href="/contact-us" className="font-semibold text-primary underline-offset-4 hover:underline">
              Book yours →
            </Link>
          </motion.p>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            {/* Left */}
            <motion.div
              {...revealMotion("left")}
              className="lg:sticky lg:top-24"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">FAQ</p>
              <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Still have questions? We&apos;re happy to help.
              </p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ask us directly
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Right — accordion */}
            <motion.div
              {...revealMotion("right", 0.1)}
              className="space-y-3"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.14, duration: 1.45, ease: smoothEase }}
                  className="overflow-hidden rounded-xl border border-border bg-card"
                >
                  <button
                    onClick={() => {
                      const nextOpen = openFaq === index ? null : index;
                      setOpenFaq(nextOpen);
                      if (nextOpen !== null) {
                        trackEvent("interaction", "faq_expand", faq.q, {
                          page: "/",
                          section: "faq",
                          question: faq.q,
                        });
                      }
                    }}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-foreground transition-colors hover:text-primary"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${openFaq === index ? "rotate-180 text-primary" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.82, ease: smoothEase }}
                      >
                        <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Insights / Blog ── */}
      <section className="border-b border-border bg-card/40 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <motion.div
            {...revealMotion("down")}
            className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our Insights</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Thinking Out Loud</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Notes on web craft, strategy, and what we learn building digital products.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Get in touch
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((post, index) => (
              <motion.article
                key={post.title}
                initial={
                  index % 3 === 0
                    ? { opacity: 0, x: -30 }
                    : index % 3 === 1
                    ? { opacity: 0, y: -28 }
                    : { opacity: 0, x: 30 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2, duration: 1.55, ease: smoothEase }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg hover:shadow-black/5"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* tag badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow">
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-block rounded-full border border-border bg-background px-3 py-1 text-[10px] font-semibold text-muted-foreground">
                    {post.date}
                  </span>
                  <h3 className="mt-3 text-base font-black leading-snug text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary">
                    Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <motion.div
            {...revealMotion("up")}
            className="relative overflow-hidden rounded-2xl bg-slate-900 px-7 py-10 text-slate-100 md:px-12 md:py-12"
          >
            <div className="pointer-events-none absolute -bottom-14 -right-8 h-40 w-40 rounded-full bg-sky-300/10 blur-2xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Need A Reliable Team?</p>
            <h3 className="mt-2 max-w-2xl text-3xl font-black leading-tight md:text-4xl">
              Tell us your goals and we will design the right website architecture for growth.
            </h3>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                onClick={() =>
                  trackEvent("click", "schedule_call_click", "Book A Discovery Call", {
                    page: "/",
                    section: "final_cta",
                    ctaText: "Book A Discovery Call",
                  })
                }
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
              >
                Book A Discovery Call
              </Link>
              <Link
                href="/service"
                onClick={() =>
                  trackEvent("click", "services_cta_click", "View Services", {
                    page: "/",
                    section: "final_cta",
                    ctaText: "View Services",
                  })
                }
                className="inline-flex items-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
        <Link
          href="/contact-us"
          onClick={() =>
            trackEvent("click", "sticky_mobile_cta_click", "Book Free Strategy Call", {
              page: "/",
              section: "sticky_mobile_cta",
              ctaText: "Book Free Strategy Call",
            })
          }
          className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/30"
        >
          Book Free Strategy Call
        </Link>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, Check, Star } from "lucide-react";

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end border-b border-gray-200 overflow-hidden bg-[#FAFAF9]">
      {/* Full-bleed background image with a very light overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.webp"
          alt="AKDK Digital team collaborating at a desk, building modern web applications together"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#FAFAF9]/80" />
      </div>

      {/* Red accent bar — top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

      <div className="max-w-6xl mx-auto px-6 w-full pb-20 pt-36">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-red-600 text-xs font-bold uppercase tracking-[0.25em] mb-6"
        >
          Digital Product Agency
        </motion.p>

        {/* Giant headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-[clamp(3rem,9vw,7rem)] font-black leading-[0.95] tracking-tight text-gray-950 max-w-4xl mb-8"
        >
          We Build<br />
          <span className="text-red-600">Digital</span><br />
          Experiences.
        </motion.h1>

        {/* Bottom row: tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-gray-300"
        >
          <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
            Websites, e-commerce, and software — built fast and with purpose for small businesses and founders.
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/contact-us">
              <button className="px-7 py-3.5 bg-gray-950 text-white text-sm font-semibold hover:bg-red-600 transition-colors duration-200 flex items-center gap-2">
                Start a Project <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/service">
              <button className="px-7 py-3.5 border border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-950 transition-colors duration-200">
                Our Services
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex gap-10"
        >
          {[
            { value: "3+", label: "Years" },
            { value: "20+", label: "Clients" },
            { value: "50+", label: "Projects" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-gray-950">{s.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TECH STACK
// ─────────────────────────────────────────────
const techStack = [
  { name: "React",        logo: "/react.png",        alt: "React.js logo — JavaScript UI library" },
  { name: "Next.js",      logo: "/next.svg",         alt: "Next.js logo — full-stack React framework" },
  { name: "React Native", logo: "/react-native.png", alt: "React Native logo — cross-platform mobile framework" },
  { name: "iOS",          logo: "/ios.png",          alt: "Apple iOS logo — native iOS development" },
  { name: "Android",      logo: "/andriod.png",      alt: "Android logo — native Android development" },
  { name: "HTML5",        logo: "/html5.png",        alt: "HTML5 logo — semantic web markup standard" },
];

function TechStackSection() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 flex-shrink-0">
          Built with
        </span>
        <div className="flex flex-wrap items-center gap-8 md:gap-10">
          {techStack.map((t) => (
            <div
              key={t.name}
              className="relative w-8 h-8 opacity-40 hover:opacity-100 transition-opacity duration-200"
            >
              <Image src={t.logo} alt={t.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────
const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Custom web apps with Next.js and React. Responsive, performant, and SEO-ready.",
    image: "/web.jpg",
    alt: "Modern responsive website layout — clean navigation, hero section and content blocks built with Next.js",
    features: ["React & Next.js", "Responsive Design", "SEO Optimized"],
  },
  {
    num: "02",
    title: "Mobile Apps",
    description: "Cross-platform and native apps for iOS and Android with smooth, intuitive UX.",
    image: "/mobile.jpg",
    alt: "Mobile app UI screens for iOS and Android — navigation, content, and smooth transitions",
    features: ["iOS & Android", "React Native", "App Store Ready"],
  },
  {
    num: "03",
    title: "E-commerce",
    description: "Full stores with secure payments, inventory management, and analytics.",
    image: "/shop-1.png",
    alt: "E-commerce product listings, cart, and checkout flow with clean filtering and layout",
    features: ["Payment Gateway", "Order Management", "Analytics"],
  },
  {
    num: "04",
    title: "UI/UX Design",
    description: "Wireframes to design systems. Interfaces that convert and feel great.",
    image: "/custom.jpg",
    alt: "Design canvas showing wireframes and high-fidelity screens side by side",
    features: ["Wireframing", "Prototyping", "Design Systems"],
  },
  {
    num: "05",
    title: "SEO & Marketing",
    description: "Technical SEO, content strategy, and analytics to drive qualified traffic.",
    image: "/seo.jpg",
    alt: "SEO dashboard with keyword rankings, organic traffic chart and page performance data",
    features: ["Technical SEO", "Content Strategy", "Analytics"],
  },
  {
    num: "06",
    title: "Support & Maintenance",
    description: "Ongoing patches, updates, and monitoring so your app stays healthy.",
    image: "/seamlessupgrade.webp",
    alt: "Developer at a code editor running a deployment pipeline — maintenance and upgrade workflow",
    features: ["24/7 Support", "Security Patches", "Performance"],
  },
];

function ServicesSection() {
  return (
    <section id="services" className="bg-[#FAFAF9] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-red-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight">
              Services
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            End-to-end digital services to get your product live and growing.
          </p>
        </div>

        {/* Service rows — alternating layout */}
        <div className="divide-y divide-gray-200">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group grid md:grid-cols-[80px_1fr_320px] gap-6 items-center py-8 hover:bg-white transition-colors duration-200 -mx-6 px-6"
            >
              {/* Number */}
              <span className="text-4xl font-black text-gray-200 group-hover:text-red-100 transition-colors select-none">
                {svc.num}
              </span>

              {/* Text */}
              <div>
                <h3 className="text-xl font-bold text-gray-950 mb-1 group-hover:text-red-600 transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">{svc.description}</p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {svc.features.map((f) => (
                    <span key={f} className="flex items-center gap-1 text-xs text-gray-400">
                      <Check className="w-3 h-3 text-red-500" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-gray-100 hidden md:block">
                <Image
                  src={svc.image}
                  alt={svc.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="320px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PORTFOLIO
// ─────────────────────────────────────────────
const projects = [
  {
    title: "Warehouse Management System",
    tag: "Web App",
    image: "/warehouse-1.png",
    alt: "Warehouse management dashboard — real-time inventory tracking, stock levels and order fulfillment",
  },
  {
    title: "E-commerce Storefront",
    tag: "E-commerce",
    image: "/shop-2.png",
    alt: "Online store with product search, filter sidebar, cart, and clean checkout experience",
  },
  {
    title: "Mobile Commerce App",
    tag: "Mobile",
    image: "/shop-3.png",
    alt: "Mobile shopping app with product browsing, wishlist and one-step secure checkout",
  },
  {
    title: "Portfolio Website",
    tag: "Website",
    image: "/port-1.webp",
    alt: "Portfolio website — hero, project case studies grid, skills, and contact section",
  },
];

function PortfolioSection() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-red-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight">Selected Projects</h2>
          </div>
          <Link href="/project" className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-950 hover:text-red-600 transition-colors">
            All projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-up grid */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-white overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <span className="text-red-600 text-xs font-bold uppercase tracking-wider">{p.tag}</span>
                  <h3 className="text-gray-950 font-bold mt-0.5">{p.title}</h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-red-600 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link href="/project" className="flex items-center gap-2 text-sm font-semibold text-gray-950 hover:text-red-600 transition-colors">
            View all projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="bg-gray-950 text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/team.webp"
                alt="The AKDK Digital team gathered around a table reviewing wireframes and a product roadmap together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Red top-left accent line */}
              <div className="absolute top-0 left-0 w-16 h-1 bg-red-600" />
              <div className="absolute top-0 left-0 w-1 h-16 bg-red-600" />
            </div>
            {/* Stat callout */}
            <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-5 min-w-[130px] text-center">
              <div className="text-3xl font-black">50+</div>
              <div className="text-xs font-medium mt-1 opacity-80">Projects Delivered</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            <p className="text-red-500 text-xs font-bold uppercase tracking-[0.2em]">About Us</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              A Small Team<br />That Ships Fast
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              AKDK Digital is a focused agency helping small businesses and early-stage founders turn ideas into working products. Hands-on, honest, obsessed with quality.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                "Clean, maintainable code from day one",
                "Transparent communication throughout",
                "Delivered on time, within budget",
                "Ongoing support after launch",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/about-us">
              <button className="mt-2 px-7 py-3.5 border border-gray-700 text-white text-sm font-semibold hover:border-red-600 hover:text-red-500 transition-colors flex items-center gap-2">
                About the team <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PRICING
// ─────────────────────────────────────────────
const plans = [
  {
    name: "Starter",
    price: "₹10k+",
    description: "Simple landing pages and personal sites.",
    features: ["Single-page site", "Mobile responsive", "Basic SEO", "Contact form", "1 month support"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "₹20k+",
    description: "Full business websites — multi-page.",
    features: ["Up to 8 pages", "Admin dashboard", "Analytics", "CMS integration", "3 months support"],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "₹50k+",
    description: "Complex apps and e-commerce — 2–3 months.",
    features: ["Custom web app", "E-commerce / SaaS", "Backend API", "Payments", "6 months support"],
    highlight: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="bg-[#FAFAF9] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-14">
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight">
            Transparent Pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gray-200">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 ${plan.highlight ? "bg-gray-950 text-white" : "bg-white text-gray-950"}`}
            >
              {plan.badge && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-2 py-1">
                  {plan.badge}
                </span>
              )}
              <h3 className={`text-base font-bold uppercase tracking-wider mb-1 ${plan.highlight ? "text-red-400" : "text-red-600"}`}>
                {plan.name}
              </h3>
              <div className="text-5xl font-black mt-2 mb-3">{plan.price}</div>
              <p className={`text-sm leading-relaxed mb-8 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                {plan.description}
              </p>
              <ul className="space-y-2.5 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-gray-300" : "text-gray-600"}`}>
                    <Check className={`w-3.5 h-3.5 flex-shrink-0 ${plan.highlight ? "text-red-400" : "text-red-500"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="block">
                <button className={`w-full py-3 text-sm font-bold border transition-colors duration-200 ${
                  plan.highlight
                    ? "border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                    : "border-gray-950 text-gray-950 hover:bg-gray-950 hover:text-white"
                }`}>
                  Get Started
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────
const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder, StartupFlow",
    quote: "AKDK built our MVP in 6 weeks. Clean code, fast delivery, and they actually understood what we needed. Highly recommend.",
    avatar: "/profile-1.webp",
    avatarAlt: "Profile photo of Rahul Mehta, founder of StartupFlow",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO, GreenCommerce",
    quote: "Their e-commerce solution transformed our business. Sales increased 3× after launch. Responsive and professional team.",
    avatar: "/profile-2.webp",
    avatarAlt: "Profile photo of Priya Sharma, CEO of GreenCommerce",
    rating: 5,
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight">
            Client Feedback
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gray-200">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-red-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-11 h-11 overflow-hidden flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.avatarAlt}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-950 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// CTA
// ─────────────────────────────────────────────
function CTASection() {
  return (
    <section id="contact" className="bg-red-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-200 text-xs font-bold uppercase tracking-[0.2em] mb-4">Let&apos;s Work Together</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Ready to Build<br />Something?
            </h2>
          </div>
          <div>
            <p className="text-red-100 text-lg leading-relaxed mb-8">
              Tell us what you want to create. We&apos;ll help you launch it — fast and right, with no fluff.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us">
                <button className="px-8 py-4 bg-white text-red-600 font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="mailto:akdkdigital@gmail.com">
                <button className="px-8 py-4 border-2 border-white/40 text-white font-bold text-sm hover:border-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Us
                </button>
              </a>
            </div>
            <p className="text-red-200 text-xs mt-5">akdkdigital@gmail.com · Free initial consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PAGE ROOT EXPORT
// ─────────────────────────────────────────────
export default function LandingPageV2() {
  return (
    <div className="bg-[#FAFAF9] text-gray-950 overflow-x-hidden">
      <HeroSection />
      <TechStackSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}


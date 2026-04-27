"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Footer() {
  const navLinks = [
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/service" },
    { name: "Projects", path: "/project" },
    { name: "Career", path: "/career" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", path: "/tmcd" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <footer className="border-t border-border bg-card/70">
      <div className="mx-auto w-full max-w-7xl px-6 pb-10 pt-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                AKDK Digital
              </div>
              <h2 className="max-w-md text-2xl font-bold leading-tight text-foreground md:text-3xl">
                Websites and products crafted with speed, clarity, and measurable outcomes.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              We build conversion-focused digital experiences for growing teams and early-stage companies.
            </p>

            <Link
              href="mailto:akdkdigital@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              akdkdigital@gmail.com
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="inline-flex items-center gap-2 text-sm text-foreground/85 transition-colors hover:text-primary"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Legal & Theme
            </h3>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-sm text-foreground/85 transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center"
        >
          <div>© 2026 AKDK Digital. All rights reserved.</div>
          <div className="text-xs uppercase tracking-[0.2em]">Crafted in India</div>
        </motion.div>
      </div>
    </footer>
  );
}

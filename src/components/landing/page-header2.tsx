"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const PageHeader = ({
  heading,
  description,
}: {
  heading: React.ReactNode;
  description: React.ReactNode;
}) => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-28 md:pt-32">
      <div className="absolute inset-0 template-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="AKDK Digital office background"
          fill
          className="object-cover object-center opacity-[0.08] dark:opacity-[0.05]"
          priority
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-6 z-10 h-56 w-[70%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-14 top-20 z-10 h-44 w-44 rounded-full bg-sky-300/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-12 bottom-10 z-10 h-52 w-52 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative z-20 mx-auto max-w-6xl px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              AKDK Digital
            </p>
            <h1 className="text-balance text-4xl font-black leading-tight text-foreground md:text-6xl">
              {heading}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="rounded-xl border border-border bg-card/80 p-6 backdrop-blur"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
              Strategy • Design • Engineering
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

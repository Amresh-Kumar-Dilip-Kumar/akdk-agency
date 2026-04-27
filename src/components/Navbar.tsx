"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, Menu, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Services", path: "/service" },
  { name: "Projects", path: "/project" },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/90 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link className="group flex items-center gap-3" href="/">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <span className="text-lg font-black">A</span>
                <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5 text-amber-300" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-[0.18em] text-primary">AKDK</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Digital Agency</p>
              </div>
            </Link>
          </motion.div>

          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-7 text-sm font-medium">
              {navigation.map((item) => {
                const active = isActive(item.path);

                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`transition-colors ${
                        active
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button
            className="rounded-md bg-primary px-5 text-primary-foreground hover:bg-primary/90"
            onClick={() => (window.location.href = "/contact-us")}
          >
            Start Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <button
          className="rounded-lg border border-border bg-card p-2.5 text-foreground md:hidden"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="border-t border-border bg-background/95 p-6 backdrop-blur-xl md:hidden"
        >
          <div className="space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
            <ThemeToggle />
            <Button
              className="w-full rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                window.location.href = "/contact-us";
                setOpen(false);
              }}
            >
              Start Project
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

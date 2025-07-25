"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { X, Menu, Zap, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "about-us" },
  { name: "Services", path: "service" },
  { name: "Career", path: "career" },
  { name: "Portfolio", path: "project" },
  { name: "Contact", path: "contact-us" },
];

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b-2 border-gray-300 shadow-lg"
          : "bg-white/95 backdrop-blur-sm border-b-2 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <motion.div
            className="flex-1 md:flex md:items-center md:gap-12"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link className="block text-[#000000] group" href="/">
              <div className="flex items-center gap-4">
                {/* Logo Icon Container */}
                <div className="relative">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

                  {/* Main Logo Container */}
                  <div className="relative w-14 h-14 bg-gradient-to-br from-red-600 via-red-700 to-pink-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-red-500/20 group-hover:scale-105">
                    {/* Inner Icon */}
                    <div className="relative">
                      <Code2 className="w-7 h-7 text-white" />
                      {/* Sparkle Effect */}
                      <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                </div>
                {/* Text Logo */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none">
                      <span className="bg-gradient-to-r from-red-600 via-red-700 to-pink-600 bg-clip-text text-transparent">
                        AKDK
                      </span>
                    </h1>
                    {/* Animated dot */}
                    <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">
                      Digital
                    </span>
                    <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Agency
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="md:flex md:items-center md:gap-8">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8 text-base">
                {Navigation.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative group"
                  >
                    <Link
                      className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-bold relative block pb-1 px-3 py-2 border-2 border-transparent hover:border-red-300 hover:bg-red-50 rounded-lg"
                      href={`/${item.path}`}
                    >
                      {item.name}
                      {/* Underline effect */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                size="lg"
                className="px-6 py-3 text-sm font-bold bg-gradient-to-r from-red-600 to-pink-600 text-white border-2 border-red-600 hover:from-red-700 hover:to-pink-700 hover:border-red-700 transition-all duration-300 hover:shadow-lg hover:scale-105 rounded-xl"
                onClick={() => (window.location.href = "/contact-us")}
              >
                <Zap className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-3 text-gray-700 hover:text-red-600 border-2 border-gray-300 hover:border-red-600 hover:bg-red-50 transition-all duration-300 rounded-xl"
                onClick={() => setOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t-2 border-gray-300 shadow-xl"
          >
            <div className="px-6 py-8 space-y-2">
              {Navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={`/${item.path}`}
                    className="block text-lg font-bold text-gray-700 hover:text-red-600 transition-colors duration-300 py-3 px-4 border-2 border-transparent hover:border-red-300 hover:bg-red-50 rounded-xl"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="pt-6 border-t-2 border-gray-300"
              >
                <Button
                  size="lg"
                  className="w-full px-6 py-3 text-base font-bold bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 transition-all duration-300 rounded-xl"
                  onClick={() => {
                    window.location.href = "/contact-us";
                    setOpen(false);
                  }}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

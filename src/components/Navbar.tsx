"use client";
// import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

import { useState } from "react";
import { X, Menu } from "lucide-react";
const Navigation = [
  { name: "Home", path: "/" },
  { name: "About-us", path: "about-us" }, // Corrected path
  { name: "Portfolio", path: "project" }, // Corrected path
  { name: "Contact Us", path: "contact-us" },
];

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md p-2 font-baloo-bhai-2 w-full"
    >
      <div
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-[#000000]" href="/">
              <span className="sr-only">Home</span>
              <h1 className="flex flex-row">
                <span className="text-2xl font-extrabold pr-2 text-slate-800">
                  AKDK
                </span>
                <span className="text-2xl font-normal">
                  Digi
                  <span className="text-red-600 font-bold">t</span>
                  al
                </span>
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8 text-base">
                {Navigation.map((item, index) => (
                  <div key={index}>
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        className="text-gray-500 transition hover:text-red-600"
                        href={`/${item.path}`} // Use the correct path
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  </div>
                ))}
              </ul>
            </nav>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:items-center sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="hidden sm:inline-flex"
                >
                  <Link
                    className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-normal hover:bg-red-500 text-white"
                    href="/service"
                  >
                    Our Services
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <div className="block md:hidden">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => setOpen(!isOpen)}
                >
                  {isOpen ? (
                    <X className="size-5" />
                  ) : (
                    <Menu className="size-5" />
                  )}
                </motion.button>

                {/* Mobile Menu Items */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-16 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-4"
                  >
                    {Navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={`/${item.path}`}
                        className="text-lg px-4 py-2 hover:text-red-600"
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}

                    {/* Our Services Button - Styled for better alignment */}
                    <div className="px-4">
                      <Link
                        className="block w-full text-center rounded-md bg-red-600 px-4 py-2.5 text-sm font-normal text-white hover:bg-red-500"
                        href="/service"
                      >
                        Our Services
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

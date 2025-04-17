"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const WhyUs = () => (
  <section className="relative bg-white z-0 py-24">
    <div className="w-full max-w-7xl mx-auto px-0 lg:px-12 z-0">
      <div className="">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center "
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Why <span className="text-red-600">Choose Us?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At <strong>AKDK Digital</strong>, we excel in delivering impactful
            solutions. Here's why we stand out:
          </p>
        </motion.div>
        <div className="p-8"></div>
        {/* Center Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row py-12 items-center gap-6 md:gap-12 text-center sm:flex-1
            bg-gradient-to-r from-white via-red-100 to-white md:shadow-lg px-5
          "
        >
          <div className="flex flex-col  text-center sm:flex-1">
            <div className="text-2xl sm:text-3xl font-bold text-red-600">
              +3 Years
            </div>
            <p className="text-base sm:text-lg text-gray-700">
              Of crafting winning solutions.
            </p>
          </div>
          <div className="hidden sm:block h-12 w-0.5  bg-gray-300"></div>
          <div className="block sm:hidden h-0.5 w-12 bg-gray-300"></div>
          <div className="flex flex-col text-center sm:flex-1">
            <div className="text-2xl sm:text-3xl font-bold text-red-600">
              +20 Customers
            </div>
            <p className="text-base sm:text-lg text-gray-700">
              Satisfied with our services.
            </p>
          </div>
          <div className="hidden sm:block h-12 w-0.5  bg-gray-300"></div>
          <div className="block sm:hidden h-0.5 w-12 bg-gray-300"></div>

          <div className="flex flex-col text-center sm:flex-1">
            <div className="text-2xl sm:text-3xl font-bold text-red-600">
              +4 Free Tools
            </div>
            <p className="text-base sm:text-lg text-gray-700">
              To help businesses get started.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

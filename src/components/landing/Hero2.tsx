"use client";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => (
  <div className="relative bg-white z-0">
    <div className="absolute inset-0 bg-red-100 opacity-50 -z-10"></div>
    <Image
      src="/hero.webp"
      alt="Hero Image"
      layout="fill"
      objectFit="cover"
      className="
        -z-20 backdrop-blur-sm opacity-30 
      "
      style={{
        filter: "grayscale(100%) sepia(100%) hue-rotate(-50deg) saturate(500%)",
      }}
    />
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-5 font-baloo-bhai-2 z-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          // animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6 text-left"
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-lg leading-tight">
            Transform Your
            <span className="text-red-600"> Digital Presence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-md leading-relaxed">
            At <strong>AKDK Digital</strong>, we craft innovative web
            applications that elevate your business. Our expert team ensures
            seamless functionality and engaging user experiences tailored to
            your needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              variant="fourth"
              onClick={() => (window.location.href = "/project")}
            >
              View Portfolio
            </Button>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-all"
              variant="default"
              onClick={() => (window.location.href = "/service")}
            >
              Explore Services <MoveRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          // animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center md:p-20 max-w-[600px] mx-auto"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
        >
          <Image
            src="/hero.webp"
            alt="Hero Image"
            width={600}
            height={600}
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  </div>
);

"use client";
import { MoveRight, Sparkles, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => (
  <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-300"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-700"></div>
    </div>

    {/* Grid pattern overlay */}
    <div className="absolute inset-0 bg-grid-slate-100/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

    <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium w-fit"
          >
            <Sparkles className="w-4 h-4" />
            Digital Innovation Experts
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            Transform Your
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"> Digital Future</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-lg leading-relaxed"
          >
            At <span className="font-bold text-gray-900">AKDK Digital</span>, we craft extraordinary digital experiences that drive real business results. From cutting-edge web applications to seamless mobile solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              variant="theme"
              className="px-8 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => (window.location.href = "/project")}
            >
              View Our Work
            </Button>
            <Button
              size="lg"
              variant="fourth"
              className="px-8 py-3 text-base font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => (window.location.href = "/service")}
            >
              Explore Services <MoveRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-8 pt-8 border-t border-gray-200"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">3+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">20+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full opacity-20 z-10"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 w-12 h-12 bg-blue-500 rounded-full opacity-20 z-10"
          ></motion.div>

          <div className="relative">
            <Image
              src="/hero.webp"
              alt="Hero Image"
              width={600}
              height={600}
              className="object-cover rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent rounded-2xl"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  </div>
);

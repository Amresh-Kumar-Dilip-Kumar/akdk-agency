"use client";
import { MoveRight, Sparkles, ArrowDown, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => (
  <div className="relative min-h-screen overflow-hidden">
    {/* Hero background image with overlay */}
    <div className="absolute inset-0 z-10 top-0 left-0  bottom-0 right-0    ">
      <Image
        src="/hero.webp"
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Multi-layered overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-red-900/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-blue-900/20"></div>
    </div>

    {/* Animated floating elements */}
    <div className="absolute inset-0 overflow-hidden z-10 bg-transparent">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-32 h-32 bg-red-500/20 rounded-full blur-xl"
      ></motion.div>
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 right-32 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/3 w-60 h-60 bg-purple-500/15 rounded-full blur-2xl"
      ></motion.div>
    </div>

    {/* Particle effects */}
    <div className="absolute inset-0 z-20">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>

    <div className="relative z-30 w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 text-left"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-red-300/30 rounded-full text-white text-sm font-semibold w-fit shadow-lg"
          >
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Sparkles className="w-4 h-4 text-red-300" />
            </div>
            Premium Digital Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-white"
          >
            Elevate Your
            <motion.span
              className="block bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Digital Empire
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-200 max-w-lg leading-relaxed"
          >
            At{" "}
            <span className="font-bold text-white bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              AKDK Digital
            </span>
            , we don't just build websites – we craft digital experiences that
            inspire, engage, and convert. Your success is our masterpiece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-0"
              onClick={() => (window.location.href = "/project")}
            >
              <Play className="w-5 h-5 mr-2" />
              View Our Masterpieces
            </Button>
            <Button
              size="lg"
              className="px-8 py-4 text-base font-semibold rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => (window.location.href = "/service")}
            >
              Explore Services <MoveRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-8 pt-8 border-t border-white/20"
          >
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-white">3+</div>
              <div className="text-sm text-gray-300">Years Crafting</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-sm text-gray-300">Thrilled Clients</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-300">Digital Masterpieces</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content - Interactive Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Floating testimonial card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="absolute top-8 -left-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-xs shadow-2xl z-10"
          >
            <div className="flex items-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-white text-sm mb-3">
              "AKDK Digital transformed our vision into reality!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
              <div>
                <div className="text-white text-sm font-semibold">
                  Sarah Chen
                </div>
                <div className="text-gray-300 text-xs">CEO, TechStart</div>
              </div>
            </div>
          </motion.div>

          {/* Tech stack indicator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 -right-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-blue-300/30 rounded-2xl p-4 shadow-2xl"
          >
            <div className="text-white text-sm font-semibold mb-2">
              Built with
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                R
              </div>
              <div className="w-6 h-6 bg-cyan-500 rounded text-white text-xs flex items-center justify-center font-bold">
                N
              </div>
              <div className="w-6 h-6 bg-purple-500 rounded text-white text-xs flex items-center justify-center font-bold">
                T
              </div>
            </div>
          </motion.div>

          {/* Central glow effect */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-96 h-96 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-full blur-3xl"
          ></motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-300 mb-2 font-medium">
          Discover More
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
        >
          <ArrowDown className="w-5 h-5 text-white" />
        </motion.div>
      </motion.div>
    </div>
  </div>
);

"use client";
import { MoveRight, Play, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Section } from "@/components/new-landing-comp/section";
import { BoxCard } from "@/components/new-landing-comp/box-card";
import { IconBox } from "@/components/new-landing-comp/icon-box";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Happy Clients" },
  { value: "50+", label: "Projects Delivered" },
  { value: "24/7", label: "Support" },
];

const features = [
  "Custom Web Development",
  "Mobile App Solutions",
  "E-commerce Platforms",
  "Digital Marketing",
];

export const Hero = () => (
  <Section
    size="xl"
    className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
  >
    {/* Grid background */}
    <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

    {/* Geometric shapes */}
    <div className="absolute top-20 right-20 w-32 h-32 bg-red-100 opacity-60 rotate-45 -z-10"></div>
    <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-100 opacity-60 -z-10"></div>
    <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-100 opacity-60 rotate-12 -z-10"></div>

    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 w-full">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-2 border-red-200 text-red-700 text-sm font-bold uppercase tracking-wide"
        >
          <CheckCircle2 className="w-4 h-4" />
          Digital Innovation Experts
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none"
        >
          Build Your
          <span className="block text-red-600 mt-2">Digital Empire</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-gray-600 max-w-lg leading-relaxed"
        >
          Transform your business with cutting-edge digital solutions. We create
          powerful web applications, mobile apps, and digital experiences that
          drive real results.
        </motion.p>

        {/* Feature list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 gap-3"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Button
            size="lg"
            variant="theme"
            className="px-8 py-4 text-base font-bold border-2 hover:shadow-lg transition-all duration-300"
            onClick={() => (window.location.href = "/contact-us")}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 text-base font-bold border-2 border-gray-300 hover:border-red-300 hover:bg-red-50 hover:text-red-700 transition-all duration-300"
            onClick={() => (window.location.href = "/project")}
          >
            <Play className="w-5 h-5 mr-2" />
            View Our Work
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Content - Stats Grid */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative"
      >
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <BoxCard
              key={index}
              delay={0.6 + index * 0.1}
              variant="shadow"
              className="text-center border-2 border-gray-200 hover:border-red-300 group"
            >
              <div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </BoxCard>
          ))}
        </div>

        {/* Large decorative card */}
        <BoxCard
          delay={0.8}
          variant="elevated"
          className="mt-6 bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 text-center"
        >
          <IconBox
            icon={<CheckCircle2 className="w-8 h-8" />}
            variant="red"
            size="lg"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 font-medium">
            Join 20+ businesses that trust us with their digital transformation.
          </p>
        </BoxCard>
      </motion.div>
    </div>
  </Section>
);

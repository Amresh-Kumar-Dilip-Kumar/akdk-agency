"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Award, Users, Target, Lightbulb, Heart, Zap, Shield, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/landing/page-header2";
import Mission from "@/components/landing/Mission";

const profiles = [
  {
    name: "Nikhil Kumar",
    role: "Founder & CEO",
    description:
      "Visionary leader with 3+ years of experience in web development. Passionate about creating digital solutions that drive real business growth and innovation.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    image: "/profile/nikhil.png",
    specialties: ["Strategic Planning", "Full-Stack Development", "Team Leadership"]
  },
  {
    name: "Utsav Soni",
    role: "Frontend Developer & Co-Founder",
    description:
      "Creative frontend specialist focused on crafting beautiful, responsive interfaces that deliver exceptional user experiences across all devices.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    image: "/profile/utsav.png",
    specialties: ["React/Next.js", "UI/UX Design", "Mobile Responsiveness"]
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships through exceptional service."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every project undergoes rigorous testing to ensure flawless performance and reliability."
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description: "Fast, iterative development cycles that keep you ahead of the competition."
  }
];

const stats = [
  { value: "3+", label: "Years Experience", description: "Building digital excellence" },
  { value: "20+", label: "Happy Clients", description: "Across various industries" },
  { value: "50+", label: "Projects Completed", description: "Successful implementations" },
  { value: "24/7", label: "Support", description: "Always here for you" }
];

export default function AboutUs() {
  return (
    <section className="text-gray-900">
      {/* Section 1: Our Journey & Mission */}
      <PageHeader
        heading={<> Our Journey & Mission</>}
        description={
          <>
            Founded in 2020,{" "}
            <span className="font-bold text-white bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              AKDK Digital
            </span>{" "}
            empowers businesses with innovative web solutions that enhance
            functionality and drive engagement. Our mission is to deliver
            quality and innovation.
          </>
        }
      />
      <Mission /> {/* Section 2: Our Talented Team */}
      <div className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-blue-50/30"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center px-6 relative z-10">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mr-4"></div>
              <Users className="w-8 h-8 text-red-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-red-500 to-pink-500 ml-4"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 bg-clip-text text-transparent">
              Our Talented Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              Meet the skilled professionals behind{" "}
              <span className="font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                AKDK Digital
              </span>
              's success story.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <EnhancedProfileCard profile={profiles[0]} />
            <EnhancedProfileCard profile={profiles[1]} />
          </div>
        </div>
      </div>
      {/* Section 3: Enhanced Get in Touch */}
      <div className="relative py-24 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-8">
              <Target className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Digital Journey?
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              Let's discuss your project and bring your vision to life with our
              innovative solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/project"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                View Our Work
                <Zap className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnhancedProfileCard({
  profile,
}: {
  profile: (typeof profiles)[number];
}) {
  return (
    <div className="group relative">
      {/* Card Background with Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-red-200"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      <div className="relative p-8 lg:p-10">
        {/* Profile Image with Enhanced Styling */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
            <Image
              src={profile.image}
              alt={profile.name}
              width={120}
              height={120}
              className="relative w-30 h-30 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-all duration-500"
            />
            {/* Status Indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">
            {profile.name}
          </h2>

          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-sm font-bold uppercase tracking-wide">
            <Award className="w-4 h-4 mr-2" />
            {profile.role}
          </div>

          <p className="text-gray-600 leading-relaxed text-lg font-light">
            {profile.description}
          </p>

          {/* Social Links with Enhanced Styling */}
          <div className="flex justify-center space-x-4 pt-4">
            <Link
              href={profile.linkedin}
              className="group/social flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
            </Link>
            <Link
              href={profile.github}
              className="group/social flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <div className="py-24 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto text-center px-6">
          {/* Section Header */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 border border-gray-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-6">
              <Users className="w-4 h-4" />
              Team
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-8 text-gray-950">
              Our Talented Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              Meet the skilled professionals behind{" "}
              <span className="font-bold text-red-600">
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
      <div className="py-24 bg-red-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="border border-red-500 p-12 bg-red-600">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-red-600 mb-8">
              <Target className="w-8 h-8 text-red-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Start Your{" "}
              <span className="text-white underline decoration-white/60 underline-offset-4">
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
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold border border-white hover:bg-red-50 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/project"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-bold hover:bg-red-500 transition-colors"
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
    <div className="group bg-white border border-gray-200 h-full">
      <div className="p-8 lg:p-10">
        {/* Profile Image with Enhanced Styling */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Image
              src={profile.image}
              alt={profile.name}
              width={120}
              height={120}
              className="relative w-30 h-30 rounded-full object-cover border-2 border-gray-200"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            {profile.name}
          </h2>

          <div className="inline-flex items-center px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
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
              className="group/social flex items-center justify-center w-12 h-12 border border-gray-200 text-gray-700 hover:border-red-600 hover:text-red-600 transition-colors"
            >
              <FaLinkedin className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
            </Link>
            <Link
              href={profile.github}
              className="group/social flex items-center justify-center w-12 h-12 border border-gray-200 text-gray-700 hover:border-red-600 hover:text-red-600 transition-colors"
            >
              <FaGithub className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

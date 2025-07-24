"use client";
import { motion } from "framer-motion";
import { Trophy, Users, Rocket, Clock, Target, Award, Zap, ShieldCheck } from "lucide-react";
import { Section } from "@/components/new-landing-comp/section";
import { SectionHeader } from "@/components/new-landing-comp/section-header";
import { BoxCard } from "@/components/new-landing-comp/box-card";
import { IconBox } from "@/components/new-landing-comp/icon-box";

const stats = [
  { 
    icon: Clock, 
    value: "3+", 
    label: "Years of Excellence", 
    description: "Crafting winning solutions" 
  },
  { 
    icon: Users, 
    value: "20+", 
    label: "Happy Clients", 
    description: "Satisfied with our services" 
  },
  { 
    icon: Rocket, 
    value: "50+", 
    label: "Projects Delivered", 
    description: "Successful implementations" 
  },
  { 
    icon: Trophy, 
    value: "4+", 
    label: "Free Tools", 
    description: "To help businesses grow" 
  }
];

const features = [
  {
    icon: Target,
    title: "Strategic Approach",
    description: "Every project starts with understanding your business goals and creating a tailored strategy for success."
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and quality checks ensure your digital solutions perform flawlessly across all platforms."
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development methodology ensures rapid delivery without compromising on quality or functionality."
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    description: "24/7 technical support and maintenance to keep your digital assets running smoothly at all times."
  }
];

export const WhyUs = () => (
  <Section variant="gradient" size="xl">
    <SectionHeader
      badge="Why Choose AKDK Digital"
      title={
        <>
          Built for <span className="text-red-600">Excellence</span>
        </>
      }
      description="We don't just build websites and apps – we craft digital experiences that drive real business growth and lasting impact."
      className="mb-16"
    />

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {stats.map((stat, index) => (
        <BoxCard
          key={index}
          delay={index * 0.1}
          variant="bordered"
          className="text-center border-2 border-gray-300 hover:border-red-400 group bg-white"
        >
          <IconBox 
            icon={<stat.icon className="w-6 h-6" />}
            variant="red"
            className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
          />
          <div className="text-3xl font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {stat.value}
          </div>
          <div className="text-base font-bold text-gray-800 mb-2">
            {stat.label}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            {stat.description}
          </div>
        </BoxCard>
      ))}
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <BoxCard
          key={index}
          delay={0.4 + index * 0.1}
          variant="shadow"
          className="border-2 border-gray-200 hover:border-red-300 group bg-white"
        >
          <div className="flex items-start gap-6">
            <IconBox 
              icon={<feature.icon className="w-6 h-6" />}
              variant="gradient"
              className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          </div>
        </BoxCard>
      ))}
    </div>
  </Section>
);

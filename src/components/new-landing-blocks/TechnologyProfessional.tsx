"use client";
import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Globe, Shield, Zap } from "lucide-react";
import { Section } from "@/components/new-landing-comp/section";
import { SectionHeader } from "@/components/new-landing-comp/section-header";
import { BoxCard } from "@/components/new-landing-comp/box-card";
import { IconBox } from "@/components/new-landing-comp/icon-box";
import Image from "next/image";

const techCategories = [
  {
    icon: Code2,
    title: "Frontend Technologies",
    description: "Modern frameworks for exceptional user experiences",
    technologies: [
      { name: "React", logo: "/react.png" },
      { name: "Next.js", logo: "/next.svg" },
      { name: "TypeScript", logo: "/next.svg" },
      { name: "Tailwind CSS", logo: "/next.svg" }
    ]
  },
  {
    icon: Database,
    title: "Backend & Database",
    description: "Robust server solutions and data management",
    technologies: [
      { name: "Node.js", logo: "/next.svg" },
      { name: "PostgreSQL", logo: "/next.svg" },
      { name: "MongoDB", logo: "/next.svg" },
      { name: "Prisma", logo: "/next.svg" }
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications",
    technologies: [
      { name: "React Native", logo: "/react-native.png" },
      { name: "iOS", logo: "/ios.png" },
      { name: "Android", logo: "/andriod.png" },
      { name: "Flutter", logo: "/next.svg" }
    ]
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "Full-stack web development tools",
    technologies: [
      { name: "HTML5", logo: "/html5.png" },
      { name: "CSS3", logo: "/next.svg" },
      { name: "JavaScript", logo: "/next.svg" },
      { name: "PWA", logo: "/next.svg" }
    ]
  },
  {
    icon: Shield,
    title: "DevOps & Security",
    description: "Deployment and security solutions",
    technologies: [
      { name: "Vercel", logo: "/vercel.svg" },
      { name: "AWS", logo: "/next.svg" },
      { name: "Docker", logo: "/next.svg" },
      { name: "Git", logo: "/next.svg" }
    ]
  },
  {
    icon: Zap,
    title: "Performance Tools",
    description: "Optimization and monitoring solutions",
    technologies: [
      { name: "Lighthouse", logo: "/next.svg" },
      { name: "GTM", logo: "/next.svg" },
      { name: "Analytics", logo: "/next.svg" },
      { name: "SEO Tools", logo: "/next.svg" }
    ]
  }
];

const features = [
  "Latest Technology Stack",
  "Scalable Architecture",
  "Security Best Practices",
  "Performance Optimization",
  "Cross-Platform Compatibility",
  "Continuous Integration"
];

export const TechnologyProfessional = () => (
  <Section variant="gradient" size="xl">
    <SectionHeader
      badge="Technology Stack"
      title={
        <>
          Powered by <span className="text-red-600">Modern Tech</span>
        </>
      }
      description="We leverage cutting-edge technologies and industry best practices to build scalable, secure, and high-performance digital solutions."
      className="mb-16"
    />

    {/* Technology Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {techCategories.map((category, index) => (
        <BoxCard
          key={index}
          delay={index * 0.1}
          variant="bordered"
          className="border-2 border-gray-300 hover:border-red-400 group h-full"
        >
          <div className="flex items-center gap-4 mb-6">
            <IconBox 
              icon={<category.icon className="w-6 h-6" />}
              variant="red"
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                {category.title}
              </h3>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6 text-sm font-medium">
            {category.description}
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {category.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
                <span className="text-sm font-semibold text-gray-700">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </BoxCard>
      ))}
    </div>

    {/* Features Grid */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {features.map((feature, index) => (
        <BoxCard
          key={index}
          delay={0.8 + index * 0.1}
          variant="shadow"
          className="text-center border-2 border-gray-200 hover:border-red-300 group"
        >
          <div className="w-3 h-3 bg-red-500 mx-auto mb-4 group-hover:scale-125 transition-transform duration-300"></div>
          <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
            {feature}
          </h4>
        </BoxCard>
      ))}
    </motion.div>

    {/* Bottom CTA */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-16 text-center"
    >
      <BoxCard
        variant="elevated"
        className="bg-white border-2 border-gray-300 max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Need a Custom Technology Solution?
        </h3>
        <p className="text-gray-600 mb-6 font-medium">
          Our expert team can recommend the perfect technology stack for your specific project requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold border-2 border-red-600 hover:border-red-700 transition-all duration-300"
            onClick={() => (window.location.href = "/contact-us")}
          >
            Discuss Your Project
          </button>
          <button
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-red-400 hover:bg-red-50 hover:text-red-700 font-bold transition-all duration-300"
            onClick={() => (window.location.href = "/service")}
          >
            View All Services
          </button>
        </div>
      </BoxCard>
    </motion.div>
  </Section>
);

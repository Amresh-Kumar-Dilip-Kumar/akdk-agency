import React from "react";
import { FaReact, FaNodeJs, FaMobile, FaCode, FaShieldAlt, FaBolt } from "react-icons/fa";
import { Code2, Database, Smartphone, Globe, Shield, Zap } from "lucide-react";
import Image from "next/image";

const techCategories = [
  {
    icon: <Code2 className="w-8 h-8" />,
    bgIcon: <FaReact className="text-6xl text-blue-200/30" />,
    title: "Frontend Technologies",
    subtitle: "Modern User Interfaces",
    text: "Cutting-edge frontend frameworks and libraries that create exceptional user experiences with responsive design and optimal performance.",
    technologies: [
      { name: "React", logo: "/react.png" },
      { name: "Next.js", logo: "/next.svg" },
      { name: "TypeScript", logo: "/next.svg" },
      { name: "Tailwind CSS", logo: "/next.svg" }
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    icon: <Database className="w-8 h-8" />,
    bgIcon: <FaNodeJs className="text-6xl text-green-200/30" />,
    title: "Backend & Database",
    subtitle: "Robust Server Solutions",
    text: "Scalable backend architectures and efficient database management systems that ensure your applications run smoothly and securely.",
    technologies: [
      { name: "Node.js", logo: "/next.svg" },
      { name: "PostgreSQL", logo: "/next.svg" },
      { name: "MongoDB", logo: "/next.svg" },
      { name: "Prisma", logo: "/next.svg" }
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    bgIcon: <FaMobile className="text-6xl text-purple-200/30" />,
    title: "Mobile Development",
    subtitle: "Cross-Platform Excellence",
    text: "Native and cross-platform mobile development tools that deliver high-performance applications for iOS and Android platforms.",
    technologies: [
      { name: "React Native", logo: "/react-native.png" },
      { name: "iOS", logo: "/ios.png" },
      { name: "Android", logo: "/andriod.png" },
      { name: "Flutter", logo: "/next.svg" }
    ],
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    bgIcon: <FaCode className="text-6xl text-orange-200/30" />,
    title: "Web Technologies",
    subtitle: "Full-Stack Development",
    text: "Comprehensive web development technologies that power modern applications with semantic markup, styling, and interactive functionality.",
    technologies: [
      { name: "HTML5", logo: "/html5.png" },
      { name: "CSS3", logo: "/next.svg" },
      { name: "JavaScript", logo: "/next.svg" },
      { name: "PHP", logo: "/next.svg" }
    ],
    color: "from-orange-500 to-amber-500",
    bgColor: "from-orange-50 to-amber-50",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    bgIcon: <FaShieldAlt className="text-6xl text-red-200/30" />,
    title: "Security & DevOps",
    subtitle: "Enterprise Security",
    text: "Advanced security protocols and DevOps practices that ensure your applications are protected, monitored, and deployed efficiently.",
    technologies: [
      { name: "AWS", logo: "/next.svg" },
      { name: "Docker", logo: "/next.svg" },
      { name: "CI/CD", logo: "/next.svg" },
      { name: "Security", logo: "/next.svg" }
    ],
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-50",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    bgIcon: <FaBolt className="text-6xl text-yellow-200/30" />,
    title: "Performance & Analytics",
    subtitle: "Optimization Tools",
    text: "Performance monitoring and analytics tools that help optimize your applications for speed, efficiency, and user satisfaction.",
    technologies: [
      { name: "Analytics", logo: "/next.svg" },
      { name: "Monitoring", logo: "/next.svg" },
      { name: "Optimization", logo: "/next.svg" },
      { name: "Testing", logo: "/next.svg" }
    ],
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
  },
];

export default function TechnologyMission() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-100/20 rounded-full blur-2xl -z-10"></div>
      <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-green-100/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-4"></div>
            <Code2 className="w-8 h-8 text-blue-600 mx-2" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-blue-500 to-purple-500 ml-4"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 bg-clip-text text-transparent">
            Modern Technology Stack
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            We leverage cutting-edge technologies and industry best practices to build scalable, secure, and high-performance digital solutions that stand the test of time.
          </p>
        </div>

        {/* Technology Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Enhanced Effects */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-blue-200 group-hover:scale-105`}
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative p-8 lg:p-10 h-full flex flex-col">
                {/* Icon Section */}
                <div className="relative mb-8">
                  {/* Background Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    {category.bgIcon}
                  </div>

                  {/* Main Icon */}
                  <div
                    className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    {category.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${category.color} text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4`}
                  >
                    {category.subtitle}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg font-light mb-6">
                    {category.text}
                  </p>

                  {/* Technologies Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-2 p-2 bg-white/70 rounded-lg border border-gray-200 group-hover:border-blue-200 transition-colors duration-300">
                        <div className="w-6 h-6 relative">
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-700">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-6 border-t border-gray-200 group-hover:border-blue-200 transition-colors duration-300">
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${category.color} rounded-full group-hover:w-20 transition-all duration-500`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider">
              Cutting-Edge Technology
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
          </div>

          <p className="text-lg text-gray-600 font-medium">
            Leverage the power of modern technology to build exceptional digital experiences that drive business growth.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client"
import React from "react";
import { FaCode, FaMobile, FaShoppingCart, FaPaintBrush, FaSearch, FaHeadphones } from "react-icons/fa";
import { Globe, Smartphone, ShoppingCart, Palette, Search, Headphones, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    bgIcon: <FaCode className="text-6xl text-indigo-200/30" />,
    title: "Web Development",
    subtitle: "Custom Applications",
    text: "Build scalable web applications with React, Next.js, and modern frameworks. From landing pages to complex SaaS platforms.",
    features: ["React & Next.js", "Responsive Design", "API Integration", "Performance Focused"],
    color: "from-indigo-600 to-blue-600",
    bgColor: "from-indigo-50 to-blue-50",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    bgIcon: <FaMobile className="text-6xl text-violet-200/30" />,
    title: "Mobile Development",
    subtitle: "iOS & Android",
    text: "Native and cross-platform mobile apps using React Native and native technologies. Beautiful interfaces with smooth performance.",
    features: ["React Native", "Native iOS/Android", "Cross-Platform", "App Store Launch"],
    color: "from-violet-600 to-purple-600",
    bgColor: "from-violet-50 to-purple-50",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    bgIcon: <FaShoppingCart className="text-6xl text-teal-200/30" />,
    title: "E-commerce",
    subtitle: "Online Stores",
    text: "Full-featured e-commerce solutions with payment processing, inventory management, and customer analytics.",
    features: ["Payment Integration", "Order Management", "Admin Dashboard", "Customer Portal"],
    color: "from-teal-600 to-cyan-600",
    bgColor: "from-teal-50 to-cyan-50",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    bgIcon: <FaPaintBrush className="text-6xl text-rose-200/30" />,
    title: "UI/UX Design",
    subtitle: "User Experience",
    text: "Design intuitive, beautiful interfaces that users love. From wireframes to high-fidelity prototypes and design systems.",
    features: ["User Research", "Wireframing", "Visual Design", "Prototyping"],
    color: "from-rose-600 to-pink-600",
    bgColor: "from-rose-50 to-pink-50",
  },
  {
    icon: <Search className="w-8 h-8" />,
    bgIcon: <FaSearch className="text-6xl text-amber-200/30" />,
    title: "SEO & Marketing",
    subtitle: "Digital Growth",
    text: "Improve your online visibility and drive organic traffic with technical SEO, content strategy, and digital marketing.",
    features: ["Technical SEO", "Content Strategy", "Analytics Setup", "Performance Tracking"],
    color: "from-amber-600 to-orange-600",
    bgColor: "from-amber-50 to-orange-50",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    bgIcon: <FaHeadphones className="text-6xl text-emerald-200/30" />,
    title: "Maintenance",
    subtitle: "Ongoing Support",
    text: "Keep your application running smoothly with regular updates, bug fixes, performance optimization, and security patches.",
    features: ["Regular Updates", "Bug Fixes", "Security Patches", "Performance Monitoring"],
    color: "from-emerald-600 to-green-600",
    bgColor: "from-emerald-50 to-green-50",
  },
];

export default function ServicesMission() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-indigo-100/40 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-violet-100/30 rounded-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-slate-300 to-slate-500 mr-4"></div>
            <Zap className="w-8 h-8 text-slate-700 mx-2" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-slate-300 to-slate-500 ml-4"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            What We Build
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            From initial concept to final deployment, we deliver full-stack solutions that solve real problems and drive business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Enhanced Effects */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-slate-200 group-hover:border-slate-300 group-hover:scale-[1.02]`}
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-slate-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative p-8 lg:p-10 h-full flex flex-col">
                {/* Icon Section */}
                <div className="relative mb-8">
                  {/* Background Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    {item.bgIcon}
                  </div>

                  {/* Main Icon */}
                  <div
                    className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4`}
                  >
                    {item.subtitle}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-lg font-light mb-6">
                    {item.text}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full flex-shrink-0`}></div>
                        <span className="text-sm text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent with CTA */}
                <div className="mt-8 pt-6 border-t border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full group-hover:w-20 transition-all duration-500`}
                    ></div>
                    <button 
                      className="flex items-center gap-2 text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors duration-300"
                      onClick={() => window.location.href = "/service"}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-2 text-slate-700 mt-8">
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider">
              Full-Stack Development
            </span>
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

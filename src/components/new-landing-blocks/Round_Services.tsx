"use client"
import React from "react";
import { FaCode, FaMobile, FaShoppingCart, FaPaintBrush, FaSearch, FaHeadphones } from "react-icons/fa";
import { Globe, Smartphone, ShoppingCart, Palette, Search, Headphones, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    bgIcon: <FaCode className="text-6xl text-blue-200/30" />,
    title: "Website Development",
    subtitle: "Modern Web Solutions",
    text: "Custom web applications built with cutting-edge technologies. From simple business websites to complex enterprise platforms that scale with your business.",
    features: ["React & Next.js", "Responsive Design", "Performance Optimized", "SEO Ready"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    bgIcon: <FaMobile className="text-6xl text-purple-200/30" />,
    title: "Mobile Development",
    subtitle: "Cross-Platform Apps",
    text: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices with optimal performance.",
    features: ["iOS & Android", "React Native", "Native Performance", "App Store Ready"],
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    bgIcon: <FaShoppingCart className="text-6xl text-green-200/30" />,
    title: "E-commerce Solutions",
    subtitle: "Online Store Systems",
    text: "Complete e-commerce platforms with secure payments, inventory management, and seamless shopping experiences that drive sales and customer satisfaction.",
    features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics Dashboard"],
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    bgIcon: <FaPaintBrush className="text-6xl text-pink-200/30" />,
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    text: "Beautiful, intuitive designs that engage users and drive conversions. From wireframes to pixel-perfect interfaces that enhance user experience.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50",
  },
  {
    icon: <Search className="w-8 h-8" />,
    bgIcon: <FaSearch className="text-6xl text-orange-200/30" />,
    title: "Digital Marketing",
    subtitle: "Growth Strategies",
    text: "Comprehensive digital marketing strategies to boost your online presence, drive qualified traffic, and convert visitors into loyal customers.",
    features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics & Reporting"],
    color: "from-orange-500 to-amber-500",
    bgColor: "from-orange-50 to-amber-50",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    bgIcon: <FaHeadphones className="text-6xl text-teal-200/30" />,
    title: "Support & Maintenance",
    subtitle: "Ongoing Excellence",
    text: "24/7 technical support and ongoing maintenance to ensure your digital assets perform at peak efficiency with maximum uptime and security.",
    features: ["24/7 Support", "Regular Updates", "Security Monitoring", "Performance Optimization"],
    color: "from-teal-500 to-cyan-500",
    bgColor: "from-teal-50 to-cyan-50",
  },
];

export default function ServicesMission() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-100/20 rounded-full blur-2xl -z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-green-100/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-4"></div>
            <Zap className="w-8 h-8 text-blue-600 mx-2" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-blue-500 to-purple-500 ml-4"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 bg-clip-text text-transparent">
            Complete Digital Solutions
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            From concept to launch and beyond, we provide end-to-end digital services that transform your business ideas into powerful, market-ready solutions that drive success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Enhanced Effects */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-blue-200 group-hover:scale-105`}
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

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

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg font-light mb-6">
                    {item.text}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent with CTA */}
                <div className="mt-8 pt-6 border-t border-gray-200 group-hover:border-blue-200 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full group-hover:w-20 transition-all duration-500`}
                    ></div>
                    <button 
                      className="flex items-center gap-2 text-sm font-bold text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
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
          <div className="group relative max-w-4xl mx-auto">
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>
            
            {/* Content */}
            <div className="relative p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project requirements and create a custom solution that drives real results for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl border-2 border-red-600 hover:border-red-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                  onClick={() => window.location.href = "/contact-us"}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-2xl transition-all duration-300 group-hover:scale-105"
                  onClick={() => window.location.href = "/project"}
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 text-blue-600 mt-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider">
              Complete Digital Solutions
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

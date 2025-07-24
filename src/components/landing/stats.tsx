"use client";
import { motion } from "framer-motion";
import { Trophy, Users, Rocket, Clock } from "lucide-react";

export const WhyUs = () => (
  <section className="relative bg-gradient-to-br from-gray-50 via-white to-red-50 py-24">
    {/* Background decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
    </div>

    <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium mb-6"
        >
          <Trophy className="w-4 h-4" />
          Why Choose AKDK Digital
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Built for <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Excellence</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We don't just build websites and apps – we craft digital experiences that drive real business growth and lasting impact.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          { icon: Clock, value: "3+", label: "Years of Excellence", description: "Crafting winning solutions" },
          { icon: Users, value: "20+", label: "Happy Clients", description: "Satisfied with our services" },
          { icon: Rocket, value: "50+", label: "Projects Delivered", description: "Successful implementations" },
          { icon: Trophy, value: "4+", label: "Free Tools", description: "To help businesses grow" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group"
          >
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-red-600 group-hover:text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            title: "Innovation First",
            description: "We stay ahead of the curve with cutting-edge technologies and modern development practices."
          },
          {
            title: "Quality Assured",
            description: "Every project undergoes rigorous testing and quality checks to ensure flawless performance."
          },
          {
            title: "24/7 Support",
            description: "Our dedicated support team is always ready to help you succeed with ongoing maintenance and updates."
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="text-center p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

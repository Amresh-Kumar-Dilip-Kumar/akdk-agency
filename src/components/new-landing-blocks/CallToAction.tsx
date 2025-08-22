"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-300"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4" />
            Ready to Transform Your Business?
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 text-white"
          >
            Let's Build Something
            <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Your vision + Our expertise = Digital success. Let's discuss how we can help you achieve your goals with cutting-edge web solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1 transition-all duration-300 group"
              onClick={() => (window.location.href = "/contact-us")}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-lg font-semibold rounded-xl backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => (window.location.href = "/project")}
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                icon: "🚀",
                title: "Fast Delivery",
                description: "Get your project completed in record time without compromising quality"
              },
              {
                icon: "💡",
                title: "Innovative Solutions",
                description: "Cutting-edge technology stack and modern development practices"
              },
              {
                icon: "🎯",
                title: "Results Driven",
                description: "Focus on measurable outcomes that drive real business growth"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

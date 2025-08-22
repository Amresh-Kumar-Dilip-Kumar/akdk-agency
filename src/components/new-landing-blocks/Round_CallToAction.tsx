"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaComments, FaCheckCircle, FaRocket, FaUsers } from "react-icons/fa";
import { Phone, Mail, MessageSquare, CheckCircle2, ArrowRight, Target, Zap } from "lucide-react";

const contactMethods = [
  {
    icon: <Phone className="w-8 h-8" />,
    bgIcon: <FaPhone className="text-6xl text-blue-200/30" />,
    title: "Call Us",
    subtitle: "Direct Communication",
    text: "Speak directly with our experts to discuss your project requirements and get immediate answers to your questions.",
    action: "Schedule a Call",
    href: "tel:+1234567890",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    icon: <Mail className="w-8 h-8" />,
    bgIcon: <FaEnvelope className="text-6xl text-purple-200/30" />,
    title: "Email Us",
    subtitle: "Detailed Information",
    text: "Send us your project details and requirements. We'll respond with a comprehensive proposal and timeline.",
    action: "Send Email",
    href: "mailto:contact@akdkdigital.com",
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    bgIcon: <FaComments className="text-6xl text-green-200/30" />,
    title: "Live Chat",
    subtitle: "Instant Support",
    text: "Get quick answers to your questions and instant support for any concerns through our live chat system.",
    action: "Start Chat",
    href: "/contact-us",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
  }
];

const benefits = [
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    bgIcon: <FaCheckCircle className="text-6xl text-red-200/30" />,
    title: "Free Consultation",
    subtitle: "No Cost Analysis",
    text: "Comprehensive project analysis and consultation at absolutely no cost to help you make informed decisions.",
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-50",
  },
  {
    icon: <Target className="w-8 h-8" />,
    bgIcon: <FaRocket className="text-6xl text-orange-200/30" />,
    title: "Transparent Pricing",
    subtitle: "No Hidden Costs",
    text: "Clear, upfront pricing with detailed breakdowns and no surprise charges throughout the project lifecycle.",
    color: "from-orange-500 to-amber-500",
    bgColor: "from-orange-50 to-amber-50",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    bgIcon: <FaUsers className="text-6xl text-teal-200/30" />,
    title: "Dedicated Support",
    subtitle: "Personal Manager",
    text: "Dedicated project manager assigned to your project with regular updates and direct communication channel.",
    color: "from-teal-500 to-cyan-500",
    bgColor: "from-teal-50 to-cyan-50",
  }
];

export default function CallToActionMission() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 py-24 overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))] -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-400/10 rounded-full blur-2xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 mr-4"></div>
            <CheckCircle2 className="w-8 h-8 text-red-400 mx-2" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-red-400 to-pink-400 ml-4"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent">
            Let's Build Your Digital Success
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your business with our expert digital solutions. From concept to launch, we're here to make your vision a reality and drive measurable results.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Enhanced Effects */}
              <div
                className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-red-400/50 group-hover:scale-105"
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

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

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg font-light mb-6">
                    {item.text}
                  </p>

                  <button
                    className="w-full px-6 py-3 border-2 border-white/30 text-white hover:bg-red-500 hover:border-red-500 font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                    onClick={() => window.open(item.href, '_blank')}
                  >
                    {item.action}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-6 border-t border-white/20 group-hover:border-red-400/50 transition-colors duration-300">
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full group-hover:w-20 transition-all duration-500`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Enhanced Effects */}
              <div
                className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-blue-400/50 group-hover:scale-105"
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative p-8 lg:p-10 h-full flex flex-col text-center">
                {/* Icon Section */}
                <div className="relative mb-8">
                  {/* Background Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    {item.bgIcon}
                  </div>

                  {/* Main Icon */}
                  <div
                    className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto`}
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

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg font-light">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-6 border-t border-white/20 group-hover:border-blue-400/50 transition-colors duration-300">
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full group-hover:w-20 transition-all duration-500 mx-auto`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="text-center">
          <div className="group relative max-w-4xl mx-auto">
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-pink-600 to-red-600 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>
            
            {/* Content */}
            <div className="relative p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join the businesses that trust AKDK Digital with their digital transformation journey. Let's create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-4 bg-white text-red-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                  onClick={() => window.location.href = "/contact-us"}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold rounded-2xl transition-all duration-300 group-hover:scale-105"
                  onClick={() => window.location.href = "/project"}
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 text-red-400 mt-8">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider">
              Your Success Is Our Mission
            </span>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

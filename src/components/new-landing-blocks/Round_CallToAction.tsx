"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaComments, FaCheckCircle, FaRocket, FaUsers } from "react-icons/fa";
import { Phone, Mail, MessageSquare, CheckCircle2, ArrowRight, Target, Zap } from "lucide-react";

const contactMethods = [
  {
    icon: <Phone className="w-8 h-8" />,
    bgIcon: <FaPhone className="text-6xl text-indigo-200/30" />,
    title: "Call Us",
    subtitle: "Direct Contact",
    text: "Speak with our team to discuss your project requirements and get answers to your questions.",
    action: "Schedule a Call",
    href: "tel:+1234567890",
    color: "from-indigo-600 to-blue-600",
    bgColor: "from-indigo-50 to-blue-50",
  },
  {
    icon: <Mail className="w-8 h-8" />,
    bgIcon: <FaEnvelope className="text-6xl text-violet-200/30" />,
    title: "Email Us",
    subtitle: "Written Communication",
    text: "Send us your project details and we'll respond with a proposal and timeline within 24 hours.",
    action: "Send Email",
    href: "mailto:contact@akdkdigital.com",
    color: "from-violet-600 to-purple-600",
    bgColor: "from-violet-50 to-purple-50",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    bgIcon: <FaComments className="text-6xl text-teal-200/30" />,
    title: "Contact Form",
    subtitle: "Quick Inquiry",
    text: "Fill out our contact form and we'll get back to you shortly to discuss your project needs.",
    action: "Get in Touch",
    href: "/contact-us",
    color: "from-teal-600 to-cyan-600",
    bgColor: "from-teal-50 to-cyan-50",
  }
];

const benefits = [
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    bgIcon: <FaCheckCircle className="text-6xl text-emerald-200/30" />,
    title: "Free Consultation",
    subtitle: "No Obligation",
    text: "Initial consultation and project assessment at no cost. We'll help you understand the scope and requirements.",
    color: "from-emerald-600 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    icon: <Target className="w-8 h-8" />,
    bgIcon: <FaRocket className="text-6xl text-amber-200/30" />,
    title: "Clear Pricing",
    subtitle: "Transparent Costs",
    text: "Upfront pricing with detailed project breakdown. No hidden fees or surprise charges along the way.",
    color: "from-amber-600 to-orange-600",
    bgColor: "from-amber-50 to-orange-50",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    bgIcon: <FaUsers className="text-6xl text-slate-200/30" />,
    title: "Project Manager",
    subtitle: "Direct Communication",
    text: "Dedicated project manager for direct communication and regular updates throughout development.",
    color: "from-slate-600 to-gray-600",
    bgColor: "from-slate-50 to-gray-50",
  }
];

export default function CallToActionMission() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/15 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-slate-600 to-slate-400 mr-4"></div>
            <CheckCircle2 className="w-8 h-8 text-slate-400 mx-2" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-slate-600 to-slate-400 ml-4"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Let's discuss your requirements and build a solution that helps your business grow. Get in touch with our team today.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Enhanced Effects */}
              <div
                className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-white/20 group-hover:border-white/30 group-hover:scale-[1.02]"
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

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

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed text-lg font-light mb-6">
                    {item.text}
                  </p>

                  <button
                    className="w-full px-6 py-3 border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                    onClick={() => window.open(item.href, '_blank')}
                  >
                    {item.action}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-6 border-t border-white/20 group-hover:border-white/30 transition-colors duration-300">
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
                className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-white/20 group-hover:border-white/30 group-hover:scale-[1.02]"
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

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

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed text-lg font-light">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-6 border-t border-white/20 group-hover:border-white/30 transition-colors duration-300">
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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-white/10"></div>
            
            {/* Content */}
            <div className="relative p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Build Something Great Together
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get in touch with us today to discuss your project and receive a detailed proposal with timelines and pricing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                  onClick={() => window.location.href = "/contact-us"}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-bold rounded-2xl transition-all duration-300 group-hover:scale-105"
                  onClick={() => window.location.href = "/project"}
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 text-slate-400 mt-8">
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider">
              Your Vision, Our Expertise
            </span>
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

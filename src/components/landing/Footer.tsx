"use client";

import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 blur-sm">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-600 opacity-20 rotate-45 "></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-600 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-600 opacity-20 rotate-12"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-green-600 opacity-20 rotate-45"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 border-2 border-red-700 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-black text-white tracking-tight leading-none">
                  AKDK
                </h1>
                <span className="text-sm font-bold text-red-400 uppercase tracking-wider">
                  Digital
                </span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 font-medium">
              Crafting extraordinary digital experiences that drive real business results. We transform ideas into powerful web solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 p-3 border-2 border-gray-700 hover:border-red-500 transition-colors bg-gray-800/50">
                <Mail className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium">contact@akdkdigital.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 p-3 border-2 border-gray-700 hover:border-blue-500 transition-colors bg-gray-800/50">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 p-3 border-2 border-gray-700 hover:border-green-500 transition-colors bg-gray-800/50">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">Global Digital Agency</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-black text-white mb-6 relative p-3 border-2 border-red-600 bg-red-600/20">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about-us", color: "red" },
                { name: "Our Services", path: "/service", color: "blue" },
                { name: "Portfolio", path: "/project", color: "purple" },
                { name: "Career", path: "/career", color: "green" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.path}
                    className={`text-gray-300 hover:text-${link.color}-400 transition-colors duration-300 flex items-center gap-2 group p-3 border-2 border-gray-700 hover:border-${link.color}-500 hover:bg-${link.color}-500/10 font-bold`}
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-black text-white mb-6 relative p-3 border-2 border-blue-600 bg-blue-600/20">
              Services
            </h3>
            <div className="space-y-3">
              {[
                { name: "Web Development", color: "red" },
                { name: "Mobile Apps", color: "blue" }, 
                { name: "E-commerce Solutions", color: "purple" },
                { name: "UI/UX Design", color: "green" },
                { name: "Digital Marketing", color: "yellow" },
                { name: "SEO Optimization", color: "pink" }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`text-gray-300 hover:text-${service.color}-400 transition-colors duration-300 flex items-center gap-2 group cursor-pointer p-3 border-2 border-gray-700 hover:border-${service.color}-500 hover:bg-${service.color}-500/10 font-bold`}
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {service.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-black text-white mb-6 relative p-3 border-2 border-purple-600 bg-purple-600/20">
              Stay Connected
            </h3>
            <p className="text-gray-300 mb-6 font-medium">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="p-4 border-2 border-gray-700 bg-gray-800/50">
              <Newsletter />
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-4 font-bold">Follow us on social media</p>
              <div className="flex space-x-3">
                {[
                  { icon: FaLinkedin, href: "https://linkedin.com", color: "blue" },
                  { icon: FaInstagram, href: "https://www.instagram.com/akdk_agency?igsh=d3d0dGM5cDdlNXo3", color: "pink" },
                  { icon: FaTwitter, href: "https://twitter.com", color: "cyan" },
                  { icon: FaGithub, href: "https://github.com", color: "gray" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 border-2 border-gray-700 hover:border-${social.color}-500 flex items-center justify-center text-gray-400 hover:text-${social.color}-400 transition-all duration-300 hover:bg-${social.color}-500/10 font-bold`}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-gray-400 text-sm">
            © 2025 AKDK Digital. All rights reserved. Built with ❤️ for digital innovation.
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link href="/tmcd" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/contact-us" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
              Support
            </Link>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ❤️
            </motion.div>
            <span>in India</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

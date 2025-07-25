"use client";

import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="relative bg-white text-black overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-black/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 border-2 border-red-700 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-black tracking-tight leading-none">
                  AKDK
                </h1>
                <span className="text-sm font-bold text-red-500 uppercase tracking-wider">
                  Digital
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed font-medium">
              Crafting extraordinary digital experiences that drive real
              business results. We transform ideas into powerful web solutions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700 hover:text-red-500 transition-colors">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium">
                  contact@akdkdigital.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:text-blue-500 transition-colors">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:text-green-500 transition-colors">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">
                  Global Digital Agency
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-black text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about-us" },
                { name: "Our Services", path: "/service" },
                { name: "Portfolio", path: "/project" },
                { name: "Career", path: "/career" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group py-2 font-medium"
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
            className="space-y-6"
          >
            <h3 className="text-xl font-black  text-gray-900"> Our Services</h3>
            <div className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "E-commerce Solutions",
                "UI/UX Design",
                "Digital Marketing",
                "SEO Optimization",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group cursor-pointer py-2 font-medium"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <Newsletter />

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: FaLinkedin,
                    href: "https://linkedin.com",
                    color: "blue",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/akdk_agency?igsh=d3d0dGM5cDdlNXo3",
                    color: "pink",
                  },
                  {
                    icon: FaTwitter,
                    href: "https://twitter.com",
                    color: "blue",
                  },
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
                      className="w-10 h-10 border-2 border-gray-200 hover:border-red-500 flex items-center justify-center text-gray-500 hover:text-red-500 transition-all duration-300 hover:bg-red-50"
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
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
        >
          <div className="text-gray-500 text-sm font-medium">
            © 2025 AKDK Digital. All rights reserved. Built with ❤️ for digital
            innovation.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="/tmcd"
              className="text-gray-500 hover:text-red-500 transition-colors duration-300 font-medium"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-red-500 transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-500 hover:text-red-500 transition-colors duration-300 font-medium"
            >
              Support
            </Link>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
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

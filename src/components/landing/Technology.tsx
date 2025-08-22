"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Code, Smartphone, Database, Cloud } from "lucide-react";
import Image from "next/image";

// Import your local images
const technologies = [
  { name: "HTML5", image: "/html5.png", category: "Frontend" },
  { name: "React", image: "/react.png", category: "Frontend" },
  { name: "React Native", image: "/react-native.png", category: "Mobile" },
  { name: "Android", image: "/andriod.png", category: "Mobile" },
  { name: "iOS", image: "/ios.png", category: "Mobile" },
  { name: "HTML5", image: "/html5.png", category: "Frontend" },
];

export default function Technologies() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
          >
            <Code className="w-4 h-4" />
            Technology Stack
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cutting-Edge</span> Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage the most advanced and reliable technologies to build scalable, performant, and future-ready solutions for your business.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Code, title: "Frontend", description: "Modern UI/UX frameworks", color: "blue" },
            { icon: Smartphone, title: "Mobile", description: "Native & Cross-platform", color: "green" },
            { icon: Database, title: "Backend", description: "Scalable server solutions", color: "purple" },
            { icon: Cloud, title: "Cloud", description: "Reliable hosting & deployment", color: "red" }
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <category.icon className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Technologies We Master
            </h3>
            <p className="text-gray-600">
              A comprehensive toolkit for building exceptional digital experiences
            </p>
          </div>

          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="technology-swiper"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {tech.category}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Want to know more about our technical capabilities?
          </p>
          <button
            onClick={() => (window.location.href = "/service")}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Our Services
          </button>
        </motion.div>
      </div>

      <style jsx global>{`
        .technology-swiper .swiper-pagination {
          bottom: -20px !important;
        }
        .technology-swiper .swiper-pagination-bullet {
          background: #dc2626 !important;
          opacity: 0.3;
        }
        .technology-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}

"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { PageHeader } from "@/components/landing/page-header2";
import {
  ExternalLink,
  Code,
  Zap,
  Award,
  ArrowRight,
  CheckCircle2,
  Target,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Our-Shop.site",
    description:
      "Our-Shop.site is a small-scale e-commerce platform that empowers individuals to launch and manage their online businesses with ease. With user-friendly tools and secure payment options, entrepreneurs can start selling in no time.",
    features: "User-friendly, Secure Payments",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    image: ["/shop-1.png", "/shop-2.png", "/shop-3.png"],
    link: "https://our-shop.site/",
    quote: "\u201cA seamless experience from start to finish!\u201d",
  },
  {
    title: "Green Corp Agriculture",
    description:
      "Green Corp Agriculture is dedicated to producing high-quality rice through sustainable and innovative farming practices. We focus on delivering premium grains while promoting eco-friendly agriculture to support healthier communities and a greener future.",
    features: "Sustainable Farming, Premium Quality",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: ["/green-1.png", "/green-2.png", "/green-3.png"],
    link: "https://greenagricorp.netlify.app/",
    quote: "\u201cProfessional, responsive, and results-driven.\u201d",
  },
  {
    title: "Warehouse Gate Logger",
    description:
      "Warehouse Gate Logger is a smart system designed to streamline entry and exit tracking at warehouses. It enables secure logging of vehicles, goods, and personnel movements, ensuring better accountability, efficiency, and safety in warehouse operations.",
    features: "Secure Logging, Real-time Tracking, Easy Management",
    techStack: ["Next.js", "Tailwind CSS", "Prisma"],
    image: ["/warehouse-1.png", "/warehouse-2.png", "/warehouse-3.png"],
    link: "https://server.ermonline.in/",
    quote: "“Efficient, reliable, and built for modern warehouse operations.”",
  }
  
];

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="text-gray-900 ">
      <PageHeader
        heading={<>Explore Our Portfolio</>}
        description={
          <>
            Discover our innovative projects that showcase our expertise in
            creating dynamic web applications tailored to client needs. Each
            project represents our commitment to{" "}
            <span className="font-bold text-white bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              excellence and innovation
            </span>
            .
          </>
        }
      />

      {/* Portfolio Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mr-4"></div>
              <Code className="w-8 h-8 text-red-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-red-500 to-pink-500 ml-4"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 bg-clip-text text-transparent">
              Showcasing Our Projects
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Explore our diverse range of web applications that exemplify our
              commitment to quality, innovation, and client success.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} data-aos="fade-up" className="group relative">
                {/* Project Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-red-200"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div
                  className={`relative p-8 lg:p-12 flex flex-col ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-12`}
                >
                  {/* Content Section */}
                  <div className="lg:w-1/2 space-y-6">
                    {/* Project Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-sm font-bold uppercase tracking-wide">
                      <Award className="w-4 h-4 mr-2" />
                      Featured Project
                    </div>

                    {/* Project Title */}
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-red-600" />
                      <span className="font-medium">Key Features:</span>
                      <span className="text-gray-600">{project.features}</span>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Code className="w-5 h-5 text-red-600" />
                        <span className="font-medium">Tech Stack:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm font-bold rounded-full border border-gray-300 hover:from-red-100 hover:to-pink-100 hover:text-red-700 hover:border-red-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    {project.quote && (
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-4 rounded-r-xl">
                        <p className="italic text-gray-700 font-medium">
                          {project.quote}
                        </p>
                      </div>
                    )}

                    {/* CTA Button */}
                      <div className="flex gap-4">  
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
                      >
                        View Live Project
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>

                  {/*  */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/project/greenagri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
                      >
                          Detailed Description
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div> 

                       </div>
                  </div>

                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="relative group/carousel">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover/carousel:blur-2xl transition-all duration-500"></div>
                      <Carousel className="relative shadow-2xl border-2 border-white rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <CarouselContent>
                          {project.image.map((url, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <div className="relative">
                                <Image
                                  src={url}
                                  alt={`${project.title} - Screenshot ${
                                    imgIndex + 1
                                  }`}
                                  className="w-full h-[300px] lg:h-[400px] object-cover object-top"
                                  width={600}
                                  height={400}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-red-300" />
                        <CarouselNext className="right-4 bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-red-300" />
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-8">
              <Target className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Create Your{" "}
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Next Project?
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              Let's collaborate to bring your vision to life with innovative
              digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                View Our Services
                <Zap className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Project;

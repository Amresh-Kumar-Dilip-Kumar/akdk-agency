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
];

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="text-gray-900">
      <PageHeader
        heading={<>Explore Our Portfolio</>}
        description={
          <>
            Discover our innovative projects that showcase our expertise in
            creating dynamic web applications tailored to client needs.
          </>
        }
      />

      <div className="max-w-[1440px] mx-auto px-6 py-40 text-center sm:text-left">
        <div className="border-b mb-12">
          <h3 className="text-4xl md:text-5xl font-semibold">
            Showcasing Our Projects
          </h3>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-4 mb-8">
            Explore our diverse range of web applications that exemplify our
            commitment to quality and innovation.
          </p>
        </div>

        <div>
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center pb-16 gap-16`}
            >
              <div className="text-center md:text-left px-10 max-w-2xl md:w-1/2">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  {project.title}
                </h4>
                <p className="text-gray-600 mt-3 text-sm sm:text-base">
                  {project.description}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  <strong>Features:</strong> {project.features}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-black text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.quote && (
                  <p className="italic text-gray-500 text-sm mt-3">
                    {project.quote}
                  </p>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-5 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded transition duration-300 text-sm sm:text-base"
                >
                  View Project →
                </a>
              </div>

              <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                <Carousel className="shadow-lg border rounded-lg w-full max-w-sm sm:max-w-md md:max-w-full">
                  <CarouselContent>
                    {project.image.map((url, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <Image
                          src={url}
                          alt={project.title}
                          className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-full transition-transform duration-300 transform hover:scale-105 object-cover object-left  h-full "
                          width={500}
                          height={300}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

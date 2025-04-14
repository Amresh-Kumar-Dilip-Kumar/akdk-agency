"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";

// Import your local images
const images = [
  "/html5.png",
  "/andriod.png",
  "/react.png",
  "/react-native.png",
  "/ios.png",
  "/html5.png",
  "/andriod.png",
  "/react.png",
  "/ios.png",
];

export default function Technologies() {
  return (
    <section className="relative bg-white z-0 py-24">
      <div className="w-full max-w-7xl mx-auto px-0 lg:px-12 z-0">
        <div className="">
          {/* Heading and Description */}
          <div className="flex flex-col gap-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Our{" "}
              <span className="text-red-600">Cutting-Edge Technologies</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At <strong>AKDK Digital</strong>, we embrace the latest
              technologies to craft exceptional web solutions. Our expertise
              spans modern frameworks, robust databases, and powerful cloud
              platforms to bring your vision to life.
            </p>
          </div>
          <div className="p-8"></div>

          {/* Swiper Carousel */}
          <div
          // className="flex flex-col sm:flex-row py-12 items-center gap-6 md:gap-12 text-center sm:flex-1
          // bg-gradient-to-r from-white via-red-100 to-white md:shadow-lg px-5"
          >
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              // centeredSlides={false}
              autoplay={{
                delay: 1500, // 1.5 seconds delay between slides
                disableOnInteraction: false, // Allows user interaction without stopping autoplay
              }}
              modules={[Pagination, Autoplay]}
              className="w-full max-w-5xl py-8"
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center  border shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-300"
                    style={{
                      filter: "sepia(1) hue-rotate(-50deg) saturate(2)",
                    }} // Apply reddish filter
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

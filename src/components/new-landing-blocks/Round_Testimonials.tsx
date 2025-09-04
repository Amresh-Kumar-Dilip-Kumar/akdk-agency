import React from "react";
import { FaQuoteLeft, FaStar, FaUser, FaBriefcase } from "react-icons/fa";
import { Star, Quote, Zap } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    icon: <Quote className="w-8 h-8" />,
    bgIcon: <FaQuoteLeft className="text-6xl text-blue-200/30" />,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Solutions",
    image: "/profile-1.webp",
    rating: 5,
    testimonial: "AKDK Digital transformed our online presence completely. Their attention to detail and technical expertise exceeded our expectations. Our website traffic increased by 300% within 3 months.",
    project: "E-commerce Platform",
    subtitle: "Outstanding Results",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    icon: <Quote className="w-8 h-8" />,
    bgIcon: <FaUser className="text-6xl text-purple-200/30" />,
    name: "Michael Chen",
    role: "Founder",
    company: "Digital Innovations",
    image: "/profile-2.webp",
    rating: 5,
    testimonial: "Working with AKDK Digital was a game-changer for our business. They delivered a mobile app that our customers absolutely love. The team is professional, responsive, and truly understands modern technology.",
    project: "Mobile Application",
    subtitle: "Game-Changing Solution",
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50",
  },
  {
    icon: <Quote className="w-8 h-8" />,
    bgIcon: <FaBriefcase className="text-6xl text-green-200/30" />,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Growth Labs",
    image: "/profile-1.webp",
    rating: 5,
    testimonial: "The web application AKDK Digital built for us streamlined our entire workflow. Their post-launch support has been exceptional. I highly recommend them for any digital project.",
    project: "Web Application",
    subtitle: "Exceptional Support",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
  }
];

const stats = [
  {
    icon: <Star className="w-8 h-8" />,
    bgIcon: <FaStar className="text-6xl text-yellow-200/30" />,
    value: "100%",
    label: "Client Satisfaction",
    subtitle: "Perfect Rating",
    text: "Every client we've worked with has been completely satisfied with our services and continues to recommend us to others.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    bgIcon: <FaQuoteLeft className="text-6xl text-blue-200/30" />,
    value: "95%",
    label: "On-Time Delivery",
    subtitle: "Reliable Timeline",
    text: "We consistently deliver projects on schedule, ensuring your business plans stay on track and goals are met efficiently.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    icon: <Quote className="w-8 h-8" />,
    bgIcon: <FaUser className="text-6xl text-red-200/30" />,
    value: "24/7",
    label: "Support Available",
    subtitle: "Always Here",
    text: "Round-the-clock technical support ensures your digital assets are always running smoothly with immediate assistance when needed.",
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-50",
  }
];

export default function TestimonialsMission() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-100/20 rounded-full blur-2xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-100/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-4"></div>
            <Quote className="w-8 h-8 text-blue-600 mx-2" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-blue-500 to-purple-500 ml-4"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with AKDK Digital and the transformative results we've delivered.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Enhanced Effects */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-blue-200 group-hover:scale-105`}
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

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

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed text-lg font-light mb-6 italic">
                    "{item.testimonial}"
                  </p>

                  {/* Project Type */}
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-10 text-gray-700 text-sm font-semibold mb-6 rounded-full border border-gray-300`}>
                    {item.project}
                  </div>
                </div>

                {/* Client Info */}
                {/* <div className="flex items-center gap-4 pt-6 border-t border-gray-200 group-hover:border-blue-200 transition-colors duration-300">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Enhanced Effects */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-red-200 group-hover:scale-105`}
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-red-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

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

                  <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2 group-hover:text-red-700 transition-colors duration-300">
                    {item.value}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    {item.label}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg font-light">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-6 border-t border-gray-200 group-hover:border-red-200 transition-colors duration-300">
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full group-hover:w-20 transition-all duration-500 mx-auto`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider">
              Join Our Satisfied Clients
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
          </div>

          <p className="text-lg text-gray-600 font-medium">
            Experience the same level of excellence and satisfaction that our clients have come to expect from AKDK Digital.
          </p>
        </div>
      </div>
    </section>
  );
}

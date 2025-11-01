import React from "react";
import { FaQuoteLeft, FaStar, FaUser, FaBriefcase } from "react-icons/fa";
import { Star, Quote, Zap } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    icon: <Quote className="w-8 h-8" />,
    bgIcon: <FaQuoteLeft className="text-6xl text-indigo-200/30" />,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Solutions",
    image: "/profile-1.webp",
    rating: 5,
    testimonial: "The team delivered our e-commerce platform on time and within budget. Sales have increased 40% since launch, and customer feedback has been overwhelmingly positive.",
    project: "E-commerce Platform",
    subtitle: "Measurable Results",
    color: "from-indigo-600 to-blue-600",
    bgColor: "from-indigo-50 to-blue-50",
  },
  {
    icon: <Quote className="w-8 h-8" />,
    bgIcon: <FaUser className="text-6xl text-violet-200/30" />,
    name: "Michael Chen",
    role: "Founder",
    company: "Digital Innovations",
    image: "/profile-2.webp",
    rating: 5,
    testimonial: "Professional team that understood our requirements and delivered a mobile app that exceeded expectations. Their technical expertise and communication were excellent throughout.",
    project: "Mobile Application",
    subtitle: "Professional Service",
    color: "from-violet-600 to-purple-600",
    bgColor: "from-violet-50 to-purple-50",
  },
  {
    icon: <Quote className="w-8 h-8" />,
    bgIcon: <FaBriefcase className="text-6xl text-teal-200/30" />,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Growth Labs",
    image: "/profile-1.webp",
    rating: 5,
    testimonial: "Their web application streamlined our workflow significantly. The UI is intuitive, and the post-launch support has been responsive and helpful whenever we need it.",
    project: "Web Application",
    subtitle: "Reliable Partner",
    color: "from-teal-600 to-cyan-600",
    bgColor: "from-teal-50 to-cyan-50",
  }
];

const stats = [
  {
    icon: <Star className="w-8 h-8" />,
    bgIcon: <FaStar className="text-6xl text-amber-200/30" />,
    value: "100%",
    label: "Client Satisfaction",
    subtitle: "Track Record",
    text: "All clients we've worked with have been satisfied with our services and would recommend us for future projects.",
    color: "from-amber-600 to-orange-600",
    bgColor: "from-amber-50 to-orange-50",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    bgIcon: <FaQuoteLeft className="text-6xl text-slate-200/30" />,
    value: "95%",
    label: "On-Time Delivery",
    subtitle: "Consistent Performance",
    text: "We deliver projects on schedule by following agile methodologies and maintaining clear communication throughout development.",
    color: "from-slate-600 to-gray-600",
    bgColor: "from-slate-50 to-gray-50",
  },
  {
    icon: <Quote className="w-8 h-8" />,
    bgIcon: <FaUser className="text-6xl text-emerald-200/30" />,
    value: "Ongoing",
    label: "Support Available",
    subtitle: "After Launch",
    text: "We provide maintenance and support after launch to ensure your application continues to perform well and meet your needs.",
    color: "from-emerald-600 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
  }
];

export default function TestimonialsMission() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-violet-100/40 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-100/30 rounded-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-slate-300 to-slate-500 mr-4"></div>
            <Quote className="w-8 h-8 text-slate-700 mx-2" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-slate-300 to-slate-500 ml-4"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Client Feedback
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Here's what our clients say about working with us and the results they've achieved with our solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Enhanced Effects */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-slate-200 group-hover:border-slate-300 group-hover:scale-[1.02]`}
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-slate-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

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
                  <p className="text-slate-600 leading-relaxed text-lg font-light mb-6 italic">
                    "{item.testimonial}"
                  </p>

                  {/* Project Type */}
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-10 text-slate-700 text-sm font-semibold mb-6 rounded-full border border-slate-300`}>
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
                className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-slate-200 group-hover:border-slate-300 group-hover:scale-[1.02]`}
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-slate-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

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

                  <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                    {item.value}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
                    {item.label}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-6 border-t border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
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
          <div className="inline-flex items-center space-x-2 text-slate-700 mb-4">
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider">
              Trusted By Businesses
            </span>
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse delay-300"></div>
          </div>

          <p className="text-lg text-slate-600 font-medium">
            Join our clients who have achieved their business goals with our solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

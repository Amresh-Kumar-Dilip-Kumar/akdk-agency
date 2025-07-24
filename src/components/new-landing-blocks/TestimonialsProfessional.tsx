"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section } from "@/components/new-landing-comp/section";
import { SectionHeader } from "@/components/new-landing-comp/section-header";
import { BoxCard } from "@/components/new-landing-comp/box-card";
import { IconBox } from "@/components/new-landing-comp/icon-box";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Solutions",
    image: "/profile-1.webp",
    rating: 5,
    testimonial: "AKDK Digital transformed our online presence completely. Their attention to detail and technical expertise exceeded our expectations. Our website traffic increased by 300% within 3 months.",
    project: "E-commerce Platform"
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "Digital Innovations",
    image: "/profile-2.webp",
    rating: 5,
    testimonial: "Working with AKDK Digital was a game-changer for our business. They delivered a mobile app that our customers absolutely love. The team is professional, responsive, and truly understands modern technology.",
    project: "Mobile Application"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Growth Labs",
    image: "/profile-1.webp",
    rating: 5,
    testimonial: "The web application AKDK Digital built for us streamlined our entire workflow. Their post-launch support has been exceptional. I highly recommend them for any digital project.",
    project: "Web Application"
  }
];

const stats = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "95%", label: "On-Time Delivery" },
  { value: "24/7", label: "Support Available" },
  { value: "3+", label: "Years Experience" }
];

export const TestimonialsProfessional = () => (
  <Section variant="default" size="xl">
    <SectionHeader
      badge="Client Testimonials"
      title={
        <>
          What Our <span className="text-red-600">Clients Say</span>
        </>
      }
      description="Don't just take our word for it. Here's what our satisfied clients have to say about working with AKDK Digital."
      className="mb-16"
    />

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {testimonials.map((testimonial, index) => (
        <BoxCard
          key={index}
          delay={index * 0.2}
          variant="bordered"
          className="border-2 border-gray-300 hover:border-red-400 group h-full flex flex-col"
        >
          <div className="flex-grow">
            {/* Quote Icon */}
            <IconBox 
              icon={<Quote className="w-5 h-5" />}
              variant="red"
              size="sm"
              className="mb-6 group-hover:scale-110 transition-transform duration-300"
            />
            
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            {/* Testimonial Text */}
            <p className="text-gray-700 mb-6 leading-relaxed font-medium italic">
              "{testimonial.testimonial}"
            </p>
            
            {/* Project Type */}
            <div className="inline-block px-3 py-1 bg-red-50 text-red-700 text-sm font-semibold mb-6 border border-red-200">
              {testimonial.project}
            </div>
          </div>
          
          {/* Client Info */}
          <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-200 group-hover:border-red-300 transition-colors">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-12 h-12 object-cover border-2 border-gray-200 group-hover:border-red-300 transition-colors"
            />
            <div>
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600 font-medium">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        </BoxCard>
      ))}
    </div>

    {/* Stats Section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <BoxCard
        variant="elevated"
        className="bg-gradient-to-r from-gray-900 to-red-900 text-white border-2 border-gray-800"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by Businesses Worldwide
          </h3>
          <p className="text-gray-300 font-medium">
            Our commitment to excellence speaks for itself
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-red-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-300 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </BoxCard>
    </motion.div>

    {/* CTA Section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-16 text-center"
    >
      <BoxCard
        variant="bordered"
        className="border-2 border-gray-300 hover:border-red-400 max-w-3xl mx-auto group"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
          Ready to Join Our Success Stories?
        </h3>
        <p className="text-gray-600 mb-8 font-medium">
          Let's discuss how we can help you achieve similar results for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold border-2 border-red-600 hover:border-red-700 transition-all duration-300"
            onClick={() => (window.location.href = "/contact-us")}
          >
            Start Your Project
          </button>
          <button
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:border-red-400 hover:bg-red-50 hover:text-red-700 font-bold transition-all duration-300"
            onClick={() => (window.location.href = "/project")}
          >
            View Our Portfolio
          </button>
        </div>
      </BoxCard>
    </motion.div>
  </Section>
);

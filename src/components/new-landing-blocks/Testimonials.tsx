"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "AKDK Digital transformed our vision into reality. Their attention to detail and innovative approach exceeded our expectations. The team delivered a stunning website that perfectly represents our brand.",
    rating: 5,
    avatar: "/profile/nikhil.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, E-commerce Plus",
    content: "Working with AKDK was a game-changer for our business. They built us a robust e-commerce platform that increased our sales by 150%. Their ongoing support has been exceptional.",
    rating: 5,
    avatar: "/profile/utsav.png"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, Digital Solutions",
    content: "The mobile app AKDK developed for us has received amazing feedback from our users. Their technical expertise and creative problem-solving made the entire process smooth and enjoyable.",
    rating: 5,
    avatar: "/profile/nikhil.png"
  }
];

export const Testimonials = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-100 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium mb-6"
          >
            <Quote className="w-4 h-4" />
            Client Success Stories
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            What Our <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the businesses we've helped transform their digital presence.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                  <Quote className="w-5 h-5 text-red-500" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our success stories?
          </p>
          <button
            onClick={() => (window.location.href = "/contact-us")}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

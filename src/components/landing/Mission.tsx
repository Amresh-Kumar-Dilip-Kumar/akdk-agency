import React from "react";
import { FaUsers, FaUserTie, FaStar } from "react-icons/fa";
import { Target, Users, Award, Zap } from "lucide-react";

const data = [
  {
    icon: <Target className="w-8 h-8" />,
    bgIcon: <FaStar className="text-6xl text-red-200/30" />,
    title: "Our Mission",
    subtitle: "Driving Innovation",
    text: "We strive to provide exceptional digital solutions that exceed client expectations. Our focus is on innovation, quality, and transforming businesses through cutting-edge technology.",
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-50",
  },
  {
    icon: <Users className="w-8 h-8" />,
    bgIcon: <FaUsers className="text-6xl text-blue-200/30" />,
    title: "Our Values",
    subtitle: "Excellence & Integrity",
    text: "We prioritize quality, collaboration, and innovation. By working closely with clients, we ensure their vision is realized while leveraging the latest technologies and best practices.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    icon: <Award className="w-8 h-8" />,
    bgIcon: <FaUserTie className="text-6xl text-purple-200/30" />,
    title: "Our Team",
    subtitle: "Expert Professionals",
    text: "Our talented team of developers, designers, and strategists collaborates to create outstanding digital solutions, ensuring seamless functionality and beautiful user experiences.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50",
  },
];

export default function Mission() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/30 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mr-4"></div>
            <Zap className="w-8 h-8 text-red-600 mx-2" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-red-500 to-pink-500 ml-4"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 bg-clip-text text-transparent">
            Discover AKDK Digital
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            We build innovative digital solutions that drive business success.
            Our mission, values, and expert team make us your ideal digital
            transformation partner.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Enhanced Effects */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-red-200 group-hover:scale-105`}
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-red-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

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

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg font-light">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-6 border-t border-gray-200 group-hover:border-red-200 transition-colors duration-300">
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full group-hover:w-20 transition-all duration-500`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-2 text-red-600 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider">
              Ready to Transform Your Business?
            </span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-300"></div>
          </div>

          <p className="text-lg text-gray-600 font-medium">
            Join the businesses that trust AKDK Digital with their digital
            transformation journey.
          </p>
        </div>
      </div>
    </section>
  );
}

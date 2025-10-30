import React from "react";
import { FaUsers, FaUserTie, FaStar, FaTrophy } from "react-icons/fa";
import { Target, Users, Award, Zap, Clock, Rocket, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: <Clock className="w-8 h-8" />,
    bgIcon: <FaUsers className="text-6xl text-slate-200/30" />,
    title: "3+ Years",
    subtitle: "Proven Track Record",
    text: "Over three years of delivering high-quality web and mobile solutions to businesses across various industries, consistently exceeding expectations.",
    color: "from-slate-600 to-slate-800",
    bgColor: "from-slate-50 to-gray-50",
  },
  {
    icon: <Users className="w-8 h-8" />,
    bgIcon: <FaUserTie className="text-6xl text-emerald-200/30" />,
    title: "20+ Clients",
    subtitle: "Long-term Partnerships",
    text: "Built lasting relationships with clients who trust us for ongoing development work and continue to recommend our services.",
    color: "from-emerald-600 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    bgIcon: <FaTrophy className="text-6xl text-violet-200/30" />,
    title: "50+ Projects",
    subtitle: "Successful Launches",
    text: "From startup MVPs to enterprise platforms, we've successfully launched projects that drive real business value and user engagement.",
    color: "from-violet-600 to-purple-600",
    bgColor: "from-violet-50 to-purple-50",
  },
];

const features = [
  {
    icon: <Target className="w-8 h-8" />,
    bgIcon: <FaStar className="text-6xl text-amber-200/30" />,
    title: "Strategic Planning",
    subtitle: "Goal-Driven Development",
    text: "We start every project by understanding your business objectives and creating a roadmap that aligns technology decisions with your strategic goals.",
    color: "from-amber-600 to-orange-600",
    bgColor: "from-amber-50 to-orange-50",
  },
  {
    icon: <Award className="w-8 h-8" />,
    bgIcon: <FaTrophy className="text-6xl text-blue-200/30" />,
    title: "Quality Engineering",
    subtitle: "Built to Last",
    text: "We follow industry best practices and conduct thorough testing to ensure your application is reliable, scalable, and maintainable.",
    color: "from-blue-600 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    bgIcon: <FaUsers className="text-6xl text-rose-200/30" />,
    title: "Agile Delivery",
    subtitle: "Iterative Approach",
    text: "Using agile methodologies, we deliver working software in short cycles, allowing for feedback and adjustments throughout the development process.",
    color: "from-rose-600 to-pink-600",
    bgColor: "from-rose-50 to-pink-50",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    bgIcon: <FaUserTie className="text-6xl text-cyan-200/30" />,
    title: "Ongoing Support",
    subtitle: "We're Here to Help",
    text: "After launch, we provide maintenance, updates, and technical support to ensure your application continues to perform optimally.",
    color: "from-cyan-600 to-blue-600",
    bgColor: "from-cyan-50 to-blue-50",
  },
];

export default function WhyUsMission() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-slate-100/50 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-100/30 rounded-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-slate-300 to-slate-500 mr-4"></div>
            <Award className="w-8 h-8 text-slate-700 mx-2" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-slate-300 to-slate-500 ml-4"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Why Work With Us
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            We combine technical expertise with a collaborative approach to deliver solutions that solve real business problems and drive growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((item, index) => (
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

                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-6 border-t border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full group-hover:w-20 transition-all duration-500`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((item, index) => (
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

                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-6 border-t border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
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
          <div className="inline-flex items-center space-x-2 text-slate-700 mb-4">
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider">
              Partnership-Focused Development
            </span>
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse delay-300"></div>
          </div>

          <p className="text-lg text-slate-600 font-medium">
            Let's work together to build something exceptional for your business.
          </p>
        </div>
      </div>
    </section>
  );
}

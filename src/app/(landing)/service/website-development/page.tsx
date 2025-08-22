import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Code,
  Zap,
  Target,
  Clock,
  Users,
  Award,
  ArrowRight,
  Star,
  Rocket,
} from "lucide-react";

function WebsiteDevelopmentServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/web.jpg"
          alt="Website Development"
          layout="fill"
          objectFit="cover"
          className="-z-30 scale-105"
        />

        {/* Multiple Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/70 to-blue-900/75 -z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-10"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Back Button */}
          <Link
            href="/service"
            className="inline-flex items-center mb-8 text-blue-300 hover:text-white transition-colors duration-300 font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>

          <div className="flex  flex-col  gap-8">
            <div className="xl:flex-1">
              {/* Decorative Line */}

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white  leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Website Design &
                </span>
                <span className="block text-blue-400 mt-2">Development</span>
              </h1>
            </div>

            <div className="xl:flex-1">
              <div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-blue-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Custom Solutions
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Overview Section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-4"></div>
              <Code className="w-8 h-8 text-blue-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-blue-500 to-purple-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 bg-clip-text text-transparent">
              Exceptional Website Development
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              We specialize in crafting bespoke digital experiences that
              captivate audiences and drive results. Our team combines
              creativity, technology, and strategy to build user-friendly
              websites that enhance your brand and deliver real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Features */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Why Choose Our{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Services?
                  </span>
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Zap className="w-6 h-6" />,
                    text: "Lightning Fast Loading Speed",
                    color: "from-yellow-500 to-orange-500",
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    text: "SEO Optimized for Better Rankings",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: <Code className="w-6 h-6" />,
                    text: "Custom Web Applications",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    text: "Responsive Design for All Devices",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    text: "24/7 Premium Support",
                    color: "from-red-500 to-rose-500",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} text-white rounded-xl shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    <span className="text-lg font-bold text-gray-800">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border-2 border-gray-200 p-8 lg:p-10 group-hover:shadow-3xl transition-all duration-500">
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg mb-6">
                    <Rocket className="w-8 h-8" />
                  </div>

                  <h3 className="text-3xl font-black text-gray-900 mb-4">
                    Professional Website Package
                  </h3>

                  <div className="mb-6">
                    <span className="text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ₹8,000
                    </span>
                    <span className="text-gray-600 text-lg font-medium ml-2">
                      onwards
                    </span>
                  </div>

                  <p className="text-gray-600 mb-8 font-light leading-relaxed">
                    Perfect for businesses seeking a professional and affordable
                    online presence with modern features.
                  </p>

                  <div className="space-y-3 mb-8 text-left">
                    {[
                      "Custom Responsive Design",
                      "SEO Optimization",
                      "Fast Loading Speed",
                      "Mobile-First Approach",
                      "3 Months Free Support",
                      "SSL Certificate Included",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact-us"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-4"></div>
              <Target className="w-8 h-8 text-blue-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-blue-500 to-purple-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 bg-clip-text text-transparent">
              Our Development Process
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              A streamlined approach that ensures quality, efficiency, and
              exceptional results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Research",
                desc: "We begin by understanding your business, goals, audience, and competitors to shape a solid foundation for success.",
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                step: "02",
                title: "Planning & Strategy",
                desc: "We define project scope, create wireframes, and outline a comprehensive roadmap for smooth development.",
                icon: <Target className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                step: "03",
                title: "Design & Prototyping",
                desc: "Crafting beautiful, intuitive UI/UX designs that align with your brand identity and resonate with users.",
                icon: <Award className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
              },
              {
                step: "04",
                title: "Development & Coding",
                desc: "Building responsive, SEO-optimized websites using modern technologies and best practices for optimal performance.",
                icon: <Code className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
              },
              {
                step: "05",
                title: "Testing & Quality Assurance",
                desc: "Rigorous testing across devices and browsers to ensure functionality, speed, security, and user experience.",
                icon: <CheckCircle2 className="w-8 h-8" />,
                color: "from-indigo-500 to-blue-500",
                bgColor: "from-indigo-50 to-blue-50",
              },
              {
                step: "06",
                title: "Launch & Ongoing Support",
                desc: "We deploy your site and provide continuous support, maintenance, and improvements for long-term success.",
                icon: <Rocket className="w-8 h-8" />,
                color: "from-teal-500 to-green-500",
                bgColor: "from-teal-50 to-green-50",
              },
            ].map((step, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-gray-200 group-hover:border-blue-200 group-hover:scale-105`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-blue-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative p-8 h-full">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-4xl font-black text-gray-200 group-hover:text-blue-200 transition-colors duration-300">
                    {step.step}
                  </div>

                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8">
              <Rocket className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Elevate Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Online Presence?
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              Contact us today to discuss your project and discover how we can
              help your business grow with a stunning website.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/project"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                View Our Portfolio
                <Star className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebsiteDevelopmentServicePage;

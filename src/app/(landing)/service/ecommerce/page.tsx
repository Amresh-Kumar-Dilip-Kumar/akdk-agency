import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShoppingCart,
  Zap,
  Target,
  Clock,
  Users,
  Award,
  ArrowRight,
  Star,
  Rocket,
  TrendingUp,
  Shield,
} from "lucide-react";

function EcommerceCmsServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/cms.jpg"
          alt="E-commerce & CMS"
          layout="fill"
          objectFit="cover"
          className="-z-30 scale-105"
        />

        {/* Multiple Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/70 to-purple-900/75 -z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-10"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Back Button */}
          <Link
            href="/service"
            className="inline-flex items-center mb-8 text-purple-300 hover:text-white transition-colors duration-300 font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>

          <div className="flex flex-col  gap-8">
            <div className="xl:flex-1">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white  leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                  E-commerce &
                </span>
                <span className="block text-purple-400 mt-2">
                  CMS Solutions
                </span>
                {/* Decorative accent */}
              </h1>
            </div>

            <div className="xl:flex-1">
              <div className="">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-purple-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Secure Payments</span>
                  </div>
                  <div className="flex items-center space-x-2 text-pink-300">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
                    <span className="text-sm font-medium">
                      Scalable Solutions
                    </span>
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mr-4"></div>
              <ShoppingCart className="w-8 h-8 text-purple-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-purple-500 to-pink-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
              Empower Your Online Presence
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              At AKDK Digital, we specialize in crafting robust E-commerce
              platforms and dynamic Content Management Systems that drive
              business growth. Our solutions are tailored to meet your unique
              needs, ensuring scalability, security, and seamless user
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-100/20 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mr-4"></div>
              <Target className="w-8 h-8 text-purple-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-purple-500 to-pink-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
              Powerful Features
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Everything you need to build a successful online business with
              cutting-edge technology and user-friendly features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customizable Design",
                desc: "Tailor your website's look and feel to match your brand identity with flexible design options.",
                icon: <Award className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                title: "Secure Payment Integration",
                desc: "Integrate with trusted payment gateways to ensure safe and seamless transactions for your customers.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                title: "Responsive Layout",
                desc: "Optimized for all devices, providing a seamless shopping experience across desktop, tablet, and mobile.",
                icon: <Users className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
              },
              {
                title: "SEO Optimization",
                desc: "Enhance visibility with built-in SEO tools and best practices to rank higher in search results.",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
              },
              {
                title: "Inventory Management",
                desc: "Keep track of your products with real-time inventory updates and automated stock management.",
                icon: <Target className="w-8 h-8" />,
                color: "from-indigo-500 to-blue-500",
                bgColor: "from-indigo-50 to-blue-50",
              },
              {
                title: "Analytics Dashboard",
                desc: "Gain valuable insights into user behavior, sales performance, and business metrics with comprehensive analytics.",
                icon: <Rocket className="w-8 h-8" />,
                color: "from-teal-500 to-green-500",
                bgColor: "from-teal-50 to-green-50",
              },
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-gray-200 group-hover:border-purple-200 group-hover:scale-105`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-purple-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative p-8 h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mr-4"></div>
              <ShoppingCart className="w-8 h-8 text-purple-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-purple-500 to-pink-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
              E-commerce Package
            </h2>
          </div>

          {/* Pricing Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border-2 border-gray-200 p-8 lg:p-12 group-hover:shadow-3xl transition-all duration-500">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Best Value
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl shadow-lg mb-6">
                  <ShoppingCart className="w-8 h-8" />
                </div>

                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Complete E-commerce Solution
                </h3>

                <div className="mb-6">
                  <span className="text-6xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ₹16,499
                  </span>
                  <span className="text-gray-600 text-lg font-medium ml-2">
                    onwards
                  </span>
                </div>

                <p className="text-gray-600 mb-8 font-light leading-relaxed">
                  Perfect for startups and small businesses looking for a robust
                  online store with powerful features and seamless user
                  experience.
                </p>

                <div className="space-y-3 mb-8 text-left">
                  {[
                    "Secure Payment Gateway Integration",
                    "Inventory Management System",
                    "SEO Optimization & Analytics",
                    "Mobile-Responsive Design",
                    "Admin Dashboard & Controls",
                    "3 Months Free Support & Maintenance",
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
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8">
              <Rocket className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Launch Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Online Store?
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              Contact us today to discuss your e-commerce project and get a free
              consultation on how we can help grow your business online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
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

export default EcommerceCmsServicePage;

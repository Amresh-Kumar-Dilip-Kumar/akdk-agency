import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Smartphone,
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

function MobileDevelopmentServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/mobile.jpg"
          alt="Mobile App Development"
          layout="fill"
          objectFit="cover"
          className="-z-30 scale-105"
        />

        {/* Multiple Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/70 to-green-900/75 -z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-10"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Back Button */}
          <Link
            href="/service"
            className="inline-flex items-center mb-8 text-green-300 hover:text-white transition-colors duration-300 font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>

          <div className="flex flex-col gap-8">
            <div className="xl:flex-1">
              {/* Decorative Line */}

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white  leading-tight">
                <span className="bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
                  Mobile App Design &
                </span>
                <span className="block text-green-400 mt-2">Development</span>
                {/* Decorative accent */}
              </h1>
            </div>

            <div className="xl:flex-1">
              <div className=" ">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-green-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Cross-Platform</span>
                  </div>
                  <div className="flex items-center space-x-2 text-emerald-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-500"></div>
                    <span className="text-sm font-medium">
                      Native Performance
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-100/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mr-4"></div>
              <Smartphone className="w-8 h-8 text-green-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-green-500 to-emerald-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent">
              Transform Ideas into Mobile Experiences
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              We design and build innovative, performance-driven mobile apps
              that help businesses thrive in the digital era. Whether it's
              Android, iOS, or cross-platform development, we tailor solutions
              that deliver impact and intuitive user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-100/20 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-emerald-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mr-4"></div>
              <Target className="w-8 h-8 text-green-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-green-500 to-emerald-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent">
              What We Offer
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive mobile development services tailored to bring your
              vision to life with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom App Development",
                desc: "Tailored mobile applications built specifically for your business needs and target audience.",
                icon: <Award className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                title: "iOS & Android Native Apps",
                desc: "Platform-specific apps that leverage native features for optimal performance and user experience.",
                icon: <Smartphone className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                title: "Cross-Platform Apps",
                desc: "Efficient development solutions that work seamlessly across multiple platforms and devices.",
                icon: <Users className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
              },
              {
                title: "E-commerce Apps",
                desc: "Feature-rich mobile commerce solutions with secure payment integration and inventory management.",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
              },
              {
                title: "UI/UX App Design",
                desc: "Intuitive and engaging designs that prioritize user experience and modern interface patterns.",
                icon: <Target className="w-8 h-8" />,
                color: "from-indigo-500 to-blue-500",
                bgColor: "from-indigo-50 to-blue-50",
              },
              {
                title: "Maintenance & Support",
                desc: "Ongoing updates, bug fixes, and feature enhancements to keep your app running smoothly.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-teal-500 to-green-500",
                bgColor: "from-teal-50 to-green-50",
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-gray-200 group-hover:border-green-200 group-hover:scale-105`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-green-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative p-8 h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mr-4"></div>
              <Rocket className="w-8 h-8 text-green-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-green-500 to-emerald-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent">
              Our Development Process
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              A proven methodology that ensures your mobile app is built
              efficiently, tested thoroughly, and launched successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "Understanding your goals, target audience, and defining clear objectives for optimal app strategy.",
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                step: "02",
                title: "UI/UX Design",
                desc: "Creating wireframes and prototypes focused on delivering exceptional user experience and interface design.",
                icon: <Target className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                step: "03",
                title: "Development",
                desc: "Bringing your app to life using modern technologies, frameworks, and best development practices.",
                icon: <Award className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
              },
              {
                step: "04",
                title: "Testing & QA",
                desc: "Quality assurance through rigorous functional, performance, and device compatibility testing.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
              },
              {
                step: "05",
                title: "App Store Launch",
                desc: "Professional deployment on Google Play Store and Apple App Store with optimization for discovery.",
                icon: <Rocket className="w-8 h-8" />,
                color: "from-indigo-500 to-blue-500",
                bgColor: "from-indigo-50 to-blue-50",
              },
              {
                step: "06",
                title: "Support & Updates",
                desc: "Ongoing maintenance, bug fixes, feature enhancements, and performance optimization post-launch.",
                icon: <Clock className="w-8 h-8" />,
                color: "from-teal-500 to-green-500",
                bgColor: "from-teal-50 to-green-50",
              },
            ].map((step, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-gray-200 group-hover:border-green-200 group-hover:scale-105`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-green-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative p-8 h-full">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-4xl font-black text-gray-200 group-hover:text-green-200 transition-colors duration-300">
                    {step.step}
                  </div>

                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
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

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mr-4"></div>
              <Smartphone className="w-8 h-8 text-green-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-green-500 to-emerald-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent">
              Mobile App Package
            </h2>
          </div>

          {/* Pricing Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border-2 border-gray-200 p-8 lg:p-12 group-hover:shadow-3xl transition-all duration-500">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Professional Package
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl shadow-lg mb-6">
                  <Smartphone className="w-8 h-8" />
                </div>

                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Complete Mobile App Solution
                </h3>

                <div className="mb-6">
                  <span className="text-6xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    ₹1,09,999
                  </span>
                  <span className="text-gray-600 text-lg font-medium ml-2">
                    onwards
                  </span>
                </div>

                <p className="text-gray-600 mb-8 font-light leading-relaxed">
                  Perfect for startups and businesses looking for a robust
                  mobile presence with native performance and modern features.
                </p>

                <div className="space-y-3 mb-8 text-left">
                  {[
                    "Custom UI/UX Design",
                    "Cross-Platform Compatibility",
                    "App Store Deployment",
                    "Performance Optimization",
                    "Security Implementation",
                    "3 Months Free Support",
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
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
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
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8">
              <Rocket className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Build the{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Next Big Thing?
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              Let's bring your mobile app idea to life with a perfect blend of
              creativity, technology, and user-centric design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Book Free Consultation
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

export default MobileDevelopmentServicePage;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Package,
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

function PackageServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/package.jpg"
          alt="Package Service"
          layout="fill"
          objectFit="cover"
          className="-z-30 scale-105"
        />

        {/* Multiple Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/70 to-orange-900/75 -z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-10"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Back Button */}
          <Link
            href="/service"
            className="inline-flex items-center mb-8 text-orange-300 hover:text-white transition-colors duration-300 font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>

          <div className="flex flex-col  gap-8">
            <div className="xl:flex-1">
              {/* Decorative Line */}

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white  leading-tight">
                <span className="bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent">
                  Tailored Service
                </span>
                <span className="block text-orange-400 mt-2">Packages</span>
                {/* Decorative accent */}
              </h1>
            </div>

            <div className="xl:flex-1">
              <div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-orange-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Fully Customizable
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-red-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-500"></div>
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-100/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mr-4"></div>
              <Package className="w-8 h-8 text-orange-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-orange-500 to-red-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-orange-700 to-gray-900 bg-clip-text text-transparent">
              Scalable & Customized Solutions
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Whether you're a startup, an established business, or a growing
              enterprise, we offer tailored service packages that suit your
              goals and budget. Our custom offerings ensure that you get exactly
              what you need — no fluff, no extra cost.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-100/20 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mr-4"></div>
              <Target className="w-8 h-8 text-orange-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-orange-500 to-red-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-orange-700 to-gray-900 bg-clip-text text-transparent">
              Package Benefits
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Everything you need to succeed with flexible, scalable solutions
              tailored to your business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fully Customizable Plans",
                desc: "Choose exactly what you need — design, development, marketing, or all. Every package is built around your specific requirements.",
                icon: <Award className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                title: "Scalable Solutions",
                desc: "Your solution grows as your business grows — simple as that. Start small and expand as your needs evolve.",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                title: "Timely Delivery",
                desc: "We respect deadlines — our streamlined workflow ensures swift execution without compromising on quality.",
                icon: <Clock className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
              },
              {
                title: "Dedicated Account Manager",
                desc: "A single point of contact who understands your brand and goals, ensuring seamless communication throughout.",
                icon: <Users className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
              },
              {
                title: "Analytics & Reporting",
                desc: "Track your performance and ROI through detailed reports and comprehensive analytics dashboards.",
                icon: <Target className="w-8 h-8" />,
                color: "from-indigo-500 to-blue-500",
                bgColor: "from-indigo-50 to-blue-50",
              },
              {
                title: "After-Sales Support",
                desc: "We don't disappear after project handoff — we stay for ongoing help, maintenance, and improvements.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-teal-500 to-green-500",
                bgColor: "from-teal-50 to-green-50",
              },
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-gray-200 group-hover:border-orange-200 group-hover:scale-105`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-orange-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative p-8 h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors duration-300">
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

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mr-4"></div>
              <Rocket className="w-8 h-8 text-orange-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-orange-500 to-red-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-orange-700 to-gray-900 bg-clip-text text-transparent">
              Our Process
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              A proven methodology that ensures your custom package is perfectly
              aligned with your business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We understand your business, goals, and requirements through detailed consultation sessions.",
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                step: "02",
                title: "Planning",
                desc: "We craft a tailored plan, timeline, and package just for you based on your specific needs.",
                icon: <Target className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Our team executes with precision using the latest tools & technologies for optimal results.",
                icon: <Rocket className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
              },
              {
                step: "04",
                title: "Delivery & Support",
                desc: "Project handoff with comprehensive documentation plus ongoing support whenever needed.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
              },
            ].map((step, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-gray-200 group-hover:border-orange-200 group-hover:scale-105`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-orange-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative p-8 h-full text-center">
                  {/* Step Number */}
                  <div className="text-5xl font-black text-gray-200 group-hover:text-orange-200 transition-colors duration-300 mb-4">
                    {step.step}
                  </div>

                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors duration-300">
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
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8">
              <Package className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Create a{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Custom Plan?
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              Reach out to us now and get a personalized package designed
              specifically for your business — no obligations, just solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Custom Quote
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

export default PackageServicePage;

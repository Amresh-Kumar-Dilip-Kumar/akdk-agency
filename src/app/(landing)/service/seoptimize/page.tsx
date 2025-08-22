import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Search,
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

function SeoServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/seo.jpg"
          alt="SEO Service"
          layout="fill"
          objectFit="cover"
          className="-z-30 scale-105"
        />

        {/* Multiple Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/70 to-indigo-900/75 -z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-10"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Back Button */}
          <Link
            href="/service"
            className="inline-flex items-center mb-8 text-indigo-300 hover:text-white transition-colors duration-300 font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>

          <div className="flex flex-col  gap-8">
            <div className="xl:flex-1">
              {/* Decorative Line */}

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-indigo-100 to-blue-100 bg-clip-text text-transparent">
                  Search Engine
                </span>
                <span className="block text-indigo-400 mt-2">Optimization</span>
                {/* Decorative accent */}
              </h1>
            </div>

            <div className="xl:flex-1">
              <div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-indigo-300">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Data-Driven</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                    <span className="text-sm font-medium">Proven Results</span>
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-100/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 mr-4"></div>
              <Search className="w-8 h-8 text-indigo-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-indigo-500 to-blue-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-indigo-700 to-gray-900 bg-clip-text text-transparent">
              Drive Organic Traffic & Increase Visibility
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Our SEO services are designed to elevate your website's position
              on search engines like Google. By leveraging data-driven insights,
              keyword strategies, and content refinement, we help your business
              attract relevant visitors and convert them into customers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-100/20 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 mr-4"></div>
              <Target className="w-8 h-8 text-indigo-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-indigo-500 to-blue-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-indigo-700 to-gray-900 bg-clip-text text-transparent">
              What We Offer
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive SEO services covering every aspect needed to
              dominate search results and drive meaningful traffic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technical SEO",
                desc: "We ensure your website is structured for crawling and indexing, improving speed, mobile usability, and performance for better rankings.",
                icon: <Award className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                title: "Keyword Research",
                desc: "In-depth analysis of relevant search terms your audience uses—guiding content creation and strategic optimization.",
                icon: <Search className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                title: "On-Page Optimization",
                desc: "Optimizing meta titles, descriptions, headers, and content to boost search engine rankings and user experience.",
                icon: <Target className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
              },
              {
                title: "Content Strategy",
                desc: "Creating engaging, search-optimized content that resonates with users and drives conversions while building authority.",
                icon: <Users className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
              },
              {
                title: "Local SEO",
                desc: "Targeting customers in your local area through Google My Business optimization, reviews, and local keyword targeting.",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "from-indigo-500 to-blue-500",
                bgColor: "from-indigo-50 to-blue-50",
              },
              {
                title: "Link Building",
                desc: "Earning high-quality backlinks to build domain authority and trust in search engines' eyes for better rankings.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-teal-500 to-green-500",
                bgColor: "from-teal-50 to-green-50",
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-gray-200 group-hover:border-indigo-200 group-hover:scale-105`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-indigo-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative p-8 h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 mr-4"></div>
              <Rocket className="w-8 h-8 text-indigo-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-indigo-500 to-blue-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-indigo-700 to-gray-900 bg-clip-text text-transparent">
              Why Partner With Us?
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              We go beyond rankings. Our team crafts tailored strategies to meet
              your business goals, whether it's lead generation, eCommerce
              growth, or brand awareness. With constant monitoring, monthly
              reporting, and adaptive planning, we keep your SEO efforts ahead
              of the curve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transparent Reporting",
                desc: "Detailed insights and analytics",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Best Practices",
                desc: "Industry-leading methodologies",
                icon: <Award className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "SEO Experts",
                desc: "Dedicated team of professionals",
                icon: <Users className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Proven Results",
                desc: "Track record of success",
                icon: <CheckCircle2 className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center group">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-4`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-light">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mb-8">
              <Search className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Grow with{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                SEO?
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              Let us help you reach your digital goals and dominate search
              rankings. Request a free consultation today and see how we can
              transform your online presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/project"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                View Our Results
                <Star className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SeoServicePage;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/landing/page-header2";
import GetAQuoteModal from "@/components/landing/GetAQuoteModal";
import {
  ArrowRight,
  Code,
  Smartphone,
  ShoppingCart,
  Package,
  Search,
  Zap,
  CheckCircle2,
} from "lucide-react";

const service = [
  {
    title: "Website Design and Development",
    description:
      "We specialize in crafting bespoke digital experiences that captivate audiences and drive results with modern responsive designs.",
    image: "/web.jpg",
    link: `/service/website-development`,
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    title: "Mobile App Development",
    description:
      "Reach a broader audience with cross-platform mobile app development. Our team leverages the latest technologies to build apps.",
    image: "/mobile.jpg",
    link: `/service/mobile-development`,
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    title: "E-commerce & CMS",
    description:
      "Beyond the norm, we provide outstanding E-commerce and Content Management System (CMS) services that transform businesses.",
    image: "/cms.jpg",
    link: `/service/ecommerce`,
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    title: "Custom Package Solutions",
    description:
      "Recognizing your online presence is essential for success. Get unparalleled insight into functionality with our custom packages.",
    image: "/package.jpg",
    link: `/service/package`,
    icon: <Package className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Making an impression in the crowded online environment is crucial. Our SEO services aim to boost your digital visibility.",
    image: "/seo.jpg",
    link: `/service/seoptimize`,
    icon: <Search className="w-8 h-8" />,
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-50 to-blue-50",
  },
];

export default function Service2() {
  const [showQuoteModal, setShowQuoteModal] = React.useState(false);

  return (
    <>
      {showQuoteModal && (
        <GetAQuoteModal setShowQuoteModal={setShowQuoteModal} />
      )}

      <PageHeader
        heading={<>Our Comprehensive Digital Services</>}
        description={
          <>
            At{" "}
            <span className="font-bold text-white bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              AKDK Digital
            </span>
            , we offer a range of digital services designed to meet your
            business needs. Our team of expert developers is dedicated to
            delivering custom solutions, seamless upgrades, and ongoing support
            to ensure your applications are always performing at their best.
          </>
        }
      />

      {/* Services Section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mr-4"></div>
              <Zap className="w-8 h-8 text-red-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-red-500 to-pink-500 ml-4"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 bg-clip-text text-transparent">
              Our Digital Solutions
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Empowering businesses with innovative digital services that drive
              growth and success in the modern digital landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.map((service, index) => (
              <EnhancedServiceCard
                key={index}
                service={service}
                setShowQuoteModal={setShowQuoteModal}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-8">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              Let's discuss your project requirements and create something
              amazing together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setShowQuoteModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                Contact Us
                <Zap className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function EnhancedServiceCard({
  service,
  setShowQuoteModal,
  index,
}: {
  service: any;
  setShowQuoteModal: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
}) {
  return (
    <div className="group relative h-full">
      {/* Card Background with Enhanced Effects */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-red-200 group-hover:scale-105`}
      ></div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-red-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      <div className="relative h-full flex flex-col">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <Link href={service.link}>
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col">
          {/* Icon */}
          <div
            className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} text-white rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6 flex-1 font-light">
            {service.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={service.link}
              className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Button
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                setShowQuoteModal(true);
              }}
              className="px-4 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:border-red-300 hover:bg-red-50 hover:text-red-700 transition-all duration-300"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

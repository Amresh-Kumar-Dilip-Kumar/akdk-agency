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
      <section className="py-24 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 border border-gray-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-6">
              <Zap className="w-4 h-4" />
              Services
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-950">
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
      <section className="py-24 bg-red-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="border border-red-500 p-12 bg-red-600">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-red-600 mb-8">
              <CheckCircle2 className="w-8 h-8 text-red-600" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Transform Your{" "}
              <span className="text-white underline decoration-white/60 underline-offset-4">
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
                className="px-8 py-4 bg-white text-red-600 font-bold border border-white hover:bg-red-50 transition-colors"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-bold hover:bg-red-500 transition-colors"
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
    <div className="group h-full bg-white border border-gray-200">
      <div className="h-full flex flex-col">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <Link href={service.link}>
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
          </Link>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col">
          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-12 h-12 bg-red-600 text-white mb-4"
          >
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
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
              className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-bold hover:bg-red-600 transition-colors"
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
              className="px-4 py-3 border border-gray-300 text-gray-700 font-bold hover:border-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

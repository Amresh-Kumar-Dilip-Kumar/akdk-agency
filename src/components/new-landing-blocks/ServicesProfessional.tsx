"use client";
import { motion } from "framer-motion";
import { Globe, Smartphone, ShoppingCart, Palette, Search, Headphones } from "lucide-react";
import { Section } from "@/components/new-landing-comp/section";
import { SectionHeader } from "@/components/new-landing-comp/section-header";
import { BoxCard } from "@/components/new-landing-comp/box-card";
import { IconBox } from "@/components/new-landing-comp/icon-box";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom web applications built with modern technologies. From simple business websites to complex web platforms.",
    features: ["React & Next.js", "Responsive Design", "Performance Optimized", "SEO Ready"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: ["iOS & Android", "React Native", "Native Performance", "App Store Ready"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store development with secure payments, inventory management, and seamless shopping experiences.",
    features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics Dashboard"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that engage users and drive conversions. From wireframes to pixel-perfect interfaces.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: Search,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive qualified traffic.",
    features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics & Reporting"]
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "24/7 technical support and ongoing maintenance to ensure your digital assets perform at peak efficiency.",
    features: ["24/7 Support", "Regular Updates", "Security Monitoring", "Performance Optimization"]
  }
];

export const ServicesProfessional = () => (
  <Section variant="default" size="xl">
    <SectionHeader
      badge="Our Services"
      title={
        <>
          Complete <span className="text-red-600">Digital Solutions</span>
        </>
      }
      description="From concept to launch and beyond, we provide end-to-end digital services that transform your business ideas into powerful, market-ready solutions."
      className="mb-16"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const colors = [
          { border: "border-blue-300", hover: "hover:border-blue-500", icon: "blue", text: "group-hover:text-blue-600" },
          { border: "border-purple-300", hover: "hover:border-purple-500", icon: "purple", text: "group-hover:text-purple-600" },
          { border: "border-green-300", hover: "hover:border-green-500", icon: "green", text: "group-hover:text-green-600" },
          { border: "border-orange-300", hover: "hover:border-orange-500", icon: "orange", text: "group-hover:text-orange-600" },
          { border: "border-red-300", hover: "hover:border-red-500", icon: "red", text: "group-hover:text-red-600" },
          { border: "border-cyan-300", hover: "hover:border-cyan-500", icon: "cyan", text: "group-hover:text-cyan-600" }
        ];
        const colorScheme = colors[index % colors.length];
        
        return (
          <BoxCard
            key={index}
            delay={index * 0.1}
            variant="bordered"
            className={`border-2 ${colorScheme.border} ${colorScheme.hover} group h-full flex flex-col`}
          >
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-6">
                <IconBox 
                  icon={<service.icon className="w-6 h-6" />}
                  variant={colorScheme.icon as any}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className={`text-xl font-bold text-gray-900 ${colorScheme.text} transition-colors`}>
                  {service.title}
                </h3>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed font-medium">
              {service.description}
            </p>
            
            <div className="space-y-2 mb-6">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          
          
          <Button
            variant="outline"
            className="w-full border-2 border-gray-300 hover:border-red-400 hover:bg-red-50 hover:text-red-700 transition-all duration-300 font-bold"
            onClick={() => (window.location.href = "/service")}
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </BoxCard>
      )})}
    </div>

    {/* CTA Section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mt-16 text-center"
    >
      <BoxCard
        variant="elevated"
        className="bg-gradient-to-r from-gray-900 to-red-900 text-white border-2 border-gray-800 max-w-4xl mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss your project requirements and create a custom solution that drives real results for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold border-2 border-red-600 hover:border-red-700"
            onClick={() => (window.location.href = "/contact-us")}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold"
            onClick={() => (window.location.href = "/project")}
          >
            View Portfolio
          </Button>
        </div>
      </BoxCard>
    </motion.div>
  </Section>
);

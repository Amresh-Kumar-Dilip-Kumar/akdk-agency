"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/new-landing-comp/section";
import { BoxCard } from "@/components/new-landing-comp/box-card";
import { IconBox } from "@/components/new-landing-comp/icon-box";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our experts",
    action: "Schedule a Call",
    href: "tel:+1234567890"
  },
  {
    icon: Mail,
    title: "Email Us", 
    description: "Get detailed project information",
    action: "Send Email",
    href: "mailto:contact@akdkdigital.com"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Quick questions & instant support",
    action: "Start Chat",
    href: "/contact-us"
  }
];

const benefits = [
  "Free consultation & project analysis",
  "Transparent pricing with no hidden costs",
  "Dedicated project manager assigned",
  "Regular progress updates & reporting",
  "Post-launch support & maintenance",
  "100% satisfaction guarantee"
];

export const CallToActionProfessional = () => (
  <Section variant="dark" size="xl" className="bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border-2 border-red-300 text-red-700 text-sm font-bold uppercase tracking-wide mb-6"
      >
        <CheckCircle2 className="w-4 h-4" />
        Ready to Get Started?
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
      >
        Let's Build Your
        <span className="block text-red-400 mt-2">Digital Success</span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium"
      >
        Transform your business with our expert digital solutions. From concept to launch, we're here to make your vision a reality.
      </motion.p>
    </div>

    {/* Contact Methods */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {contactMethods.map((method, index) => (
        <BoxCard
          key={index}
          delay={0.3 + index * 0.1}
          variant="bordered"
          className="border-2 border-gray-700 hover:border-red-500 bg-white/10 backdrop-blur-sm text-white group h-full"
        >
          <div className="text-center">
            <IconBox 
              icon={<method.icon className="w-6 h-6" />}
              variant="red"
              className="mx-auto mb-4 bg-red-500 text-white border-red-500 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
              {method.title}
            </h3>
            <p className="text-gray-300 mb-6 font-medium">
              {method.description}
            </p>
            <Button
              variant="outline"
              className="w-full border-2 border-white/30 text-white hover:bg-red-500 hover:border-red-500 font-bold"
              onClick={() => window.open(method.href, '_blank')}
            >
              {method.action}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </BoxCard>
      ))}
    </div>

    {/* Benefits Grid */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mb-16"
    >
      <BoxCard
        variant="bordered"
        className="border-2 border-gray-700 bg-white/5 backdrop-blur-sm"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          What You Get When You Choose Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span className="text-gray-300 font-medium">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </BoxCard>
    </motion.div>

    {/* Main CTA */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="text-center"
    >
      <BoxCard
        variant="elevated"
        className="bg-gradient-to-r from-red-600 to-pink-600 border-2 border-red-500 text-white max-w-4xl mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Start Your Digital Transformation?
        </h3>
        <p className="text-lg text-red-100 mb-8 font-medium">
          Get a free consultation and detailed project proposal within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="px-8 py-4 bg-white text-red-600 hover:bg-gray-100 font-bold border-2 border-white text-lg"
            onClick={() => (window.location.href = "/contact-us")}
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-bold text-lg"
            onClick={() => (window.location.href = "/project")}
          >
            View Our Portfolio
          </Button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-red-400">
          <p className="text-red-100 font-medium">
            <strong>No commitment required.</strong> Just a friendly conversation about your project.
          </p>
        </div>
      </BoxCard>
    </motion.div>
  </Section>
);

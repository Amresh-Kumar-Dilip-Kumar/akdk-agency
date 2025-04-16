import Image from "next/image";
import React from "react";

function EcommerceCmsServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] bg-slate-200 z-0">
        <Image
          className="object-cover w-full h-full absolute inset-0 -z-10"
          src="/cms.jpg"
          alt="E-commerce & CMS"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black opacity-50 -z-10" />
        <div className="relative max-w-4xl mx-auto flex flex-col justify-center h-full px-6 lg:px-8">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold">
            E-commerce & CMS Solutions
          </h1>
          <a
            href="/service"
            className="text-white hover:text-red-500 font-semibold text-xl tracking-wider mb-2"
          >
            ← Back to Services
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-6 lg:px-8 my-16">
        <h2 className="text-3xl text-center font-semibold mb-8">
          Empower Your Online Presence
        </h2>
        <div className="max-w-7xl text-center mx-auto">
          <p className="text-base text-[#4B4B4B]">
            At AKDK, we specialize in crafting robust E-commerce platforms and
            dynamic Content Management Systems (CMS) that drive business growth.
            Our solutions are tailored to meet your unique needs, ensuring
            scalability, security, and a seamless user experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Customizable Design",
                desc: "Tailor your website's look and feel to match your brand identity.",
              },
              {
                title: "Secure Payment Integration",
                desc: "Integrate with trusted payment gateways to ensure safe transactions.",
              },
              {
                title: "Responsive Layout",
                desc: "Optimized for all devices, providing a seamless experience everywhere.",
              },
              {
                title: "SEO Optimization",
                desc: "Enhance visibility with built-in SEO tools and best practices.",
              },
              {
                title: "Inventory Management",
                desc: "Keep track of your products with real-time inventory updates.",
              },
              {
                title: "Analytics Dashboard",
                desc: "Gain insights into user behavior and sales performance.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[#4B4B4B]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}

      <section className="px-4 sm:px-6 lg:px-8 my-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Start With Our Pro Plan
          </h2>
          <div className="bg-white shadow-lg rounded-xl p-10">
            <h3 className="text-xl font-bold mb-3">Pro Plan</h3>
            <p className="text-4xl font-extrabold mb-4 text-red-600">$199</p>
            <p className="text-base mb-6 text-[#4B4B4B]">
              Perfect for startups and small businesses looking for a robust
              mobile presence.
            </p>
            <ul className="text-left mb-6 space-y-2 text-[#4B4B4B]">
              <li>✔ Advanced Analytics</li>
              <li>✔ Priority Email Support</li>
              <li>✔ 24/7 Supportt</li>
              <li>✔ 3 Months Free Support</li>
            </ul>
            <a
              href="#"
              className="inline-block bg-red-500 text-white font-semibold text-lg px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-red-500 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base text-white mb-8">
            Contact us today to discuss your project and get a free quote!
          </p>
          <a
            href="/contact"
            className="bg-white text-red-500 py-3 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
export default EcommerceCmsServicePage;
// This code defines a React component for an E-commerce and CMS service page.

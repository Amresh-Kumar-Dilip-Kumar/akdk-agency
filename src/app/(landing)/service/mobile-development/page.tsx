import Image from "next/image";
import React from "react";

function MobileDevelopmentServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] bg-slate-200 z-0">
        <Image
          className="object-cover w-full h-full absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
          src="/mobile.jpg"
          alt="Mobile App Development"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black opacity-50 -z-10" />
        <div className="relative max-w-4xl mx-auto flex flex-col justify-center h-full px-6 lg:px-8">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold">
            Mobile App Design & Development
          </h1>
          <a
            href="/service"
            className="text-white hover:text-red-500 font-semibold text-xl tracking-wider mt-4"
          >
            ← Back to Services
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 sm:px-6 lg:px-8 my-16">
        <h2 className="text-3xl text-center font-semibold mb-8">
          Transform Your Ideas into Engaging Mobile Experiences
        </h2>
        <div className="max-w-6xl text-center mx-auto">
          <p className="text-base text-[#4B4B4B]">
            We design and build innovative, performance-driven mobile apps that
            help businesses thrive in the digital era. Whether it’s Android,
            iOS, or cross-platform development, we tailor solutions that deliver
            impact, performance, and an intuitive user experience.
          </p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="px-4 sm:px-6 lg:px-8 my-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              "Custom App Development",
              "iOS & Android Native Apps",
              "Cross-Platform Apps",
              "E-commerce Apps",
              "UI/UX App Design",
              "Ongoing Maintenance & Support",
            ].map((feature) => (
              <div
                key={feature}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
              >
                <p className="text-lg font-medium text-[#4B4B4B]">
                  ✔ {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our App Development Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "1. Discovery & Planning",
                desc: "Understanding your goals, target audience, and defining clear objectives.",
              },
              {
                title: "2. UI/UX Design",
                desc: "Creating wireframes and prototypes focused on great user experience.",
              },
              {
                title: "3. Development",
                desc: "Bringing your app to life using modern technologies and frameworks.",
              },
              {
                title: "4. Testing",
                desc: "Quality assurance through rigorous functional and device testing.",
              },
              {
                title: "5. Launch",
                desc: "App deployment on Google Play Store and Apple App Store.",
              },
              {
                title: "6. Support",
                desc: "Ongoing updates, bug fixes, and feature enhancements post-launch.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-[#4B4B4B]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plan */}
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
              <li>✔ Custom UI/UX Design</li>
              <li>✔ Cross-Platform Compatibility</li>
              <li>✔ App Store Deployment</li>
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

      {/* CTA */}

      <section className="bg-red-600 py-12">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build the Next Big Thing?
          </h2>
          <p className="mb-6">
            Let’s bring your mobile app idea to life with a perfect blend of
            creativity and tech.
          </p>
          <a
            href="/contact"
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}

export default MobileDevelopmentServicePage;

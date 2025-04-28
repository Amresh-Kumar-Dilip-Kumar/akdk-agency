import Image from "next/image";
import React from "react";

function WebsiteDevelopmentServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] bg-slate-200 z-0">
        <Image
          className="object-cover w-full h-full absolute inset-0 -z-10"
          src="/web.jpg"
          alt="Website Development"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black opacity-50 -z-10" />
        <div className="relative max-w-4xl mx-auto flex flex-col justify-center h-full px-6 lg:px-8">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold">
            Website Design and Development
          </h1>
          <a
            href="/service"
            className="text-white hover:text-red-500 font-semibold text-xl tracking-wider mb-2"
          >
            ← Back to Services
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 sm:px-6 lg:px-8 my-16">
        <h2 className="text-3xl text-center font-semibold mb-8">
          Website Design and Development Services
        </h2>
        <div className="max-w-7xl text-center mx-auto">
          <p className="text-base text-[#4B4B4B]">
            We specialize in crafting bespoke digital experiences that captivate
            audiences and drive results. Our team combines creativity,
            technology, and strategy to build user-friendly websites, engaging
            web applications, and seamless digital solutions. Whether
            you&apos;re a small business or a growing enterprise, we tailor our
            services to meet your unique needs, ensuring a strong online
            presence that enhances your brand and delivers real impact.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 my-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center lg:text-left">
              Why Choose Our Services?
            </h2>
            <ul className="space-y-4 text-base text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> Responsive Design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> SEO Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> Custom Web
                Applications
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> Fast Loading Speed
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> 24/7 Support
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Static Website Package
            </h3>
            <p className="text-5xl font-bold text-red-600 mb-4">INR 8000</p>
            <p className="text-gray-600 mb-6">
              Perfect for businesses seeking a professional and affordable
              online presence.
            </p>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> Custom Design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> Advanced Features
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> Priority Support
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-red-600 text-white font-semibold text-lg px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Website Development Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "1. Discovery",
                desc: "We begin by understanding your business, goals, audience, and competitors to shape a solid foundation.",
              },
              {
                title: "2. Planning",
                desc: "We define project scope, create wireframes, and outline a roadmap for smooth development.",
              },
              {
                title: "3. Design",
                desc: "Crafting beautiful, intuitive UI/UX designs that align with your brand identity and resonate with users.",
              },
              {
                title: "4. Development",
                desc: "Building responsive, SEO-optimized websites using modern technologies like HTML, CSS, JavaScript, and CMS platforms.",
              },
              {
                title: "5. Testing & QA",
                desc: "Rigorous testing across devices and browsers to ensure functionality, speed, and security.",
              },
              {
                title: "6. Launch & Support",
                desc: "We deploy your site and provide ongoing support, maintenance, and improvements as needed.",
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

      {/* Testimonials Section */}
      {/* <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <blockquote className="text-xl italic text-gray-700">
            "Since partnering with AKDK Digital, our website traffic has
            increased by 70%, and our online inquiries have doubled."
          </blockquote>
          <p className="mt-4 text-gray-600">— Jane Doe, CEO of Acme Corp</p>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-red-600 py-12">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Online Presence?
          </h2>
          <p className="mb-6">
            Contact us today to discuss your project and discover how we can
            help your business grow.
          </p>
          <a
            href="/contact"
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}

export default WebsiteDevelopmentServicePage;

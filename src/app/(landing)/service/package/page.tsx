import Image from "next/image";
import Link from "next/link";
import React from "react";

function PackageServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] opacity-85 bg-slate-200 z-0">
        <Image
          className="object-cover w-full h-full absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
          src="/package.jpg"
          alt="Package Service"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black opacity-50 -z-10" />
        <div className="relative max-w-4xl mx-auto flex flex-col justify-center h-full px-6 lg:px-8">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold">
            Tailored Service Packages – On Request
          </h1>
          <a
            href="/service"
            className="text-white hover:text-red-500 font-semibold text-xl tracking-wider mb-2"
          >
            ← Back to Services
          </a>
        </div>
      </section>

      {/* Intro Detail */}
      <section className="px-4 sm:px-6 lg:px-8 my-16">
        <h2 className="text-3xl text-center font-semibold mb-8">
          Scalable & Customized Solutions for Every Business
        </h2>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-base text-[#4B4B4B] leading-relaxed">
            Whether you're a startup, an established business, or a growing
            enterprise, we offer tailored service packages that suit your goals
            and budget. Our custom offerings ensure that you get exactly what
            you need — no fluff, no extra cost.
          </p>
        </div>
      </section>

      {/* Features/Benefits */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Fully Customizable Plans",
            "Scalable Solutions",
            "Timely Delivery",
            "Dedicated Account Manager",
            "Analytics & Reporting",
            "After-Sales Support",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#333] mb-2">
                {feature}
              </h3>
              <p className="text-sm text-[#666]">
                {feature === "Fully Customizable Plans"
                  ? "Choose exactly what you need — design, development, marketing, or all."
                  : feature === "Scalable Solutions"
                  ? "Your solution grows as your business grows — simple as that."
                  : feature === "Timely Delivery"
                  ? "We respect deadlines — our workflow ensures swift execution."
                  : feature === "Dedicated Account Manager"
                  ? "A single point of contact who understands your brand and goals."
                  : feature === "Analytics & Reporting"
                  ? "Track your performance and ROI through detailed reports."
                  : "We don’t disappear after project handoff — we stay for ongoing help."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Process
        </h2>
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-4 text-center">
          {[
            {
              step: "1",
              title: "Consultation",
              desc: "We understand your business, goals, and requirements.",
            },
            {
              step: "2",
              title: "Planning",
              desc: "We craft a tailored plan, timeline, and package just for you.",
            },
            {
              step: "3",
              title: "Execution",
              desc: "Our team executes with precision using the latest tools & tech.",
            },
            {
              step: "4",
              title: "Delivery & Support",
              desc: "Project handoff + ongoing support whenever needed.",
            },
          ].map((item, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-[#558B2F] mb-2">
                {item.step}
              </div>
              <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What Clients Say
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Amit Kumar",
              feedback:
                "The team provided us with a comprehensive package perfectly suited to our startup needs. They were responsive and professional throughout.",
            },
            {
              name: "Priya Mehra",
              feedback:
                "We saw a major performance boost and higher engagement after taking their custom web development plan. Highly recommended!",
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 border-l-4 border-[#558B2F]"
            >
              <p className="text-sm italic text-gray-700 mb-4">
                “{testimonial.feedback}”
              </p>
              <p className="text-right text-sm font-semibold text-[#333]">
                – {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-red-600 text-white">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready to Create a Custom Plan for Your Business?
        </h2>
        <p className="mb-6 text-lg">
          Reach out to us now and get a personalized package — no obligations.
        </p>
        <Link
          href="/contact-us"
          className="bg-white text-red-500 py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}

export default PackageServicePage;

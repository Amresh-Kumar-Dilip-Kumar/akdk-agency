import Image from "next/image";
import React from "react";

function SeoServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] opacity-85 bg-slate-200 z-0">
        <Image
          className="object-cover w-full h-full absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
          src="/seo.jpg"
          alt="SEO Service"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black opacity-50 -z-10" />
        <div className="relative max-w-4xl mx-auto flex flex-col justify-center h-full px-6 lg:px-8">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold">
            Search Engine Optimization (SEO)
          </h1>
          <a
            href="/service"
            className=" text-white hover:text-red-500 font-semibold text-xl tracking-wider mb-2"
          >
            Back to Services
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 sm:px-6 lg:px-8 my-16">
        <h2 className="text-3xl text-center font-semibold mb-8">
          Drive Organic Traffic & Increase Visibility
        </h2>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-base text-[#4B4B4B] max-w-3xl mx-auto">
            Our SEO services are designed to elevate your website’s position on
            search engines like Google. By leveraging data-driven insights,
            keyword strategies, and content refinement, we help your business
            attract relevant visitors and convert them into customers. From
            technical audits to on-page optimization, we cover every aspect
            needed to dominate the search results.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-10">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Technical SEO",
              desc: "We ensure your website is structured for crawling and indexing, improving speed, mobile usability, and performance.",
            },
            {
              title: "Keyword Research",
              desc: "In-depth analysis of relevant search terms your audience uses—guiding content creation and strategy.",
            },
            {
              title: "On-Page Optimization",
              desc: "Optimizing meta titles, descriptions, headers, and content to boost search engine rankings.",
            },
            {
              title: "Content Strategy",
              desc: "Creating engaging, search-optimized content that resonates with users and drives conversions.",
            },
            {
              title: "Local SEO",
              desc: "Targeting customers in your local area through Google My Business, reviews, and local keyword targeting.",
            },
            {
              title: "Link Building",
              desc: "Earning high-quality backlinks to build authority and trust in search engines’ eyes.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-[#333] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Partner With Us?</h2>
          <p className="text-base text-[#4B4B4B] mb-8">
            We go beyond rankings. Our team crafts tailored strategies to meet
            your business goals, whether it's lead generation, eCommerce growth,
            or brand awareness. With constant monitoring, monthly reporting, and
            adaptive planning, we keep your SEO efforts ahead of the curve.
          </p>
          <ul className="grid gap-4 md:grid-cols-2 text-left max-w-3xl mx-auto text-[#4B4B4B]">
            <li>✓ Transparent Reporting & Insights</li>
            <li>✓ Industry Best Practices</li>
            <li>✓ Dedicated SEO Experts</li>
            <li>✓ Proven Track Record of Results</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-500 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Grow with SEO?
          </h2>
          <p className="text-white mb-6">
            Let us help you reach your digital goals. Request a free
            consultation today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}

export default SeoServicePage;

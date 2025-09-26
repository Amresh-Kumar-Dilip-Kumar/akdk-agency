import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 prose prose-lg mt-24 ">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Green Agri Corp – Detailed Project Insights
      </h1>

      {/* Intro */}
      <p>
        🌱 <strong>Green Agri Corp</strong> is a professional platform dedicated
        to the <strong>import and export of premium quality rice</strong>. It
        serves as a global trade bridge, connecting buyers and suppliers with a
        strong focus on trust, transparency, and efficiency.
      </p>

      <Image
        src="/project-detail/greenagri-1.png"
        alt="GreenAgri Overview"
        width={700}
        height={450}
        className="mx-auto mt-8 rounded-lg"
      />

      {/* About Section */}
      <h2 className="text-2xl font-semibold mt-12">About Green Agri Corp</h2>
      <p>
        Green Agri Corp is more than just a trading platform — it represents a
        commitment to delivering <strong>premium rice varieties</strong> to
        global markets. By integrating modern digital solutions, it simplifies
        trade operations and ensures product quality.
      </p>

      <ul>
        <li>Dedicated to global rice trading</li>
        <li>Emphasis on trust, transparency, and efficiency</li>
        <li>Supports both buyers and suppliers worldwide</li>
      </ul>

      {/* Quote Section */}
      <h2 className="text-2xl font-semibold mt-12">Quote Request System</h2>
      <Image
        src="/project-detail/greenagri-2.png"
        alt="GreenAgri Quote System"
        width={700}
        height={450}
        className="mx-auto mt-6 rounded-lg"
      />
      <p className="mt-6">
        The <strong>Request Quote</strong> option in the Green Agri Corp navbar
        allows customers to send quick trade inquiries for rice imports and
        exports.
      </p>
      <ul>
        <li>Quick access via the main navigation</li>
        <li>Personalized trade quotes based on client needs</li>
        <li>Seamless communication for business inquiries</li>
      </ul>

      {/* Admin Dashboard Section */}
      <h2 className="text-2xl font-semibold mt-12">Admin Dashboard</h2>
      <Image
        src="/project-detail/greenagri-3.png"
        alt="GreenAgri Admin Dashboard"
        width={700}
        height={450}
        className="mx-auto mt-6 rounded-lg"
      />
      <p className="mt-6">
        The <strong>Admin Dashboard</strong> is the control center of Green Agri
        Corp, designed to give administrators a centralized view of all
        operations. It ensures smooth international rice trade management.
      </p>
      <ul>
        <li>📊 Real-time analytics and trade reports</li>
        <li>🏬 Storage and inventory tracking</li>
        <li>📇 Centralized client contact information</li>
        <li>🔒 Role-based access and data security</li>
      </ul>


      <h2 className="text-2xl font-semibold mt-12">Analytics Page</h2>


      <Image
        src="/project-detail/greenagri-4.png"
        alt="GreenAgri Admin Dashboard"
        width={700}
        height={450}
        className="mx-auto mt-6 rounded-lg"
      />

<ul className="max-w-full mx-auto mt-4  text-gray-700">
  <li className="flex items-start space-x-3 ">
    <span className="text-2xl">📈</span>
    <span>
      <strong>Page Views & Unique Visitors</strong> – Track overall traffic and engagement trends.
    </span>
  </li>
  <li className="flex items-start space-x-3 ">
    <span className="text-2xl">🌐</span>
    <span>
      <strong>Traffic Sources</strong> – Identify whether users come from search engines, social media, referrals, or direct visits.
    </span>
  </li>
  <li className="flex items-start space-x-3  ">
    <span className="text-2xl">📱</span>
    <span>
      <strong>Device & Platform Insights</strong> – Breakdown of desktop, mobile, and tablet usage.
    </span>
  </li>
  <li className="flex items-start space-x-3 ">
    <span className="text-2xl">📍</span>
    <span>
      <strong>Location Analytics</strong> – See where visitors are coming from (country/city wise).
    </span>
  </li>
  <li className="flex items-start space-x-3 ">
    <span className="text-2xl">⏱️</span>
    <span>
      <strong>Engagement Metrics</strong> – Monitor average session duration, bounce rate, and top visited pages.
    </span>
  </li>
</ul>

<h2 className="text-2xl font-semibold mt-12">Contact Page</h2>


     <Image
        src="/project-detail/greenagri-5.png"
        alt="GreenAgri Admin Dashboard"
        width={700}
        height={450}
        className="mx-auto mt-6 rounded-lg"
      />



     <p className="mt-6">
      View all messages submitted through the <strong>Green Agri contact form</strong>. 
       Track inquiries, business requests, and customer feedback in one place, with options to search, filter, and manage submissions efficiently.
     </p>






      {/* Closing */}
      <h2 className="text-2xl font-semibold mt-12">Why Green Agri Corp?</h2>
      <p>
        With its focus on <strong>premium rice trading</strong>, Green Agri Corp
        delivers a modern, transparent, and scalable solution for international
        agriculture. From quote requests to analytics and inventory tracking,
        every feature is designed to empower smooth and sustainable trade
        operations.
      </p>
    </article>
  );
}

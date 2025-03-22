import React from "react";
import { FaUsers, FaUserTie, FaStar } from "react-icons/fa";

export default function Mission() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-6xl font-bold text-center text-gray-900 tracking-tight leading-tight">
          Discover <span className="text-red-600">AKDK Digital</span>
        </h2>

        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
          We build innovative web solutions that drive business success. Our
          mission, values, and expert team make us your ideal digital partner.
        </p>

        {/* Mission Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              icon: <FaStar className="text-5xl text-red-600" />,
              title: "Our Mission",
              text: "We strive to provide exceptional web app services that exceed client expectations. Our focus is on innovation and quality, ensuring every project is a success.",
            },
            {
              icon: <FaUsers className="text-5xl text-red-600" />,
              title: "Our Values",
              text: "We prioritize quality, collaboration, and innovation. By working closely with clients, we ensure their vision is realized while leveraging the latest technologies.",
            },
            {
              icon: <FaUserTie className="text-5xl text-red-600" />,
              title: "Meet Our Team",
              text: "Our talented team of developers and designers collaborates to create outstanding web solutions, ensuring seamless functionality and beautiful designs.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl border border-gray-200 transition-transform hover:scale-105"
            >
              {item.icon}
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

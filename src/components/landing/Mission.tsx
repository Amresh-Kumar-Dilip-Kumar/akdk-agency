import React from "react";
import { FaUsers, FaUserTie, FaStar } from "react-icons/fa";
const data = [
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
];
export default function Mission() {
  return (
    <section className="relative bg-white z-0 py-24">
      <div className="w-full  mx-auto px-0 lg:px-12 z-0 ">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-6xl font-bold text-center text-gray-900 tracking-tight leading-tight">
          {/* Discover <span className="text-red-600">AKDK Digital</span> */}
        </h2>

        {/* <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
          We build innovative web solutions that drive business success. Our
          mission, values, and expert team make us your ideal digital partner.
        </p> */}

        {/* Mission Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 px-6 sm:px-20 md:px-40 first:grid-cols-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl border border-gray-200 transition-transform hover:scale-105
              hover:z-30
              overflow-hidden
              relative z-0
              transform duration-500 ease-in-out 
              group
            "
            >
              <div
                className="absolute bg-white z-10
               bg-gradient-to-tr from-red-100 to-red-50
              opacity-70
              group-hover:bg-gradient-to-bl 
              group-hover:rotate-0
              group-hover:top-0/
              group-hover:left-0/
              group-hover:right-0/
              group-hover:bottom-0/
              group-hover:scale-[2]
              group-hover:translate-x-0
              group-hover:translate-y-0
              group-hover:opacity-50
              group-hover:w-full
              group-hover:h-full
              group-hover:rounded-none
              transition-all duration-1000 ease-in-out
             top-0 left-0
             rounded-full
              mx-auto
              transform -translate-x-1/2 -translate-y-1/2
              w-20 h-20
              "
              ></div>
              <div
                className="absolute bg-white z-20
                bg-gradient-to-br from-green-100 to-green-500
                opacity-70
                group-hover:bg-gradient-to-bl
                group-hover:rotate-360
                group-hover:top-0/
                group-hover:left-0/
                group-hover:right-0/
                group-hover:bottom-0/
                group-hover:translate-x-0
                group-hover:translate-y-0
                group-hover:opacity-0
                group-hover:w-full
                group-hover:z-0
                group-hover:h-full

                group-hover:rounded-none

                transition-all duration-1000 ease-in-out

                top-0 left-0

                rounded-full

                mx-auto


                transform -translate-x-1/2 -translate-y-1/2

                w-10 h-10
                "
              ></div>
              <div
                className="absolute bg-yellow-400 z-0
                opacity-50
                group-hover:opacity-0
                group-hover:bg-gradient-to-bl
                group-hover:rotate-0
                group-hover:top-0/
                group-hover:left-0/
                group-hover:right-0/
                group-hover:bottom-0/
                group-hover:scale-[2]
                group-hover:translate-x-0
                group-hover:translate-y-0
                transition-all duration-1000 ease-in-out
                top-0 left-0
                rounded-full
                mx-auto
                transform -translate-x-1/2 -translate-y-1/2
                w-24 h-24
              "
              />
              <div className="relative z-10 flex flex-col items-center justify-center h-full ">
                <div className="p-4  border rounded-full shadow-md">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed ">
                  {item.text}
                </p>
                {/* <button className="mt-6 px-6 py-2 text-white bg-red-600 hover:bg-violet-600 rounded-full shadow-md transition-all duration-300">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

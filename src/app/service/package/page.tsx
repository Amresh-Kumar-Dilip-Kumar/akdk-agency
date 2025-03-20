import Image from "next/image";
import React from "react";

function PackageServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] opacity-85 bg-slate-200 z-0">
        <Image
          className="object-cover w-full h-full absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
          src="/package.jpg"
          alt="Production"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black opacity-50 -z-10" />
        <div className="relative max-w-4xl mx-auto flex flex-col justify-center h-full px-6 lg:px-8">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold">
            Package Starts at  On Request
          </h1>
          <a
            href="/service"
            className=" text-white hover:text-orange-500 font-semibold text-xl tracking-wider mb-2"
          >
            Back to Services
          </a>
          {/* <p className="text-white text-lg">
            With Advanced Technology & Equipment
          </p> */}
        </div>
      </section>

      {/* Detail Section */}
      <section className="px-4 sm:px-6 lg:px-8 my-16">
        <h2 className="text-3xl text-center font-semibold mb-8">
          Package Starts at  On Request
        </h2>
        <div className=" max-w-7xl text-center mx-auto">
          <p className="text-base text-[#4B4B4B]">
            Recognizing that your online presence is essential for success in
            the digital age, we provide unparalleled insight into the
            functionality and performance of your website or application. Our
            expert analysis helps identify areas for improvement, ensuring a
            seamless user experience, faster load times, and better engagement.
            With data-driven strategies and cutting-edge tools, we optimize your
            digital platforms to enhance visibility, boost conversions, and keep
            you ahead of the competition.
          </p>
        </div>
      </section>

      {/* Production Facilities */}
      {/* <h2 className="text-3xl text-center mt-16 font-semibold">
        Production Facilities
      </h2>
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mt-8 gap-12 py-12 lg:gap-16 items-center">
          
          <div className="max-w-xl space-y-4 text-center lg:text-left">
            <h2 className="text-[#558B2F] text-lg md:text-xl lg:text-2xl font-semibold">
              Process
            </h2>
            <p className="text-base text-[#4B4B4B]">
              Our rice mill units are located close to paddy markets (mandis).
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default PackageServicePage;

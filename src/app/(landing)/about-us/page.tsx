import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/landing/page-header2";
import Mission from "@/components/landing/Mission";

const profiles = [
  {
    name: "Utsav Soni",
    role: "Frontend Developer",
    description:
      "As a Frontend Developer, I specialize in crafting responsive and user-friendly interfaces that enhance user experience.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    image: "/profile/utsav.png",
  },
  {
    name: "Nikhil kumar",
    role: "Founder & CEO",
    description:
      "As the Founder & CEO, I am dedicated to driving innovation and delivering impactful web solutions for our clients.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    image: "/profile/nikhil.png",
  },
];

export default function AboutUs() {
  return (
    <section className="text-gray-900">
      {/* Section 1: Our Journey & Mission */}
      <PageHeader
        heading={<> Our Journey & Mission</>}
        description={
          <>
            Founded in 2020,{" "}
            <span className="font-semibold text-slate-800">AKDK Digital</span>{" "}
            empowers businesses with innovative web solutions that enhance
            functionality and drive engagement. Our mission is to deliver
            quality and innovation.
          </>
        }
      />
      <Mission />
      {/* Section 2: Our Talented Team */}
      <div className="max-w-4xl mx-auto text-center px-6 py-40">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          Our Talented Team
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Meet the skilled professionals behind{" "}
          <span className="font-semibold text-gray-800">AKDK Digital</span>’s
          success.
        </p>
      </div>
      <div className="w-full max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 px-6 sm:px-20 md:px-40 pb-16 items-center justify-center">
        <ProfileTemplate profile={profiles[0]} />
        <ProfileTemplate profile={profiles[1]} />
      </div>

      {/* <ProfileSection /> */}
      {/* Section 3: Get in Touch */}
      <div className="max-w-4xl mx-auto text-center px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          Get in Touch
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
          Reach out to our team for any inquiries or project discussions.
        </p>
        <Link
          href="/contact-us"
          className="rounded-md px-5 py-2.5 text-red-500 hover:bg-red-600 hover:text-white text-sm font-normal shadow border border-red-500"
        >
          Contact US
        </Link>
      </div>
    </section>
  );
}

function ProfileTemplate({ profile }: { profile: (typeof profiles)[number] }) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start space-x-0 lg:space-x-6 text-center lg:text-left">
      <Image
        src={profile.image}
        alt={profile.name}
        width={144}
        height={144}
        className="w-24 h-24 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-red-500"
      />
      <div className="space-y-3 max-w-3xl lg:max-w-xl md:max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-900">{profile.name}</h2>
        <p className="text-lg text-gray-600">{profile.role}</p>
        <p className="text-gray-500">{profile.description}</p>
        <div className="flex justify-center lg:justify-start space-x-4 mt-2 text-xl text-gray-500">
          <Link
            href={profile.linkedin}
            className="hover:text-red-500 transition-all"
          >
            <FaLinkedin />
          </Link>
          <Link
            href={profile.github}
            className="hover:text-red-500 transition-all"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}

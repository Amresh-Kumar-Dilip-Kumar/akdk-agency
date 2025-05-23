"use client";

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Newsletter from "./Newsletter"; // Adjust the path as needed

export default function Footer() {
  return (
    <footer className=" text-gray-900 py-14 px-6 border-t border-gray-300 ">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid  text-center grid-cols-1 md:grid-cols-4   gap-10">
          {/* Explore */}
          <div>
            <h3 className="text-xl font-semibold text-[#000000]">Explore</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-red-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-red-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/project"
                  className="hover:text-orange-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold ext-[#000000]">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-red-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold text-[#000000]">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" passHref>
                  <span className="hover:text-red-600 transition-colors">
                    Portfolio
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            {/* <h3 className="text-xl font-semibold text-[#000000]">
              Stay Updated
            </h3>
            <p className="mt-4 text-gray-600">
              Subscribe to our newsletter for the latest updates and insights
              from{" "}
              <span className="text-black font-semibold">AKDK Digital.</span>
            </p>
            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 border border-gray-600 rounded-l-md w-full outline-none placeholder-gray-400 text-white"
              />
              <button className="bg-red-600 px-5 py-3 rounded-r-md text-white text-sm font-semibold hover:bg-red-500 transition-all">
                Subscribe
              </button>
            </div> */}

            <Newsletter />
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-60000 text-sm  *:flex-1">
          <p>© 2025 AKDK Digital. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0 justify-center">
            <Link href="/tmcd" className="hover:text-red-600 transition-colors">
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-red-600 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0 text-2xl justify-end">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer text-gray-600 hover:text-orange-400 transition-all" />
            </Link>
            <Link
              href="https://www.instagram.com/akdk_agency?igsh=d3d0dGM5cDdlNXo3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer text-gray-600 hover:text-orange-400 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

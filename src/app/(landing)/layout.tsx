import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // const isHomePage;
  return (
    <div className="w-screen overflow-hidden">
      {/* <div className="relative w-full flex items-center justify-center "> */}
      <Navbar />

      <div className="p-10"></div>

      {/* </div> */}
      {children}
      <Footer />
    </div>
  );
}

import Image from "next/image";
import React from "react";

export const PageHeader = ({
  heading,
  description,
}: {
  heading: React.ReactNode;
  description: React.ReactNode;
}) => {
  return (
    <div className="relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 z-20" />

      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="AKDK Digital office background"
          fill
          className="object-cover object-center opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-500 text-xs font-bold uppercase tracking-[0.25em] mb-6">
              AKDK Digital
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              {heading}
            </h1>
            <div className="w-16 h-1 bg-red-600 mt-6" />
          </div>

          <div className="border-l border-white/10 pl-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

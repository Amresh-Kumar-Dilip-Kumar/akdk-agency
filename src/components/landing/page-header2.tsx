import Image from "next/image";

export const PageHeader = ({
  heading,
  description,
}: {
  heading: React.ReactNode;
  description: React.ReactNode;
}) => {
  return (
    <div className="relative min-h-[70vh] lg:py-24 lg:px-20 py-20 px-5 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.webp"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="-z-30 scale-105"
        // style={{
        //   filter: "brightness(0.4) contrast(1.2) saturate(1.1)",
        // }}
      />

      {/* Multiple Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-red-900/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-blue-900/20"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex xl:flex-row flex-col xl:items-center min-h-[50vh]">
        <div className="xl:flex-1 xl:pr-12">
          {/* Decorative Line */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-4"></div>
            <span className="text-blue-300 text-sm font-medium tracking-wider uppercase">
              Premium Agency
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              {heading}
            </span>
            {/* Decorative accent */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mt-4 rounded-full"></div>
          </h1>
        </div>

        <div className="xl:flex-1 xl:pl-8">
          <div className="relative">
            {/* Background card effect */}
            {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 -m-6"></div> */}
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light relative z-10 p-6">
              {description}
            </p>

            {/* Call-to-action elements */}
            <div className="flex items-center mt-4 space-x-6 relative z-10 px-6">
              <div className="flex items-center space-x-2 text-blue-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Professional Excellence
                </span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                <span className="text-sm font-medium">Creative Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

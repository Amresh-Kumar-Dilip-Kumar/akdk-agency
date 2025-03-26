import Image from "next/image";
export const PageHeader = ({
  heading,
  description,
}: {
  heading: React.ReactNode;
  description: React.ReactNode;
}) => {
  return (
    <div className="lg:py-16 lg:px-20 py-20 px-5 /bg-gradient-to-br from-red-600 to-red-400 relative z-0 backdrop:blur-lg">
      <div className="absolute inset-0 bg-red-100 opacity-50 -z-10"></div>
      <Image
        src="/hero.webp"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="
              -z-20 backdrop-blur-sm opacity-30 
            "
        style={{
          filter:
            "grayscale(100%) sepia(100%) hue-rotate(-50deg) saturate(500%)",
        }}
      />
      <div className="max-w-7xl mx-auto flex *:flex-1 xl:flex-row flex-col">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6  relative z-0">
          <div className="bg-green-500 w-32 p-2 absolute -z-10 md:my-8 md:-mx-4 my-6 -mx-1" />
          <div className="bg-slate-100/30 w-40 p-2 absolute -z-10 md:my-7 md:-mx-6 my-5 -mx-3" />
          {heading}
        </h1>
        <p className="text-lg sm:text-xl text-slate-900  tracking-wide font-extralight">
          {description}
        </p>
      </div>
    </div>
  );
};

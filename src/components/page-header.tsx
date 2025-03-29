export const PageHeader = ({
  heading,
  description: description,
}: {
  heading: React.ReactNode;
  description: React.ReactNode;
}) => {
  return (
    <div className="lg:p-28 p-12  bg-gradient-to-br from-red-600 to-red-400 ">
      <div className="max-w-7xl mx-auto flex *:flex-1 xl:flex-row flex-col">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 ">
          <div className="bg-green-200 w-1 p-1" />
          {heading}
        </h1>
        <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-extralight">
          {description}
        </p>
      </div>
    </div>
  );
};

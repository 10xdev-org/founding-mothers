// components/WelcomeBanner.js

const WelcomeBanner = () => {
  return (
    <div className="h-[40vh] flex flex-col items-start justify-end px-10 pb-6 bg-transparent text-white">
      <h1 className="text-lg md:text-xl mb-2">Welcome to</h1>
      <h2 className="text-5xl md:text-7xl font-bold mb-2">Founding Mothers</h2>
      <p className="text-lg md:text-xl italic text-gray-300 max-w-lg p-3 rounded bg-black bg-opacity-30">
        Explore our curated collection of inspiring stories.
      </p>
    </div>
  );
};

export default WelcomeBanner;

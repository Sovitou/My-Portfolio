import { HERO_CONTENT } from "../constants";
import homepage from "../Asset/homepage-pic.svg";
const Hero = () => {
  return (
    // <div className="relative bg-gradient-to-b from-white to-purple-100 pb-16 lg:pb-32 border-b border-neutral-300">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-12 text-center lg:text-left ">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-neutral-900">
            Khem Sovitou
          </h1>
          <span
            className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600 
              pt-2 bg-clip-text text-transparent text-3xl lg:text-4xl font-medium"
          >
            Full Stack Developer
          </span>
          <p className="mt-6  max-w-lg mx-auto lg:mx-0 text-neutral-700 font-light text-lg">
            {HERO_CONTENT}
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 px-12 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src={homepage}
            alt="profile"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    // </div>
  );
};

export default Hero;

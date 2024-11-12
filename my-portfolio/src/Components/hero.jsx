import { HERO_CONTENT } from "../constants";
import homepage from "../Asset/homepage-pic.svg";
import { motion, useTransform, animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const myName = "KHEM SOVITOU";
  const count = useMotionValue(0);
  const displayName = useTransform(count, (lastest) =>
    myName.slice(0, Math.round(lastest))
  );

  useEffect(() => {
    const controls = animate(count, myName.length, {
      type: "tween",
      duration: 3,
      repeat: true,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <div className="container mx-auto flex flex-wrap items-center">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 px-12 text-center lg:text-left ">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-neutral-900">
          <motion.span
            className="bg-gradient-to-r from-green-500 via-slate-500 to-purple-700
              pt-2 bg-clip-text text-transparent text-6xl"
          >
            {displayName}
          </motion.span>
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

        <button
          type="button"
          className="shadow hover:shadow-lg mt-6 px-5 py-2.5 text-sm font-medium text-white bg-gray-500 hover:bg-gray-700 rounded-lg text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
        >
          Resume
        </button>
      </div>

      {/* Right Image */}

      <motion.div
        animate={{ x: 0 }}
        initial={{ x: -100 }}
        transition={{
          yoyo: Infinity,
          duration: 2,
        }}
        className="w-full lg:w-1/2 px-12 mt-10 lg:mt-0 flex justify-center lg:justify-end"
      >
        <img
          src={homepage}
          alt="profile"
          className="w-full max-w-md lg:max-w-lg"
        />
      </motion.div>
    </div>
    // </div>
  );
};

export default Hero;

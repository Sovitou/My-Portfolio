import { HERO_CONTENT } from "../constants";
import homepage from "../Asset/homepage-pic.svg";
import { motion, useTransform, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import resume from "../Asset/resume.pdf";

const Hero = () => {
  const myName = "KHEM SOVITOU";
  const myRole = "Full-Stack Developer";
  const count = useMotionValue(0);
  const displayName = useTransform(count, (lastest) =>
    myName.slice(0, Math.round(lastest))
  );
  const displayRole = useTransform(count, (lastest) =>
    myRole.slice(0, Math.round(lastest))
  );

  const [showModal, setShowModal] = useState(false);

  const handleResumeClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const controls = animate(count, myName.length, {
      type: "tween",
      duration: 5,
      repeat: 3,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  useEffect(() => {
    const controls = animate(count, myRole.length, {
      type: "tween",
      duration: 4,
      repeat: 3,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <div className="border-b border-neutral-50 pb-12 container mx-auto flex flex-wrap items-center">
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
        <motion.span
          className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600 
            pt-2 bg-clip-text text-transparent text-3xl lg:text-4xl font-medium"
        >
          {displayRole}
        </motion.span>
        <p className="mt-6  max-w-lg mx-auto lg:mx-0 text-neutral-700 font-light text-lg">
          {HERO_CONTENT}
        </p>

        {/* Resume Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          className="shadow hover:shadow-lg mt-6 px-5 py-2.5 text-sm font-medium text-white bg-gray-500 hover:bg-gray-700 rounded-lg text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          onClick={handleResumeClick}
        >
          View Resume
        </motion.button>
      </div>

      {/* Right Image */}
      <motion.div
        animate={{ x: [0, -25, 0] }}
        initial={{ x: -25 }}
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          duration: 7,
        }}
        className="w-full lg:w-1/2 px-12 mt-10 lg:mt-0 flex justify-center lg:justify-end"
      >
        <img
          src={homepage}
          alt="profile"
          className="w-full max-w-md lg:max-w-lg"
        />
      </motion.div>

      {/* Resume Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white font-bold text-xl"
            >
              X
            </button>
            <iframe src={resume} className="w-full h-full" title="Resume" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

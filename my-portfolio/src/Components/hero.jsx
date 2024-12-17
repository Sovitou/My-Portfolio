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
    myName.slice(0, Math.round(lastest)),
  );
  const displayRole = useTransform(count, (lastest) =>
    myRole.slice(0, Math.round(lastest)),
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
    <div className="container mx-auto flex flex-wrap items-center border border-black pb-12">
      {/* Left Content */}
      <div className="w-full px-12 text-center lg:w-1/2 lg:text-left">
        <h1 className="text-5xl font-bold leading-tight text-neutral-900 lg:text-7xl">
          <motion.span className="bg-gradient-to-r from-green-500 via-slate-500 to-purple-700 bg-clip-text pt-2 text-6xl text-transparent">
            {displayName}
          </motion.span>
        </h1>
        <motion.span className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600 bg-clip-text pt-2 text-3xl font-medium text-transparent lg:text-4xl">
          {displayRole}
        </motion.span>
        <p className="mx-auto mt-6 max-w-lg text-lg font-light text-neutral-700 lg:mx-0">
          {HERO_CONTENT}
        </p>

        {/* Resume Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          className="mt-6 rounded-lg bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow hover:bg-gray-700 hover:shadow-lg dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
        className="mt-10 flex w-full justify-center px-12 lg:mt-0 lg:w-1/2 lg:justify-end"
      >
        <img
          src={homepage}
          alt="profile"
          className="w-full max-w-md lg:max-w-lg"
        />
      </motion.div>

      {/* Resume Modal */}
      {showModal && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="h-3/4 w-3/4 rounded-lg bg-white p-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-2 top-2 text-xl font-bold text-white"
            >
              X
            </button>
            <iframe src={resume} className="h-full w-full" title="Resume" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

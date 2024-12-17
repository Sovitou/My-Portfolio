import Aboutmepic from "../Asset/About me.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <div className="border border-black pb-12">
      <motion.h2
        className="my-12 text-center text-4xl font-semibold text-gray-800"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        ABOUT ME
      </motion.h2>
      {/* About me picture */}
      <div className="flex flex-wrap items-center justify-center px-6 lg:justify-between lg:px-16">
        <motion.div
          className="w-full p-4 lg:w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
        >
          <div className="flex justify-center lg:justify-start">
            <motion.img
              src={Aboutmepic}
              alt="about me"
              className="w-84 h-96 rounded-3xl shadow-xl transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.25 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Right Text */}
        <div className="w-full p-4 lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="mx-auto mt-6 max-w-lg text-lg font-light text-neutral-700 lg:mx-0"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: -50, x: 100 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

import Aboutmepic from "../Asset/About me.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <div className="border border-neutral-50 pb-12">
      <motion.h2
        className="my-12 text-center text-4xl font-semibold text-gray-800"
        whileInView={{ opacity: 1, x: 0 }} // Fade in when in view
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        ABOUT ME
      </motion.h2>
      <div className="flex flex-wrap justify-center lg:justify-between items-center px-6 lg:px-16">
        <motion.div
          className="w-full lg:w-1/2 p-4"
          whileInView={{ opacity: 1, x: 0 }} // Apply animation when in view
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
        >
          <div className="flex justify-center lg:justify-start">
            <motion.img
              src={Aboutmepic}
              alt="about me"
              className="w-84 h-96 shadow-xl rounded-3xl transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.25 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2 p-4">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="mt-6 max-w-lg mx-auto lg:mx-0 text-neutral-700 font-light text-lg"
              whileInView={{ opacity: 1, x: 0 }} // Apply animation when in view
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

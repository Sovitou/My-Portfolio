import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-50 pb-12">
      <motion.h2
        className="my-20 text-center text-4xl font-semibold"
        whileInView={{ opacity: 1, x: 0 }} // Fade in when in view
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
      >
        EXPERIENCE
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap justify-center px-4"
            whileInView={{ opacity: 1, x: 0 }} // Apply animation when in view
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full p-2 font-semibold sm:w-1/3 md:w-1/4 lg:w-1/4">
              <motion.p
                className="mb-2 text-sm text-neutral-700"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                {experience.year}
              </motion.p>
            </div>
            <div className="w-full sm:w-2/3 md:w-3/4 lg:w-3/4">
              <motion.h6
                className="mb-2 font-semibold"
                whileInView={{ opacity: 1, x: 0 }} 
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                {experience.role} -{" "}
                <span className="font-semibold text-blue-600">
                  {experience.company}
                </span>
              </motion.h6>
              <motion.p
                className="mb-4 text-neutral-500"
                whileInView={{ opacity: 1, x: 0 }} 
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
              >
                {experience.description}
              </motion.p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="mr-2 mt-4 rounded bg-slate-400 px-2 py-1 text-sm font-medium text-white"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

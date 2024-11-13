import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-50 pb-12">
      <h2 className="my-16 text-center text-4xl font-semibold text-gray-800">
        Experience
      </h2>
      <div className="px-6 lg:px-16">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-10 flex flex-wrap lg:justify-between items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-full lg:w-1/4 p-4">
              <motion.p
                className="text-sm font-medium text-neutral-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {experience.year}
              </motion.p>
            </div>
            <div className="w-full lg:w-3/4 p-4">
              <motion.h6
                className="mb-2 text-xl font-semibold text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {experience.role} -{" "}
                <span className="font-semibold text-blue-600">
                  {experience.company}
                </span>
              </motion.h6>
              <motion.p
                className="mb-4 text-neutral-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {experience.description}
              </motion.p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="mr-3 mb-2 rounded-lg bg-slate-500 px-3 py-1 text-sm font-medium text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
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

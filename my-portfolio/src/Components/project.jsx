import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-50 pb-12">
      <motion.h2
        className="my-16 text-center text-4xl font-semibold text-gray-800"
        whileInView={{ opacity: 1, x: 0 }} // Fade in when in view
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
        PROJECTS
      </motion.h2>
      <div className="px-6 lg:px-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-10 flex flex-wrap lg:justify-between items-center"
            whileInView={{ opacity: 1, x: 0 }} // Apply animation when in view
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div
              className="w-full lg:w-1/3 p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.img
                  className="rounded-2xl border-4 border-neutral-100 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                  src={project.image}
                  alt={project.title}
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </a>
            </motion.div>
            <div className="w-full lg:w-2/3 p-4">
              <motion.h4
                className="mb-2 text-xl font-semibold text-gray-800"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </motion.h4>
              <motion.p
                className="mb-4 text-neutral-600"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {project.description}
              </motion.p>
              <div className="flex flex-wrap">
                {project.technologies.map((technology, index) => (
                  <motion.span
                    key={index}
                    className="mr-3 mb-2 rounded-lg bg-slate-500 px-3 py-1 text-sm font-medium text-white"
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {technology}
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

export default Project;

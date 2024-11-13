import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { motion } from "framer-motion";

const Technology = () => {
  return (
    <div className="border-b border-neutral-50 pb-12">
      <h2 className="my-20 text-center text-4xl font-semibold">TECHNOLOGY</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="rounded-2xl border-4 border-neutral-100 p-4"
          animate={{
            y: ["0", "-30px", "0"], // Move higher and lower
          }}
          transition={{
            duration: 3, // Increased duration
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <FaHtml5 className="text-7xl text-[#E34F26]" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-100 p-4"
          animate={{
            y: ["0", "-30px", "0"],
          }}
          transition={{
            duration: 3, // Increased duration
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <FaCss3Alt className="text-7xl text-[#1572B6]" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-100 p-4"
          animate={{
            y: ["0", "-30px", "0"],
          }}
          transition={{
            duration: 3, // Increased duration
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <FaSquareJs className="text-7xl text-[#F7DF1E]" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-100 p-4"
          animate={{
            y: ["0", "-30px", "0"],
          }}
          transition={{
            duration: 3, // Increased duration
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          <FaReact className="text-7xl text-[#61DAFB]" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-100 p-4"
          animate={{
            y: ["0", "-30px", "0"],
          }}
          transition={{
            duration: 3, // Increased duration
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <RiTailwindCssFill className="text-7xl text-[#38B2AC]" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-100 p-4"
          animate={{
            y: ["0", "-30px", "0"],
          }}
          transition={{
            duration: 3, // Increased duration
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <SiFramer className="text-7xl text-[#E91E63]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;

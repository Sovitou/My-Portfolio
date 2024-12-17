import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-50 pb-12">
      <motion.h2
        className="my-20 text-center text-4xl font-semibold"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        GET IN TOUCH
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          className="my-4"
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          className="my-4"
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href="#"
          className="text-blue-600"
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05, color: "#1D4ED8" }}
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;

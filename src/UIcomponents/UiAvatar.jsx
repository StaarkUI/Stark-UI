import React from "react";
import { motion } from "framer-motion";
import Avater from "../design/Avatar";

const UiAvatar = () => {
  return (
    <div className="mt-30 ml-40">
      <motion.h1
        className="ml-50 mt-24 pb-5 text-2xl font-bold"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Avatar
      </motion.h1>
      
      <motion.div
        className="mt-8"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <Avater />
        </div>
      </motion.div>

      <motion.div
        className="ml-80 mt-25"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="font-mono">
          Built by STARK UI at Vercel. The source code is available on GitHub.
        </h1>
      </motion.div>
    </div>
  );
};

export default UiAvatar;

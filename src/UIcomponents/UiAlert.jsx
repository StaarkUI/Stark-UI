import React from "react";
import { motion } from "framer-motion";
import CustomAlert from "../design/CustomAlert";
import CustomAlertBtn from "../design/CustomAlertBtn";

const UiAlert = () => {
  return (
    <div className="mt-30 ml-40">
      <motion.h1
        className="ml-50 mt-24 pb-2 text-2xl font-bold"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Alert
      </motion.h1>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Custom Alert
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <CustomAlert />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 mb-4">
          Custom Alert Button
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <CustomAlertBtn />
        </div>
      </motion.div>

      <motion.div
        className="ml-80 mt-25 mb-20"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="font-mono">
          Built by STARK UI at Vercel. The source code is available on GitHub.
        </h1>
      </motion.div>
    </div>
  );
};

export default UiAlert;

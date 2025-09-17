import React from "react";
import { motion } from "framer-motion";
import BasicInput from "../design/BasicInput";
import FileInput from "../design/FileInput";
import DisabledInput from "../design/DisableInput";
import LabelInput from "../design/LabelInput";
import ButtonInput from "../design/ButtonInput";

const UiInput = () => {
  return (
    <div className="mt-30 ml-40">
      <motion.h1
        className="ml-50 mt-24 pb-5 text-2xl font-bold"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Input
      </motion.h1>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Basic Input
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <BasicInput />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          File Input
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <FileInput />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Disable Input
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <DisabledInput />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          With Label Input
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <LabelInput />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          With Button Input
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <ButtonInput />
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

export default UiInput;

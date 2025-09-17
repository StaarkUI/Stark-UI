import React from "react";
import { motion } from "framer-motion";
import BasicCalender from "../design/BasicCalendar";
import SelectDate from "../design/SelectDate";

const UiCalendar = () => {
  return (
    <div className="mt-30 ml-40">
      <motion.h1
        className="ml-50 mt-24 pb-5 text-2xl font-bold"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Calendar
      </motion.h1>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Basic Calender
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <BasicCalender />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Date Selector
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <SelectDate />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="ml-80 mt-25"
      >
        <h1 className="font-mono">
          Built by STARK UI at Vercel. The source code is available on GitHub.
        </h1>
      </motion.div>
    </div>
  );
};

export default UiCalendar;

import React from "react";
import { motion } from "framer-motion";
import LoginCard from "../design/LoginCard";
import SignIn from "../design/SignIn";

const UiAuthentication = () => {
  return (
    <div className="mt-30 ml-40">
      <motion.h1
        className="ml-50 mt-24 pb-2 text-2xl font-bold"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Authentication
      </motion.h1>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          sign In
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-130 rounded-2xl">
          <SignIn />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 mt-10 mb-4">
          Log In
          </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-130 rounded-2xl">
          <LoginCard />
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

export default UiAuthentication;

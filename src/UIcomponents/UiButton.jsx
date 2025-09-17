import React from "react";
import { motion } from "framer-motion";
import P from "../design/PrimaryButton";
import SecondaryButton from "../design/SecondaryButton";
import DestructiveButton from "../design/DestructiveButton";
import GhostButton from "../design/GhostButton";
import LinkButton from "../design/LinkButton";
import GradientBtn from "../design/GradientBtn";
import GlowingBtn from "../design/GlowingBtn";
import RipperButton from "../design/RipperButton";

const Button = () => {
  return (
    <div className="mt-30 ml-40">
      <motion.h1
        className="ml-50 mt-24 pb-5 text-2xl font-bold"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Button
      </motion.h1>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Default
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <P />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Secondary
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <SecondaryButton />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Destructive
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <DestructiveButton />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">Ghost</h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <GhostButton />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">Link</h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <LinkButton />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Animated Button
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <GradientBtn />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Glowing Button Text
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <GlowingBtn />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Ripper Button
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <RipperButton />
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

export default Button;

import React from "react";
import { motion } from "framer-motion";
import BasicInputOTP from "../design/BasicInputOTP";
import BasicInputOTPV2 from "../design/BasicInputOTPTwo";
import DisableInputOTP from "../design/DisableInputOTP";
import RequiredInputOTP from "../design/RequiredInputOTP";
import VarientInputOtp from "../design/VarientInputOtp";
import RoundedInputOTP from "../design/RoundedInputOTP";
import PasswordInputOTP from "../design/PasswordInputOTP";
import InvalidInputOTP from "../design/InvalidInputOTP";
import CharacterOnlyInputOTP from "../design/CharacterOnlyInputOTP";
import NumberAndCharacterOnlyInputOTP from "../design/NumberAndCharacterOnlyInputOTP";

const UiInputOTP = () => {
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
          Basic Input OTP
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <BasicInputOTP />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          6 Digits Input OTP
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <BasicInputOTPV2 />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Disable Input OTP
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <DisableInputOTP />
        </div>
      </motion.div>

       <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Required Input OTP
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <RequiredInputOTP />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Variants
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <VarientInputOtp />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Variants
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <RoundedInputOTP/>
        </div>
      </motion.div>PasswordInputOTP

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Password
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <PasswordInputOTP/>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Invalid OTP
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <InvalidInputOTP />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Allowed Character Only
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <CharacterOnlyInputOTP />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10"
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Allowed Character and Number
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <NumberAndCharacterOnlyInputOTP/>
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

export default UiInputOTP;

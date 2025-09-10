import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const LoginCard = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  // 👇 Yaha button ki jagah login card aa gaya
  const MyComponent = () => (
    <div className="flex justify-center items-center h-80 p-4 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-100 max-w-xs rounded-2xl shadow-lg border border-gray-200 bg-white p-6"
      >
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Login to your account
          </h2>
          <p className="text-sm text-gray-500">
            Enter your email below to login to your account
          </p>
          <button className="text-blue-600 hover:underline text-sm mt-2">
            Sign Up
          </button>
        </div>

        {/* Content */}
        <form className="space-y-6">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a
                href="#"
                className="ml-auto text-xs text-blue-600 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              required
              className="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Login with Google
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );

  const componentCode = `
import React from "react"
import { motion } from "framer-motion"

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-sm rounded-2xl shadow-lg border border-gray-200 bg-white p-6"
      >
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Login to your account
          </h2>
          <p className="text-sm text-gray-500">
            Enter your email below to login to your account
          </p>
          <button className="text-blue-600 hover:underline text-sm mt-2">
            Sign Up
          </button>
        </div>

        {/* Content */}
        <form className="space-y-6">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="px-3 py-2 border rounded-lg text-sm focus:ring-2
               focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a
                href="#"
                className="ml-auto text-xs text-blue-600 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              required
              className="px-3 py-2 border rounded-lg text-sm focus:ring-2
               focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white
               font-medium hover:bg-blue-700 transition"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white
               text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Login with Google
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default App
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setShow("component")}
          className="px-4 py-2 hover:bg-gray-100 rounded-lg shadow"
        >
          Preview
        </button>

        <button
          onClick={() => setShow("code")}
          className="px-4 py-2 hover:bg-gray-100 rounded-lg shadow"
        >
          Code
        </button>
      </div>

      {/* Preview OR Code */}
      <div className="w-full ">
        {show === "component" ? (
          <MyComponent />
        ) : (
          <div className="overflow-y-auto pl-6 mt-5 max-h-108 w-full">
            <div className="rounded-xl relative">
              <pre className="px-5 text-xs">
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                  customStyle={{ background: "transparent" }}
                >
                  {componentCode}
                </SyntaxHighlighter>
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 px-3 py-2 hover:bg-gray-200 rounded-md"
              >
                {copied ? <TiTick /> : <FaRegCopy />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginCard;

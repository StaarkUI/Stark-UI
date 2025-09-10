import React from "react";
import { LuQuote } from "react-icons/lu";
import { LuPaintbrush } from "react-icons/lu";
import { FiSmartphone } from "react-icons/fi";
import { LiaFeatherSolid } from "react-icons/lia";
import { TiTick } from "react-icons/ti";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        {/* Badge */}
        <div className="inline-block bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-6 mt-10 sm:mt-15">
          🌟 New: 50+ components
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Build UI Faster with My Personal Component Library
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mb-10 sm:mb-12 dark:text-gray-400">
          A curated set of reusable, accessible, and themeable components to
          help you ship beautiful interfaces quickly.
        </p>

        {/* Quote Cards */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="relative bg-orange-400 text-white pt-8 sm:pt-10 px-4 sm:px-6 rounded-xl shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{duration: 0.2}}
          >
            <h3 className="text-lg sm:text-xl font-bold mt-5">Big Idea</h3>
            <p className="mt-2 text-sm sm:text-base font-semibold text-center">
              “Ship days faster. Design once, reuse forever.”
            </p>
            <p className="text-xs sm:text-sm mt-3 text-center mb-18">
              Cut the boilerplate. Focus on what matters.
            </p>

            {/* Quote Icon → fixed at bottom-right */}
            <span className="absolute bottom-3 right-3">
              <LuQuote className="size-8 sm:size-10 opacity-80" />
            </span>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{duration: 0.2}}
            className="bg-blue-50 p-4 sm:p-6 rounded-xl shadow-md text-left">
              <h3 className="font-semibold dark:text-black">⚡ Speed</h3>
              <p className="mt-1 sm:mt-2 text-gray-800 text-sm sm:text-base">
                “From idea to interface in minutes.”
              </p>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{duration: 0.2}}
            className="bg-blue-50 p-4 sm:p-6 rounded-xl shadow-md text-left">
              <h3 className="font-semibold dark:text-black">✨ Polish</h3>
              <p className="mt-1 sm:mt-2 text-gray-800 text-sm sm:text-base">
                “Beautiful by default. Flexible by design.”
              </p>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{duration: 0.2}}
            className="bg-blue-50 p-4 sm:p-6 rounded-xl shadow-md text-left">
              <h3 className="font-semibold dark:text-black">🛡 Reliability</h3>
              <p className="mt-1 sm:mt-2 text-gray-800 text-sm sm:text-base">
                “Accessible, robust, and production-ready.”
              </p>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{duration: 0.2}}
            className="bg-blue-50 p-4 sm:p-6 rounded-xl shadow-md text-left">
              <h3 className="font-semibold dark:text-black">🧩 Composable</h3>
              <p className="mt-1 sm:mt-2 text-gray-800 text-sm sm:text-base">
                “Lego-like blocks for any product.”
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <motion.button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 w-full sm:w-auto"
            onClick={() => navigate("/component")}
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="border border-gray-300 px-6 py-3 rounded-lg bg-white hover:bg-gray-300 text-black dark:group-hover:bg-gray-800 w-full sm:w-auto"
            onClick={() => navigate("/component")}
            whileHover={{ scale: 1.05 }}
          >
            Browse Components
          </motion.button>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex -space-x-3">
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="size-8 rounded-full border-2 border-white"
              src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
              alt="Profile 1"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="size-8 rounded-full border-2 border-white"
              src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
              alt="Profile 2"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="size-8 rounded-full border-2 border-white"
              src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              alt="Profile 3"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="size-8 rounded-full border-2 border-white"
              src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png"
              alt="Profile 4"
            />
          </div>

          <p className="text-gray-600 text-sm text-center sm:text-left">
            Trusted by developers building real apps
          </p>
        </motion.div>
      </div>

      {/* Why This Library Section */}
      <motion.div
        className="py-12 sm:py-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-12 gap-4 sm:gap-0">
            <h2 className="text-xl sm:text-2xl font-bold">Why this library</h2>
            <motion.button
              className="border hover:bg-gray-300 border-gray-300 px-4 sm:px-5 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              Explore Docs
            </motion.button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              className="bg-white shadow-sm rounded-xl px-5 sm:px-6 pb-6 pt-3 sm:pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-100 rounded-full size-10 p-2 mb-3 flex items-center justify-center">
                <TiTick />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2">Easy to Use</h3>
              <p className="text-gray-600 text-sm">
                Drop-in components with clear APIs and minimal setup.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-sm rounded-xl px-5 sm:px-6 pb-6 pt-3 sm:pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gray-100 rounded-full size-10 p-2 mb-3 flex items-center justify-center">
                <LuPaintbrush />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2">Customizable</h3>
              <p className="text-gray-600 text-sm">
                Built on CSS variables with theming support out of the box.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-sm rounded-xl px-5 sm:px-6 pb-6 pt-3 sm:pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gray-100 rounded-full size-10 p-2 mb-3 flex items-center justify-center">
                <FiSmartphone />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2">Responsive</h3>
              <p className="text-gray-600 text-sm">
                Layouts and components that adapt gracefully to any screen.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-sm rounded-xl px-5 sm:px-6 pb-6 pt-3 sm:pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-gray-100 rounded-full size-10 p-2 mb-3 flex items-center justify-center">
                <LiaFeatherSolid />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2">Lightweight</h3>
              <p className="text-gray-600 text-sm">
                No heavy dependencies. Focused on performance and DX.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="border-t border-gray-200 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-600 gap-4 sm:gap-0">
          <div className="text-center sm:text-left">
            <h1>
             Built by STARK UI at Vercel. The source code is available on GitHub.
            </h1>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/Jeet000001">
              <motion.span whileHover={{ scale: 1.2 }}>
                <SiGithub className="size-5" />
              </motion.span>
            </a>
            <a href="https://www.linkedin.com/in/jeet-paul-8b4a74310/">
              <motion.span whileHover={{ scale: 1.2 }}>
                <FaLinkedin className="size-5" />
              </motion.span>
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;

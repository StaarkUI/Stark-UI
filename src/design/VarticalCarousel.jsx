import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const SingleCardCarousel2 = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const VerticalCarousel = () => {
    const numbers = [1, 2, 3, 4, 5];
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % numbers.length);
    };

    const handlePrev = () => {
      setDirection(-1);
      setIndex((prev) => (prev === 0 ? numbers.length - 1 : prev - 1));
    };

    const variants = {
      enter: (dir) => ({
        y: dir > 0 ? 100 : -100,
        opacity: 0,
      }),
      center: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      },
      exit: (dir) => ({
        y: dir > 0 ? -100 : 100,
        opacity: 0,
        transition: { duration: 0.5 },
      }),
    };

    return (
      <div className="flex flex-col items-center justify-center h-60 gap-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 flex items-center justify-center rounded-full border shadow"
        >
          <ChevronUp />
        </button>

        <div className="relative w-64 h-48 flex items-center justify-center overflow-hidden rounded-2xl">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute text-4xl font-bold h-40 w-64 bg-gray-50 shadow flex justify-center items-center rounded-2xl"
            >
              {numbers[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center rounded-full border shadow"
        >
          <ChevronDown />
        </button>
      </div>
    );
  };

  // Code string to show in "Code" tab
  const componentCode = `import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const numbers = [1, 2, 3, 4, 5];

export default function VerticalCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % numbers.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev === 0 ? numbers.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (dir) => ({
      y: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      y: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <button
        onClick={handlePrev}
        className="w-10 h-10 flex items-center 
        justify-center rounded-full border shadow"
      >
        <ChevronUp />
      </button>

      <div className="relative w-64 h-50 flex items-center
       justify-center overflow-hidden rounded-2xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute text-4xl font-bold h-40 w-65
             bg-gray-50 shadow flex justify-center items-center rounded-2xl"
          >
            {numbers[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={handleNext}
        className="w-10 h-10 flex items-center justify-center rounded-full border shadow"
      >
        <ChevronDown />
      </button>
    </div>
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      {/* Tabs */}
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

      {/* Content */}
      <div className="w-full mt-4">
        {show === "component" ? (
          <VerticalCarousel />
        ) : (
          <div className="overflow-y-auto pl-6 max-h-78 w-full">
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

export default SingleCardCarousel2;

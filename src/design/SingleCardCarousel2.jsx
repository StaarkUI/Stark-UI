import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const SingleCardCarousel2 = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const Carousel = () => {
    const cards = [1, 2, 3, 4, 5];
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
      if (current < cards.length - 1) {
        setDirection(1);
        setCurrent((prev) => prev + 1);
      }
    };

    const prevSlide = () => {
      if (current > 0) {
        setDirection(-1);
        setCurrent((prev) => prev - 1);
      }
    };

    const variants = {
      enter: (dir) => ({
        x: dir > 0 ? 300 : -300,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4 },
      },
      exit: (dir) => ({
        x: dir > 0 ? -300 : 300,
        opacity: 0,
        transition: { duration: 0.4 },
      }),
    };

    return (
      <div className="flex items-center justify-center h-65 w-full py-10">
        <div className="relative flex items-center">
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`absolute -left-14 top-1/2 -translate-y-1/2 rounded-full p-3 transition shadow-md 
              ${
                current === 0
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative w-80 h-80 flex items-center justify-center overflow-hidden rounded-2xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-70 h-70 bg-gray-50 rounded-2xl shadow-lg flex items-center justify-center text-5xl font-bold"
              >
                {cards[current]}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            disabled={current === cards.length - 1}
            className={`absolute -right-14 top-1/2 -translate-y-1/2 rounded-full p-3 transition shadow-md 
              ${
                current === cards.length - 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  };

  const componentCode = `

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function App() {
  const cards = [1, 2, 3, 4, 5];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (current < cards.length - 1) {
      setDirection(1);
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((prev) => prev - 1);
    }
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative flex items-center">

        <button
          onClick={prevSlide}
          disabled={current === 0}
          className={
            "absolute -left-14 top-1/2 -translate-y-1/2 rounded-full"+
            " p-3 transition shadow-md " +
            (current === 0
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white hover:bg-gray-100")
          }
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="relative w-80 h-80 flex items-center
         justify-center overflow-hidden rounded-2xl">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className={
                "absolute w-70 h-70 bg-gray-100 rounded-2xl shadow-lg"+
                " flex items-center justify-center text-5xl font-bold"}
            >
              {cards[current]}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextSlide}
          disabled={current === cards.length - 1}
          className={
            "absolute -right-14 top-1/2 -translate-y-1/2 rounded-full"+
            " p-3 transition shadow-md " +
            (current === cards.length - 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white hover:bg-gray-100")
          }
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App;

`;

  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
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

      <div className="w-full">
        {show === "component" ? (
          <Carousel />
        ) : (
          <div className="overflow-y-auto pl-6 max-h-82 w-full">
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

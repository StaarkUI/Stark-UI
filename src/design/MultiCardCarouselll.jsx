import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const MultiCardCarousel2 = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const Carousel = () => {
    const cards = [1, 2, 3, 4, 5];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
      if (current < cards.length - 1) {
        setCurrent((prev) => prev + 1);
      }
    };

    const prevSlide = () => {
      if (current > 0) {
        setCurrent((prev) => prev - 1);
      }
    };

    return (
      <div className="flex items-center justify-center h-65 w-full py-10">
        <div className="relative flex items-center w-[500px]">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={
              "absolute -left-10 top-1/2 -translate-y-1/2 rounded-full p-2 transition shadow-md " +
              (current === 0
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-white hover:bg-gray-100")
            }
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Cards */}
          <div className="relative w-full h-56 flex items-center justify-center overflow-hidden">
            {cards.map((card, index) => {
              let offset = index - current;

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: offset * 160,
                    scale: offset === 0 ? 1 : 0.85,
                    opacity: Math.abs(offset) > 1 ? 0 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-36 h-48 bg-gray-100 rounded-xl shadow-md flex items-center justify-center text-3xl font-bold"
                >
                  {card}
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            disabled={current === cards.length - 1}
            className={
              "absolute -right-10 top-1/2 -translate-y-1/2 rounded-full p-2 transition shadow-md " +
              (current === cards.length - 1
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-white hover:bg-gray-100")
            }
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  const componentCode = `import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function App() {
  const cards = [1, 2, 3, 4, 5];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < cards.length - 1) {
      setCurrent(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative flex items-center w-[500px]">
        <button
          onClick={prevSlide}
          disabled={current === 0}
          className={
            "absolute -left-10 top-1/2 -translate-y-1/2
             rounded-full p-2 transition shadow-md " +
            (current === 0
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white hover:bg-gray-100")
          }
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="relative w-full h-56 flex
         items-center justify-center overflow-hidden">
          {cards.map((card, index) => {
            const offset = index - current;

            return (
              <motion.div
                key={index}
                animate={{
                  x: offset * 160,
                  scale: offset === 0 ? 1 : 0.85,
                  opacity: Math.abs(offset) > 1 ? 0 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="absolute w-36 h-48 bg-gray-100 rounded-xl
                 shadow-md flex items-center justify-center text-3xl font-bold"
              >
                {card}
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          disabled={current === cards.length - 1}
          className={
            "absolute -right-10 top-1/2 -translate-y-1/2 
            rounded-full p-2 transition shadow-md " +
            (current === cards.length - 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white hover:bg-gray-100")
          }
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default App;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="flex gap-4 mb-4">
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
          <div className="overflow-y-auto pl-6 max-h-79 w-full">
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

export default MultiCardCarousel2;

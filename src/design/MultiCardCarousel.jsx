import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const multiCardCarousel = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const Carousel = () => {
    const cards = [1, 2, 3, 4, 5];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
      setCurrent((prev) => (prev + 1) % cards.length);
    };

    const prevSlide = () => {
      setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const getOffset = (index) => {
      const half = Math.floor(cards.length / 2);
      let offset = index - current;

      if (offset > half) offset -= cards.length;
      if (offset < -half) offset += cards.length;

      return offset;
    };

    return (
      <div className="flex items-center justify-center h-65 w-full py-10">
        <div className="relative flex items-center w-[500px]">
          <button
            onClick={prevSlide}
            className="absolute -left-10 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white hover:bg-gray-100 shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="relative w-full h-56 flex items-center justify-center overflow-hidden">
            {cards.map((card, index) => {
              const offset = getOffset(index);
              return (
                <motion.div
                  key={index}
                  initial={{ x: offset * 160 }}
                  animate={{
                    x: offset * 160,
                    scale: Math.abs(offset) === 0 ? 1 : 0.8,
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
            className="absolute -right-10 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white hover:bg-gray-100 shadow-md"
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
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getOffset = (index) => {
    const half = Math.floor(cards.length / 2);
    let offset = index - current;

    if (offset > half) offset -= cards.length;
    if (offset < -half) offset += cards.length;

    return offset;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative flex items-center w-[500px]">

        <button
          onClick={prevSlide}
          className="absolute -left-10 top-1/2 -translate-y-1/2 
          rounded-full p-2 bg-white hover:bg-gray-100 shadow-md"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="relative w-full h-56 flex items-center justify-center overflow-hidden">
          {cards.map((card, index) => {
            const offset = getOffset(index);

            return (
              <motion.div
                key={index}
                initial={{ x: offset * 160 }}
                animate={{
                  x: offset * 160,
                  scale: offset === 0 ? 1 : 0.75,
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
          className="absolute -right-10 top-1/2 -translate-y-1/2 
          rounded-full p-2 bg-white hover:bg-gray-100 shadow-md"
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

export default multiCardCarousel;

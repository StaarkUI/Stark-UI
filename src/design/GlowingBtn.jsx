import { color } from "motion";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const P = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const MyComponent = () => (
    <div className="w-180 h-70 flex justify-center items-center">
      <style>{`
        @keyframes glow {
          100% {
            background-position: -200% 0;
          }
          0% {
            background-position: 200% 0;
          }
        }
        .glow-text {
          color: white; /* Default text color */
          transition: all 0.3s ease-in-out;
        }
        .glow-hover:hover .glow-text {
          color: transparent;
          background-image: linear-gradient(to right, white,gray);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          animation: glow 2s linear infinite;
        }
      `}</style>

      <div className="flex justify-center items-center h-screen">
         <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="bg-gray-900 px-6 py-3 rounded-md
         hover:bg-gray-800 relative overflow-hidden glow-hover shadow-md shadow-gray-500"
        >
          <span className="relative inline-block glow-text">Hover Me</span>
        </motion.button>
      </div>
    </div>
  );

  const componentCode = `
import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <style>
        {"@keyframes glow {" +
          "  0% { background-position: 200% 0; }" +
          "  100% { background-position: -200% 0; }" +
          "}" +
          ".glow-text {" +
          "  color: white;" +
          "  transition: all 0.3s ease-in-out;" +
          "}" +
          ".glow-hover:hover .glow-text {" +
          "  color: transparent;" +
          "  background-image: linear-gradient(to right, white, gray);" +
          "  background-size: 200% auto;" +
          "  background-clip: text;" +
          "  -webkit-background-clip: text;" +
          "  animation: glow 2s linear infinite;" +
          "}"}
      </style>

      <div className="flex justify-center items-center h-screen bg-gray-100">
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="bg-gray-900 px-6 py-3 rounded-md
         hover:bg-gray-800 relative overflow-hidden glow-hover shadow-md shadow-gray-500"
        >
          <span className="relative inline-block glow-text">Hover Me</span>
        </motion.button>
      </div>
    </>
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

export default P;

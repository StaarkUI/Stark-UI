import { color } from "motion";
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
      <div className="h-screen flex items-center justify-center">
        <button
          className="px-6 py-3 rounded-md text-white font-semibold shadow-lg
                   bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                   bg-[length:200%_200%] animate-[gradientMove_2s_ease_infinite]
                   transition-transform duration-300 hover:scale-110"
        >
          Gradient Button
        </button>

        <style>
          {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
        </style>
      </div>
    </div>
  );

  const componentCode = `
import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <button
          className="px-6 py-3 rounded-xl text-white font-semibold shadow-lg
                   bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                   bg-[length:200%_200%] animate-[gradientMove_2s_ease_infinite]
                   transition-transform duration-300 hover:scale-110"
        >
          Gradient Button
        </button>

        <style>
          {"@keyframes gradientMove {" +
            "0% { background-position: 0% 50%; }" +
            "50% { background-position: 100% 50%; }" +
            "100% { background-position: 0% 50%; }" +
            "}"}
        </style>
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

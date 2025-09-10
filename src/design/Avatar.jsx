import React, { useState } from "react";
import { motion } from "motion/react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const LinkButton = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const MyComponent = () => (
    <div className="w-180 h-70 flex justify-center items-center">
      <div className="flex gap-10">
        <div>
          <motion.img
            whileHover={{ rotate: 360, scale: 1.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="size-10 rounded-full border-2 border-white"
            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
            alt="Profile 1"
          />
        </div>

        <motion.div 
        whileHover={{ rotate: 360, scale: 1.5 }}
        className="flex -space-x-3">
          <motion.img
            whileHover={{ rotate: 360, scale: 1.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="size-10 rounded-full border-2 border-white"
            src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
            alt="Profile 2"
          />
          <motion.img
            whileHover={{ rotate: 360, scale: 1.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="size-10 rounded-full border-2 border-white"
            src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
            alt="Profile 3"
          />
          <motion.img
            whileHover={{ rotate: 360, scale: 1.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="size-10 rounded-full border-2 border-white"
            src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png"
            alt="Profile 4"
          />
        </motion.div>
      </div>
    </div>
  );

  const componentCode = `
import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div className="flex gap-10">
      <div>
        <motion.img
          whileHover={{ rotate: 360, scale: 1.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="size-10 rounded-full border-2 border-white"
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          alt="Profile 1"
        />
      </div>

      <div className="flex -space-x-3">
        <img
          className="size-10 rounded-full border-2 border-white"
          src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
          alt="Profile 2"
        />
        <img
          className="size-10 rounded-full border-2 border-white"
          src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
          alt="Profile 3"
        />
        <img
          className="size-10 rounded-full border-2 border-white"
          src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png"
          alt="Profile 4"
        />
      </div>
    </div>
  );
};

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

export default LinkButton;

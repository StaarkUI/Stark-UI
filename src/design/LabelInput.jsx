import { color } from "motion";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const LabelInput = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const InputField = () => (
    <div className="mt-20 w-60 mx-auto p-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Full Name
      </label>
      <input
        type="text"
        placeholder="Enter Full Name"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg
         shadow-sm focus:outline-none focus:ring-3 focus:ring-gray-400
        focus:border-gray-500"
      />
    </div>
  );

  const componentCode = `
import React from "react";

export default function InputField() {
  return (
    <div className="w-60 mx-auto p-4">
      <label
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Full Name
      </label>
      <input
        type="text"
        placeholder="Enter Full Name"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg
         shadow-sm focus:outline-none focus:ring-3 focus:ring-gray-400
        focus:border-gray-500"
      />
    </div>
  );
}
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

      <div className="w-full ">
        {show === "component" ? (
          <InputField />
        ) : (
          <div className="overflow-y-auto scrollbar-hidden pl-6 mt-2 max-h-81 w-full">
            <div className="rounded-xl relative">
              <pre className="px-5 -ml-8 -mt-8 text-xs">
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
                className="absolute top-2 right-2 px-3 py-2 mt-8 hover:bg-gray-200 rounded-md"
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

export default LabelInput;

import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const DisabledInput = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const DisabledInput = () => (
    <div className="flex justify-center items-center h-70">
    <div className="w-50 mx-auto p-4">
      <label
        htmlFor="disabled-input"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Full Name
      </label>

      <input
        id="disabledInput"
        type="text"
        value="Mr. Stark"
        disabled
        className="w-full rounded-md border border-gray-300 bg-gray-100
          px-3 py-2 text-gray-600 focus:outline-none"
      />

      <p className="mt-2 text-xs text-gray-500">
        This field is disabled
      </p>
    </div>
    </div>
  );

  const componentCode = `
import React from "react";

export default function DisabledInput() {
  return (
    <div className="w-50 mx-auto p-4">
      <label
        htmlFor="disabled-input"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Full Name
      </label>

      <input
        id="disabledInput"
        type="text"
        value="Mr. Stark"
        disabled
       className="w-full rounded-md border border-gray-300 bg-gray-100
        px-3 py-2 text-gray-600 focus:outline-none"
      />

      <p className="mt-2 text-xs text-gray-500">
        This field is disabled
      </p>
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
          <DisabledInput />
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

export default DisabledInput;

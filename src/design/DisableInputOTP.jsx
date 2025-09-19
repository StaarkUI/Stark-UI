import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const DisableInputOTP = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const MyComponent = () => {
    const otp = ["1", "2", "3", "4"];

    return (
      <div className="flex justify-center items-center mt-25">
        <div className="flex flex-col items-start gap-2 p-6">
          <div className="flex gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                disabled
                className="size-10 text-center border rounded-lg text-lg font-medium
                bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            ))}
          </div>

          <div className="text-sm text-gray-500">
            OTP value:{" "}
            <span className="text-md font-medium text-black">
              {otp.join("")}
            </span>
          </div>
        </div>
      </div>
    );
  };

const componentCode = `
import React from "react";

export default function App() {
  const otp = ["1", "2", "3", "4"];

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-start gap-2 p-6">
        <div className="flex gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              disabled
              className="size-10 text-center border rounded-lg text-lg font-medium
              bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          ))}
        </div>

        <div className="text-sm text-gray-500">
          OTP value:{" "}
          <span className="text-md font-medium text-black">{otp.join("")}</span>
        </div>
      </div>
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

      <div className="w-full">
        {show === "component" ? (
          <MyComponent />
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

export default DisableInputOTP;

import { color } from "motion";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ChevronDown } from "lucide-react";

const P = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const BasicSelect = () => {
    const [age] = useState("21");

    const options = [
      { value: "", label: "None" },
      { value: "20", label: "20" },
      { value: "21", label: "21" },
      { value: "22", label: "22" },
    ];

    return (
      <div className="w-56 mx-auto mt-30 relative">
        <label
          className={
            "absolute left-3 px-1 bg-white transition-all text-gray-600 " +
            (age ? "-top-2 text-xs" : "top-3 text-sm")
          }
        >
          Gender
        </label>

        <div
          className={
            "w-full border rounded-md px-3 py-3 flex items-center justify-between " +
            "border-gray-400 bg-gray-50 text-gray-700 cursor-default"
          }
        >
          <span>
            {age ? options.find((o) => o.value === age)?.label : ""}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    );
  };

  const componentCode = `
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BasicSelect() {
  const [age] = useState("21");

  const options = [
    { value: "", label: "None" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
  ];

  return (
    <div className="w-56 mx-auto mt-10 relative">
      <label
        className={
          "absolute left-3 px-1 bg-white transition-all text-gray-600 " +
          (age ? "-top-2 text-xs" : "top-3 text-sm")
        }
      >
        Gender
      </label>

      <div
        className={
          "w-full border rounded-md px-3 py-3 flex items-center justify-between " +
          "border-gray-400 bg-gray-50 text-gray-700 cursor-default"
        }
      >
        <span>
          {age ? options.find((o) => o.value === age)?.label : ""}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
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

      <div className="w-full ">
        {show === "component" ? (
          <BasicSelect />
        ) : (
          <div className="overflow-y-auto mt-3 pl-6 max-h-80 w-full">
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

import { color } from "motion";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ChevronDown } from "lucide-react";

const RequiredDropDown = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const BasicSelect = () => {
    const [age, setAge] = useState("");

    const options = [
      { value: "", label: "Select Age" },
      { value: "20", label: "20" },
      { value: "21", label: "21" },
      { value: "22", label: "22" },
    ];

    return (
      <div className="w-56 mx-auto mt-30 relative">
        <label
          className={
            "absolute left-3 px-1 bg-white text-gray-600 transition-all " +
            (age ? "-top-2 text-xs" : "top-3 text-sm")
          }
        >
          Age <span className="text-red-500">*</span>
        </label>

        <select
          onChange={(e) => setAge(e.target.value)}
          className="w-full border border-gray-400 rounded-md px-3 py-2
         appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              disabled={opt.value === ""}
            >
              {opt.label}
            </option>
          ))}
        </select>

        <ChevronDown
          className="w-4 h-4 text-gray-500 
      absolute right-3 top-1/2 -translate-y-1/2 
      pointer-events-none"
        />
      </div>
    );
  };

  const componentCode = `
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BasicSelect() {
  const [age, setAge] = useState("");

  const options = [
    { value: "", label: "Select Age" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
  ];

  return (
    <div className="w-56 mx-auto mt-10 relative">
      <label
        className={
          "absolute left-3 px-1 bg-white text-gray-600 transition-all " +
          (age ? "-top-2 text-xs" : "top-3 text-sm")
        }
      >
        Age <span className="text-red-500">*</span>
      </label>

      <select
        onChange={(e) => setAge(e.target.value)}
        className="w-full border border-gray-400 rounded-md px-3 py-2
         appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            disabled={opt.value === ""}
          >
            {opt.label}
          </option>
        ))}
      </select>

      <ChevronDown className="w-4 h-4 text-gray-500 
      absolute right-3 top-1/2 -translate-y-1/2 
      pointer-events-none" />
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

export default RequiredDropDown;

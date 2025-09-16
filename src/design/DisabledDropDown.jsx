import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ChevronDown } from "lucide-react";

const DisabledDropDown = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  // Yeh tumhara BasicSelect component hai
  const BasicSelect = () => {
    const [age] = useState("");
    const disabled = true;

    const options = [
      { value: "", label: "None" },
      { value: "20", label: "20" },
      { value: "21", label: "21" },
      { value: "22", label: "22" },
    ];

    return (
      <div className="flex justify-center items-center h-50">
        <div className="w-56 mx-auto mt-10 relative">
          <label
            className={
              "absolute left-3 px-1 transition-all " +
              (disabled ? "text-gray-600 " : "text-red-600 ") +
              (age ? "-top-2 text-xs" : "top-3 text-sm")
            }
          >
            Gender
          </label>

          <div
            className={
              "w-full border rounded-md px-3 py-3 flex items-center justify-between " +
              (disabled
                ? "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                : "border-red-600 cursor-pointer")
            }
          >
            <span className={disabled ? "text-gray-400" : "text-gray-700"}>
              {age ? options.find((o) => o.value === age)?.label : ""}
            </span>
            <ChevronDown
              className={
                "w-4 h-4 " + (disabled ? "text-gray-300" : "text-gray-500")
              }
            />
          </div>
        </div>
      </div>
    );
  };

  const componentCode = `
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BasicSelect() {
  const [age] = useState("");
  const disabled = true;

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
          "absolute left-3 px-1 transition-all " +
          (disabled ? "text-gray-600 " : "text-red-600 ") +
          (age ? "-top-2 text-xs" : "top-3 text-sm")
        }
      >
        Gender
      </label>

      <div
        className={
          "w-full border rounded-md px-3 py-3 flex items-center justify-between " +
          (disabled
            ? "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
            : "border-red-600 cursor-pointer")
        }
      >
        <span className={disabled ? "text-gray-400" : "text-gray-700"}>
          {age ? options.find((o) => o.value === age)?.label : ""}
        </span>
        <ChevronDown
          className={
            "w-4 h-4 " + (disabled ? "text-gray-300" : "text-gray-500")
          }
        />
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

export default DisabledDropDown;

import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const BasicDropDown = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const BasicSelect = () => {
    const [age, setAge] = useState("");
    const [open, setOpen] = useState(false);

    const options = [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
      { value: "Other", label: "Other" },
    ];

    const handleSelect = (value) => {
      setAge(value);
      setOpen(false);
    };

    return (
        <div className="flex justify-center items-center h-60">
      <div className="w-56 mx-auto mt-10 relative">
        <label
          className={
            "absolute left-3 px-1 transition-all bg-white text-gray-500 " +
            (age || open ? "-top-2 text-xs" : "top-3 text-sm")
          }
        >
          Gender
        </label>

        <div
          className={
            "w-full border rounded-md px-3 py-3 cursor-pointer " +
            "flex items-center justify-between transition " +
            (open ? "border-blue-500" : "border-gray-300")
          }
          onClick={() => setOpen(!open)}
        >
          <span className="text-gray-700">
            {age ? options.find((o) => o.value === age)?.label : ""}
          </span>
          <ChevronDown
            className={
              "w-4 h-4 text-gray-500 transition-transform " +
              (open ? "rotate-180" : "")
            }
          />
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute mt-1 w-full bg-white border
             border-gray-300 rounded-md shadow-lg z-10"
            >
              {options.map((opt) => (
                <li
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className="px-4 py-2 hover:bg-gray-100 hover:rounded-md cursor-pointer"
                >
                  {opt.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      </div>
    );
  };

  const componentCode = `
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function BasicSelect() {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);

  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const handleSelect = (value) => {
    setAge(value);
    setOpen(false);
  };

  return (
    <div className="w-56 mx-auto mt-10 relative">
      <label
        className={
          "absolute left-3 px-1 transition-all bg-white text-gray-500 " +
          (age || open ? "-top-2 text-xs" : "top-3 text-sm")
        }
      >
        Gender
      </label>

      <div
        className={
          "w-full border rounded-md px-3 py-3 cursor-pointer " +
          "flex items-center justify-between transition " +
          (open ? "border-blue-500" : "border-gray-300")
        }
        onClick={() => setOpen(!open)}
      >
        <span className="text-gray-700">
          {age ? options.find((o) => o.value === age)?.label : ""}
        </span>
        <ChevronDown
          className={
            "w-4 h-4 text-gray-500 transition-transform " +
            (open ? "rotate-180" : "")
          }
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-1 w-full bg-white border
             border-gray-300 rounded-md shadow-lg z-10"
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className="px-4 py-2 hover:bg-gray-100 hover:rounded-md cursor-pointer"
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
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

export default BasicDropDown;

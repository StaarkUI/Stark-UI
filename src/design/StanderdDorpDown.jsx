import { color } from "motion";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const P = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  // === Yeh tera SelectVariants component hai ===
  const SelectVariants = () => {
    const [age, setAge] = useState("");
    const [openStandard, setOpenStandard] = useState(false);
    const [openFilled, setOpenFilled] = useState(false);

    const options = [
      { value: "", label: "None" },
      { value: 10, label: "10" },
      { value: 20, label: "20" },
      { value: 30, label: "30" },
    ];

    const handleSelect = (value, type) => {
      setAge(value);
      type === "standard" ? setOpenStandard(false) : setOpenFilled(false);
    };

    return (
      <div className="flex justify-center items-center h-70">
        <div className="flex gap-8 p-8">
          <div className="relative w-44">
            <label
              className={
                "absolute left-2 transition-all duration-200 text-gray-500 pointer-events-none " +
                (age || openStandard
                  ? "top-1 text-xs text-blue-600"
                  : "top-3 text-sm")
              }
            >
              Age
            </label>

            <button
              onClick={() => {
                setOpenStandard(!openStandard);
                setOpenFilled(false);
              }}
              className="w-full border-b-2 border-gray-300 bg-transparent pt-5 pb-2 text-left text-sm flex items-center justify-between focus:outline-none"
            >
              {age === "" ? (
                <span className="text-gray-400"></span>
              ) : (
                options.find((o) => o.value === age)?.label
              )}
              <ChevronDown size={16} className="ml-2 text-gray-500" />
            </button>

            <AnimatePresence>
              {openStandard && (
                <motion.ul
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-1 w-full rounded-md border bg-white shadow-md z-10"
                >
                  {options.map((option) => (
                    <li
                      key={option.value}
                      onClick={() => handleSelect(option.value, "standard")}
                      className="cursor-pointer px-3 py-2 text-sm hover:bg-blue-200 hover:rounded-md"
                    >
                      {option.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <div className="relative w-44">
            <label
              className={
                "absolute left-2 transition-all duration-200 text-gray-500 pointer-events-none " +
                (age || openFilled
                  ? "top-1 text-xs text-blue-600"
                  : "top-3 text-sm")
              }
            >
              Age
            </label>

            <button
              onClick={() => {
                setOpenFilled(!openFilled);
                setOpenStandard(false);
              }}
              className="w-full rounded-md bg-gray-100 pt-5 pb-2 px-2 text-left text-sm flex items-center justify-between focus:outline-none border border-gray-300"
            >
              {age === "" ? (
                <span className="text-gray-400"></span>
              ) : (
                options.find((o) => o.value === age)?.label
              )}
              <ChevronDown size={16} className="ml-2 text-gray-500" />
            </button>

            <AnimatePresence>
              {openFilled && (
                <motion.ul
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-1 w-full rounded-md border bg-white shadow-md z-10"
                >
                  {options.map((option) => (
                    <li
                      key={option.value}
                      onClick={() => handleSelect(option.value, "filled")}
                      className="cursor-pointer px-3 py-2 text-sm hover:bg-blue-200 hover:rounded-md"
                    >
                      {option.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  };

  const componentCode = `
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function SelectVariants() {
  const [age, setAge] = useState("")
  const [openStandard, setOpenStandard] = useState(false)
  const [openFilled, setOpenFilled] = useState(false)

  const options = [
    { value: "", label: "None" },
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 30, label: "30" },
  ]

  const handleSelect = (value, type) => {
    setAge(value)
    type === "standard" ? setOpenStandard(false) : setOpenFilled(false)
  }

  return (
    <div className="flex gap-8 p-8">
      <div className="relative w-44">
        <label
          className={
            "absolute left-2 transition-all duration-200 text-gray-500 pointer-events-none"
            +
            (age || openStandard
              ? "top-1 text-xs text-blue-600"
              : "top-3 text-sm")
          }
        >
          Age
        </label>

        <button
          onClick={() => {
            setOpenStandard(!openStandard)
            setOpenFilled(false)
          }}
          className="w-full border-b-2 border-gray-300 bg-transparent 
          pt-5 pb-2 text-left text-sm flex items-center justify-between
           focus:outline-none"
        >
          {age === "" ? (
            <span className="text-gray-400"></span>
          ) : (
            options.find((o) => o.value === age)?.label
          )}
          <ChevronDown size={16} className="ml-2 text-gray-500" />
        </button>

        <AnimatePresence>
          {openStandard && (
            <motion.ul
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-1 w-full 
              rounded-md border bg-white shadow-md z-10"
            >
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleSelect(option.value, "standard")}
                  className="cursor-pointer px-3 py-2 text-sm
                   hover:bg-blue-200 hover:rounded-md"
                >
                  {option.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <div className="relative w-44">
        <label
          className={
            "absolute left-2 transition-all duration-200 text-gray-500 pointer-events-none"
            +
            (age || openFilled
              ? "top-1 text-xs text-blue-600"
              : "top-3 text-sm")
          }
        >
          Age
        </label>

        <button
          onClick={() => {
            setOpenFilled(!openFilled)
            setOpenStandard(false)
          }}
          className="w-full rounded-md bg-gray-100 pt-5 pb-2 px-2 text-left
           text-sm flex items-center justify-between focus:outline-none border
            border-gray-300"
        >
          {age === "" ? (
            <span className="text-gray-400"></span>
          ) : (
            options.find((o) => o.value === age)?.label
          )}
          <ChevronDown size={16} className="ml-2 text-gray-500" />
        </button>

        <AnimatePresence>
          {openFilled && (
            <motion.ul
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-1 w-full rounded-md border
               bg-white shadow-md z-10"
            >
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleSelect(option.value, "filled")}
                  className="cursor-pointer px-3 py-2 text-sm
                   hover:bg-blue-200 hover:rounded-md"
                >
                  {option.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      {/* Toggle Buttons */}
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

      {/* Preview / Code */}
      <div className="w-full">
        {show === "component" ? (
          <SelectVariants />
        ) : (
          <div className="overflow-y-auto pl-6 max-h-82 w-full">
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

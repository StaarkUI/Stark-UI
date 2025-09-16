import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const SelectAutoWidth = () => {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [boxWidth, setBoxWidth] = useState(100);
  const spanRef = useRef(null);

  const options = [
    { value: "", label: "None" },
    { value: 20, label: "Twenty" },
    { value: 21, label: "Twenty one" },
    { value: 22, label: "Twenty one and a half" },
  ];

  useEffect(() => {
    if (spanRef.current) {
      setBoxWidth(spanRef.current.offsetWidth + 50);
    }
  }, [age]);

  return (
    <div className="flex justify-center items-center h-60">
      <div className="flex flex-col items-center space-y-2">
        <label className="text-sm font-medium text-gray-700">Age</label>

        <span
          ref={spanRef}
          className="absolute opacity-0 pointer-events-none font-normal text-base"
        >
          {age ? options.find((o) => o.value === age)?.label : "Select Age"}
        </span>

        <div className="relative">
          <motion.div
            animate={{ width: boxWidth }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between border 
            rounded-lg px-3 py-2 cursor-pointer bg-white shadow-sm"
          >
            <span className="text-gray-700 whitespace-nowrap">
              {age ? options.find((o) => o.value === age)?.label : "Select Age"}
            </span>
            <ChevronDown
              className={
                "w-4 h-4 transition-transform duration-200 " +
                (open ? "rotate-180" : "rotate-0")
              }
            />
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-10 mt-1 bg-white border rounded-lg shadow-md"
                style={{ width: 180 }}
              >
                {options.map((opt) => (
                  <li
                    key={opt.value}
                    onClick={() => {
                      setAge(opt.value);
                      setOpen(false);
                    }}
                    className="px-3 py-2 hover:bg-gray-100 hover:rounded-md
                     cursor-pointer text-gray-700 whitespace-nowrap"
                  >
                    {opt.label}
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

const AutoWidth = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const componentCode = `
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function SelectAutoWidth() {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [boxWidth, setBoxWidth] = useState(100);
  const spanRef = useRef(null);

  const options = [
    { value: "", label: "None" },
    { value: 20, label: "Twenty" },
    { value: 21, label: "Twenty one" },
    { value: 22, label: "Twenty one and a half" },
  ];

  useEffect(() => {
    if (spanRef.current) {
      setBoxWidth(spanRef.current.offsetWidth + 50);
    }
  }, [age]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-2">
        <label className="text-sm font-medium text-gray-700">Age</label>

        <span ref={spanRef} className="absolute opacity-0 
        pointer-events-none font-normal text-base">
          {age ? options.find((o) => o.value === age)?.label : "Select Age"}
        </span>

        <div className="relative">
          <motion.div
            animate={{ width: boxWidth }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between 
            border rounded-lg px-3 py-2 cursor-pointer bg-white shadow-sm"
          >
            <span className="text-gray-700 whitespace-nowrap">
              {age ? options.find((o) => o.value === age)?.label : "Select Age"}
            </span>
            <ChevronDown className={"w-4 h-4 transition-transform duration-200 "
             + (open ? "rotate-180" : "rotate-0")} />
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-10 mt-1 bg-white border rounded-lg shadow-md"
                style={{ width: 180 }}
              >
                {options.map((opt) => (
                  <li
                    key={opt.value}
                    onClick={() => {
                      setAge(opt.value);
                      setOpen(false);
                    }}
                    className="px-3 py-2 hover:bg-gray-100 hover:rounded-md
                     cursor-pointer text-gray-700 whitespace-nowrap"
                  >
                    {opt.label}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
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
          <SelectAutoWidth />
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

export default AutoWidth;

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const MultipleSelectWithLabel = () => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSelect = (name) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      setSelected([...selected, name]);
    }
  };

  return (
    <div className="flex justify-center mt-30">
      <div className="w-72 relative" ref={dropdownRef}>
        {/* Floating Label */}
        <label
          className={`absolute left-3 bg-white px-1 transition-all duration-200 
            ${
              open || selected.length > 0
                ? "-top-2 text-xs text-blue-600"
                : "top-2 text-gray-500"
            }`}
        >
          Tags
        </label>

        {/* Input box */}
        <div
          className="border border-gray-400 rounded-md px-3 py-2 cursor-pointer 
          flex flex-wrap items-center gap-1 pr-8 min-h-[44px]"
          onClick={() => setOpen(!open)}
        >
          {selected.length > 0 ? (
            selected.map((item) => (
              <span
                key={item}
                className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md text-sm"
              >
                {item}
              </span>
            ))
          ) : (
            <span className="text-gray-400 text-sm"></span>
          )}
        </div>

        {/* Right side icon */}
        <div
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute mt-2 w-full max-h-56 overflow-y-auto border 
              border-gray-300 bg-white rounded-md shadow-md z-10"
            >
              {names.map((name) => (
                <div
                  key={name}
                  onClick={() => toggleSelect(name)}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(name)}
                    onChange={() => toggleSelect(name)}
                    className="mr-2"
                  />
                  <span>{name}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const CheckmarksDropDown = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const componentCode = `import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function MultipleSelectWithLabel() {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSelect = (name) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      setSelected([...selected, name]);
    }
  };

  return (
    <div className="flex justify-center mt-12">
      <div className="w-72 relative" ref={dropdownRef}>
        {/* Floating Label */}
        <label
          className={"absolute left-3 bg-white px-1 transition-all duration-200" +
            (open || selected.length > 0
              ? "-top-2 text-xs text-blue-600"
              : "top-2 text-gray-500")}
        >
          Tags
        </label>

        {/* Input box */}
        <div
          className="border border-gray-400 rounded-md px-3 py-2 cursor-pointer 
          flex flex-wrap items-center gap-1 pr-8 min-h-[44px]"
          onClick={() => setOpen(!open)}
        >
          {selected.length > 0 ? (
            selected.map((item) => (
              <span
                key={item}
                className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md text-sm"
              >
                {item}
              </span>
            ))
          ) : (
            <span className="text-gray-400 text-sm"></span>
          )}
        </div>

        {/* Right side icon */}
        <div
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute mt-2 w-full max-h-56 overflow-y-auto border 
              border-gray-300 bg-white rounded-md shadow-md z-10"
            >
              {names.map((name) => (
                <div
                  key={name}
                  onClick={() => toggleSelect(name)}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(name)}
                    onChange={() => toggleSelect(name)}
                    className="mr-2"
                  />
                  <span>{name}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
          <MultipleSelectWithLabel />
        ) : (
          <div className="overflow-y-auto pl-6 mt-3 max-h-80 w-full">
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

export default CheckmarksDropDown;

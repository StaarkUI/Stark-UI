import { color } from "motion";
import { motion } from "motion/react";
import React, { useState, useRef, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AnimatePresence } from "framer-motion";

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

function MultipleSelectTailwind({ className = "" }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const toggleItem = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setOpen(false);
    if (e.key === "Enter") setOpen((o) => !o);
  };

  const isFloating = open || selected.length > 0;

  return (
    <div className="flex justify-center items-center h-50">
      <div className={`relative inline-block ${className}`} ref={containerRef}>
        <div
          tabIndex={0}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={handleKeyDown}
          className={`w-[220px] min-h-[44px] px-2 pt-2 pb-1 rounded-md border transition-colors outline-none
          ${open ? "border-blue-500 shadow-sm" : "border-gray-300"}
          bg-white relative cursor-pointer`}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <label
            className={`absolute left-2 top-1 text-xs pointer-events-none transition-all
            ${
              isFloating
                ? "-translate-y-3 scale-90 text-blue-600 bg-white px-1"
                : "translate-y-2 text-gray-500 scale-100"
            }
          `}
            style={{ transformOrigin: "left top" }}
          >
            Name
          </label>

          <div className="mt-1 flex flex-wrap gap-1 items-center">
            {selected.length === 0 ? (
              <span className="text-gray-400 text-sm select-none"></span>
            ) : (
              selected.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-0.5 text-xs"
                >
                  <span className="truncate max-w-[100px]">{s}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(s);
                    }}
                    aria-label={`Remove ${s}`}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                  >
                    ✕
                  </button>
                </span>
              ))
            )}

            <span className="ml-auto pr-1">
              <svg
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              key="menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute z-40 mt-2 w-[220px] max-h-[160px] overflow-y-auto overflow-x-hidden
             rounded-md border border-gray-200 bg-white shadow-lg text-sm"
              role="listbox"
              aria-multiselectable="true"
            >
              {names.map((name) => {
                const active = selected.includes(name);
                return (
                  <li
                    key={name}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(name);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") toggleItem(name);
                    }}
                    role="option"
                    aria-selected={active}
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.995 }}
                      className={`flex items-center justify-between px-2 py-1 cursor-pointer select-none
                      ${active ? "bg-blue-50" : "hover:bg-gray-50"}`}
                    >
                      <div
                        className={`${
                          active ? "font-medium text-blue-800" : "text-gray-800"
                        }`}
                      >
                        {name}
                      </div>
                      {active && (
                        <svg
                          className="w-4 h-4 text-blue-600"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </motion.div>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const MultiSelectorDropDown = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const componentCode = `
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function MultipleSelectTailwind({ className = "" }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const toggleItem = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setOpen(false);
    if (e.key === "Enter") setOpen((o) => !o);
  };

  const isFloating = open || selected.length > 0;

  return (
    <div className="flex justify-center items-center h-100">
      <div
        className={"relative inline-block " + className}
        ref={containerRef}
      >
        <div
          tabIndex={0}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={handleKeyDown}
          className={
            "w-[220px] min-h-[44px] px-2 pt-2 pb-1 rounded-md  " + 
            "border transition-colors outline-none " +
            (open ? "border-blue-500 shadow-sm" : "border-gray-300") +
            " bg-white relative cursor-pointer"
          }
          role="button"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <label
            className={
              "absolute left-2 top-1 text-xs pointer-events-none transition-all " +
              (isFloating
                ? "-translate-y-3 scale-90 text-blue-600 bg-white px-1"
                : "translate-y-2 text-gray-500 scale-100")
            }
            style={{ transformOrigin: "left top" }}
          >
            Name
          </label>

          <div className="mt-1 flex flex-wrap gap-1 items-center">
            {selected.length === 0 ? (
              <span className="text-gray-400 text-sm select-none"></span>
            ) : (
              selected.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-1
                   bg-gray-100 rounded-full px-2 py-0.5 text-xs"
                >
                  <span className="truncate max-w-[100px]">{s}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(s);
                    }}
                    aria-label={"Remove " + s}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                  >
                    ✕
                  </button>
                </span>
              ))
            )}

            <span className="ml-auto pr-1">
              <svg
                className={
                  "w-4 h-4 transition-transform " +
                  (open ? "rotate-180" : "rotate-0")
                }
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              key="menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute z-40 mt-2 w-[220px] max-h-[160px]
               overflow-y-auto overflow-x-hidden rounded-md border
                border-gray-200 bg-white shadow-lg text-sm"
              role="listbox"
              aria-multiselectable="true"
            >
              {names.map((name) => {
                const active = selected.includes(name);
                return (
                  <li
                    key={name}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(name);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") toggleItem(name);
                    }}
                    role="option"
                    aria-selected={active}
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.995 }}
                      className={
                        "flex items-center justify-between px-2 py-1 cursor-pointer select-none " +
                        (active ? "bg-blue-50" : "hover:bg-gray-50")
                      }
                    >
                      <div
                        className={
                          active
                            ? "font-medium text-blue-800"
                            : "text-gray-800"
                        }
                      >
                        {name}
                      </div>
                      {active && (
                        <svg
                          className="w-4 h-4 text-blue-600"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </motion.div>
                  </li>
                );
              })}
            </motion.ul>
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
          <MultipleSelectTailwind />
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

export default MultiSelectorDropDown;

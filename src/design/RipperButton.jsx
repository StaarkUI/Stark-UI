import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const RipperEffectCard = () => {

  const [ripples, setRipples] = useState([]);
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  function handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size: Math.max(rect.width, rect.height),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  }

  const MyComponent = () => (
    <div className="h-55 flex items-center justify-center">
      <button
        onClick={handleClick}
        className="relative overflow-hidden px-6 py-3 bg-gray-900
        text-white rounded-lg shadow-md
        shadow-gray-500 hover:bg-gray-800 transition"
      >

        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              left: r.x - r.size / 2,
              top: r.y - r.size / 2,
              width: r.size,
              height: r.size,
            }}
            className="absolute rounded-full bg-gray-400"
          />
        ))}
        Click Me
      </button>
    </div>
  );

  const componentCode = `
import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [ripples, setRipples] = useState([]);

  function handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size: Math.max(rect.width, rect.height),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={handleClick}
        className="relative overflow-hidden px-6 py-3 bg-gray-900
        text-white rounded-lg font-semibold shadow-md
        shadow-gray-500 hover:bg-gray-800 transition"
      >

        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              left: r.x - r.size / 2,
              top: r.y - r.size / 2,
              width: r.size,
              height: r.size,
            }}
            className="absolute rounded-full bg-gray-400"
          />
        ))}

        Click Me
      </button>
    </div>
  );
}

export default App;`;


  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col p-6">

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShow("component")}
          className={`px-4 py-2 rounded-lg shadow ${
            show === "component" ? "bg-gray-200" : "hover:bg-gray-100"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setShow("code")}
          className={`px-4 py-2 rounded-lg shadow ${
            show === "code" ? "bg-gray-200" : "hover:bg-gray-100"
          }`}
        >
          Code
        </button>
      </div>

      <div className="w-full">
        {show === "component" ? (
          <MyComponent />
        ) : (
           <div className="overflow-y-auto pl-6 max-h-78 w-full">
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

export default RipperEffectCard;

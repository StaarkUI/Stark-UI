import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const CustomAlart = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const MyComponent = () => {
    const [showAlert, setShowAlert] = useState(false);

    return (
      <div className="p-6 max-w-md mx-auto space-y-4">
        <div className="flex justify-center">
          <button
            onClick={() => setShowAlert(true)}
            className="px-4 py-2 mt-10 bg-gray-100 hover:bg-gray-200 rounded shadow-md shadow-gray-400"
          >
            Alert
          </button>
        </div>

        {/* Alert box */}
 <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}  // jab aayega
            animate={{ opacity: 1, y: 0 }}     // visible hone par
            exit={{ opacity: 0, y: -20 }}      // jab band hoga
            transition={{ duration: 0.4 }}
            className="flex justify-between items-center p-3 rounded bg-gray-200 shadow-md shadow-gray-400"
          >
            <span>⚠ Custom Alert Triggered!</span>
            <button
              onClick={() => setShowAlert(false)}
              className="ml-4 font-bold text-lg"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    );
  };


  const componentCode = `
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <div className="flex justify-center">
        <button
          onClick={() => setShowAlert(true)}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded"
        >
          Alert
        </button>
      </div>

      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex justify-between items-center p-3 rounded bg-gray-200 shadow-md"
          >
            <span>⚠ Custom Alert Triggered!</span>
            <button
              onClick={() => setShowAlert(false)}
              className="ml-4 font-bold text-lg"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

      <div className="w-full mt-4">
        {show === "component" ? (
          <MyComponent />
        ) : (
          <div className="overflow-y-auto pl-6 max-h-78 w-full">
            <div className="rounded-xl relative">
              <pre className="px-5 py-3 text-xs overflow-x-auto">
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

export default CustomAlart;

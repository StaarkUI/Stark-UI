import { div } from "motion/react-client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";


function Alert({ type, message }) {
  const [show, setShow] = useState(true);
  if (!show) return null;


  const styles = {
    success: "bg-white text-black border border-black shadow-md shadow-gray-400",
    error: "bg-black text-white shadow-md shadow-gray-400",
  };

  return (
    <div
      className={`flex justify-between items-center p-3 rounded ${styles[type]}`}
    >
      <span>{message}</span>
      <button onClick={() => setShow(false)} className="ml-4 font-bold text-lg">
        ×
      </button>
    </div>
  );
}


const CustomAlert = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);


  const MyComponent = () => (
    <div className="w-180 h-70 flex justify-center items-center">
      <div className="w-80 flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        >
          <Alert type="success" message="✔ Success: Every thing is perfect!" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        >
          <Alert type="error" message="✖ Error: Something is wrong!" />
        </motion.div>
      </div>
    </div>
  );

  // ye code copy hone wala part hai
  const componentCode = `
import React, { useState } from "react";

function Alert({ type, message }) {
  const [show, setShow] = useState(true);
  if (!show) return null;

  const styles = {
    success: "bg-white text-black border border-black shadow-md shadow-gray-400",
    error: "bg-black text-white border border-white shadow-md shadow-gray-400",
  };

  return (
  <div className={"flex justify-between items-center p-3 rounded " + styles[type]}>
      <span>{message}</span>
      <button onClick={() => setShow(false)} className="ml-4 font-bold text-lg">
        ×
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="p-6 space-y-4 max-w-md mx-auto">
     <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        >
          <Alert type="success" message="✔ Success: Every thing is perfect!" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        >
          <Alert type="error" message="✖ Error: Something is wrong!" />
        </motion.div>
    </div>
  );
}

export default App;

  `;

  // copy logic
  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      {/* Buttons */}
      <div className="flex gap-4 mb-4">
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

      {/* Preview OR Code */}
      <div className="w-full ">
        {show === "component" ? (
          <MyComponent />
        ) : (
          <div className="overflow-y-auto pl-6 max-h-78 w-full">
            <div className="rounded-xl relative">
              <pre className="text-xs whitespace-pre-wrap">
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

export default CustomAlert;

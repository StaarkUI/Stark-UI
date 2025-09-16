import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const EmailInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex justify-center items-center h-70">
      <div
        className="flex items-center border rounded-lg px-3 py-2 w-72 bg-white shadow 
                 outline-none focus-within:ring-3 focus-within:ring-gray-300"
      >
        <input
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Email"
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

const BasicInput = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const componentCode = `
import React, { useState } from "react";

export default function EmailInput() {
  const [value, setValue] = useState("");

  return (
    <div className="flex justify-center items-center h-50">
      <div
        className="flex items-center border rounded-lg px-3 py-2 w-72 bg-white shadow 
                 outline-none focus-within:ring-3 focus-within:ring-gray-300"
      >
        <input
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Email"
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
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
          <EmailInput />   
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

export default BasicInput;
import { motion } from "motion/react";
import React, { useState, useRef } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const InputFile = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const FilePickerComponent = () => {
    const fileRef = useRef(null);
    const [fileName, setFileName] = useState("");

    const openFilePicker = () => {
      if (fileRef.current) fileRef.current.click();
    };

    const handleFileChange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        setFileName(file.name);
      } else {
        setFileName("");
      }
    };

    return (
      <div className="h-60 flex items-center justify-center p-6">
        <div className="max-w-md w-40">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            File
          </label>

          <div
            onClick={openFilePicker}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openFilePicker();
            }}
            className="flex items-center justify-between gap-3 border
           rounded-lg px-3 py-2 cursor-pointer bg-white shadow-sm
            focus:outline-none focus:ring-3 focus:ring-gray-400"
          >
            <div className="text-sm text-gray-600 truncate">
              {fileName ? fileName : "Choose file"}
            </div>
          </div>

          <input
            ref={fileRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
    );
  };

  const componentCode = `
import React, { useRef, useState } from "react";

export default function App() {
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState(""); 

  const openFilePicker = () => {
    if (fileRef.current) fileRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-40">
        <label className="block text-sm font-medium text-gray-700 mb-2">File</label>

        <div
          onClick={openFilePicker}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openFilePicker();
          }}
          className="flex items-center justify-between gap-3 border
           rounded-lg px-3 py-2 cursor-pointer bg-white shadow-sm
            focus:outline-none focus:ring-3 focus:ring-gray-400"
        >
          <div className="text-sm text-gray-600 truncate">
            {fileName ? fileName : "Choose file"}
          </div>
        </div>

        <input
          ref={fileRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
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
          <FilePickerComponent />
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

export default InputFile;

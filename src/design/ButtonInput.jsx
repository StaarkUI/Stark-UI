import { color } from "motion";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const P = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const SubscribeInput = ({ onSubscribe }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.elements.email.value.trim();
      if (!email) return;
      if (onSubscribe) onSubscribe(email);
      e.target.reset();
    };

    return (
      <form
        onSubmit={handleSubmit}
        className="mt-25 w-full max-w-lg mx-auto bg-white/3 backdrop-blur-md
         border border-white/6 p-4 rounded-xl flex gap-3 items-center"
      >
        <label htmlFor="email" className="flex-1">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg
           shadow-sm focus:outline-none focus:ring-3 focus:ring-gray-400
          focus:border-gray-500"
          />
        </label>

        <button
          type="submit"
          className="px-4 py-2 rounded-lg font-semibold bg-gray-200
           text-slate-900 shadow-2xs shadow-gray-300 hover:scale-[1.02]
            transition-transform"
        >
          Subscribe
        </button>
      </form>
    );
  };

  const componentCode = `
import React from "react";

export default function SubscribeInput({ onSubscribe }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    if (!email) return;
    if (onSubscribe) onSubscribe(email);
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-white/3 backdrop-blur-md
       border border-white/6 p-4 rounded-xl flex gap-3 items-center"
    >
      <label htmlFor="email" className="flex-1">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg
         shadow-sm focus:outline-none focus:ring-3 focus:ring-gray-400
        focus:border-gray-500"
        />
      </label>

      <button
        type="submit"
        className="px-4 py-2 rounded-lg font-semibold bg-gray-200
         text-slate-900 shadow-2xs shadow-gray-300 hover:scale-[1.02]
          transition-transform"
      >
        Subscribe
      </button>
    </form>
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
          <SubscribeInput />
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

export default P;

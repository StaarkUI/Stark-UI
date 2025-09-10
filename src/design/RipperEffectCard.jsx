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
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1200);
  }

  const MyComponent = () => (
    <div className="flex items-center justify-center">
      <div
        onClick={handleClick}
        className="relative w-72 h-75 bg-white rounded-2xl
         shadow-xl cursor-pointer overflow-hidden"
      >
        {/* Ripple Layer (sabse upar) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 20, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                left: r.x,
                top: r.y,
                width: 50,
                height: 50,
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="absolute rounded-full bg-gray-200"
            />
          ))}
        </div>

        {/* Card Content (z-10) */}
        <div className="z-10">
          <img
            className="w-72 h-40 object-cover"
            src="https://imgs.search.brave.com/u3Gc3YLnnacajUaRaFd8aGh1A97exKdI_kBbFgfNgGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/dmlkZW8vMjAyMy8w/OC8wMS8xNzQxMTIt/ODUwNzcxMTY2X3Rp/bnkuanBn"
            alt="Tiger"
          />
          <h2 className="mt-4 px-4 text-xl font-bold">Tiger</h2>
          <p className="text-sm mt-2 px-4 text-gray-500">
            The tiger is the largest wild cat, famous for its orange coat with
            black stripes. It symbolizes strength and power.
          </p>
        </div>
      </div>
    </div>
  );

  const componentCode = `import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [ripples, setRipples] = useState([]);

  function handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1200);
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        onClick={handleClick}
        className="relative w-72 h-80 bg-white rounded-2xl
         shadow-xl cursor-pointer overflow-hidden"
      >
        {/* Ripple Layer (sabse upar) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 20, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                left: r.x,
                top: r.y,
                width: 50,
                height: 50,
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="absolute rounded-full bg-gray-200"
            />
          ))}
        </div>

        {/* Card Content (z-10) */}
        <div className="relative z-10">
          <img
            className="w-72 h-40 object-cover"
            src="https://imgs.search.brave.com/O5BOT28iBgPG33YAJPKaSroo3XBqGTIV7giqlU7ZXxw
            /rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTkx/
            NzA3MzkyOC92aWRl/by9hLXdpbGQtYmVh/dXRpZnVsLXJveWFs/LWJlbmdhbC1mZW1h/
            bGUtdGlnZXItcGFu/dGhlcmEtdGlncmlz/LXN3aW1taW5nLWlu/LWEtcG9vbC1vZi13/
            YXRlci1pbi5qcGc_/Yj0xJnM9NjQweDY0/MCZrPTIwJmM9ai1T/aHZObkRVbVdfMFpG/
            cFVjWHMtRmJ5ZEFq/YmhnUlQyT3B1TlpQ/Q2Z1TT0"
            alt="Tiger"
          />
          <h2 className="mt-4 px-4 text-xl font-bold">Tiger</h2>
          <p className="text-sm mt-2 px-4 text-gray-500">
            The tiger is the largest wild cat, famous for its orange coat with
            black stripes. It symbolizes strength and power.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;`;

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

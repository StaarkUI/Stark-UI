import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const VarientInputOtp = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const MyComponent = () => (
    <div className="w-full p-6 flex flex-col gap-6 mt-5">
      <div className="flex gap-8 justify-center">
        <OtpBox variant="flat" />
        <OtpBox variant="bordered" />
      </div>

      <div className="flex gap-8 justify-center">
        <OtpBox variant="underlined" />
        <OtpBox variant="faded" />
      </div>
    </div>
  );

  const componentCode = `
import React, { useState } from "react";

export default function App() {
  return (
    <div className="w-full p-6 flex flex-col gap-6">
      <div className="flex gap-8 justify-center">
        <OtpBox variant="flat" />
        <OtpBox variant="bordered" />
      </div>

      <div className="flex gap-8 justify-center">
        <OtpBox variant="underlined" />
        <OtpBox variant="faded" />
      </div>
    </div>
  );
}

function OtpBox({ variant }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="text-gray-500 font-medium">variant: {variant}</div>
      <OtpInput length={4} variant={variant} />
    </div>
  );
}

function OtpInput({ length = 4, variant = "flat" }) {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      const next = document.getElementById("otp-" + variant + "-" + (index + 1));
      if (next) next.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        const prev = document.getElementById("otp-" + variant + "-" + (index - 1));
        if (prev) {
          newOtp[index - 1] = "";
          setOtp(newOtp);
          prev.focus();
        }
      }
    }
  };

  const getClass = () => {
    if (variant === "bordered") return "border border-gray-400 rounded-md";
    if (variant === "underlined") return "border-b-2 border-gray-500 rounded-none";
    if (variant === "faded") return "bg-gray-100 text-gray-700 rounded-md";
    return "bg-gray-200 text-black rounded-md"; // flat
  };

  return (
    <div className="flex gap-2">
      {otp.map((val, i) => (
        <input
          key={i}
          id={"otp-" + variant + "-" + i}
          type="text"
          maxLength={1}
          value={val}
          placeholder="-"
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className={
            "w-12 h-12 text-center text-lg outline-none focus:ring-2 focus:ring-blue-500 " +
            getClass()
          }
        />
      ))}
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
          <MyComponent />
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

function OtpBox({ variant }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="text-gray-500 font-medium">variant: {variant}</div>
      <OtpInput length={4} variant={variant} />
    </div>
  );
}

function OtpInput({ length = 4, variant = "flat" }) {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      const next = document.getElementById("otp-" + variant + "-" + (index + 1));
      if (next) next.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        const prev = document.getElementById("otp-" + variant + "-" + (index - 1));
        if (prev) {
          newOtp[index - 1] = "";
          setOtp(newOtp);
          prev.focus();
        }
      }
    }
  };

  const getClass = () => {
    if (variant === "bordered") return "border border-gray-400 rounded-md";
    if (variant === "underlined") return "border-b-2 border-gray-500 bg-transparent rounded-none focus:outline-none";
    if (variant === "faded") return "bg-gray-100 text-gray-700 rounded-md";
    return "bg-gray-200 text-black rounded-md";
  };

  return (
    <div className="flex gap-2">
      {otp.map((val, i) => (
        <input
          key={i}
          id={"otp-" + variant + "-" + i}
          type="text"
          maxLength={1}
          value={val}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className={
            "size-10 text-center text-lg outline-none focus:ring-2 focus:ring-gray-400 " +
            getClass()
          }
        />
      ))}
    </div>
  );
}

export default VarientInputOtp;

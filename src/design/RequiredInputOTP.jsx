import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const RequiredInputOTP = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const OtpComponent = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [submittedOtp, setSubmittedOtp] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e, index) => {
      const value = e.target.value.replace(/[^0-9]/g, "");
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById("otp-" + (index + 1)).focus();
      }
    };

    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace") {
        if (otp[index] === "" && index > 0) {
          const newOtp = [...otp];
          newOtp[index - 1] = "";
          setOtp(newOtp);
          document.getElementById("otp-" + (index - 1)).focus();
        }
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (otp.includes("")) {
        setError("Please enter the OTP");
        setSubmittedOtp("");
        return;
      }

      setError("");
      setSubmittedOtp(otp.join(""));
    };

    return (
      <div className="flex justify-center items-center h-65">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-4 p-6 border rounded-xl shadow-lg"
        >
          <div className="flex gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={"otp-" + index}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={digit}
                required
                maxLength="1"
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="size-10 text-center border rounded-lg text-lg
               font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            ))}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="w-full bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Submit
          </motion.button>

          {error && <div className="text-sm text-red-500">{error}</div>}

          {submittedOtp && (
            <div className="text-sm text-gray-700">
              OTP value:{" "}
              <span className="text-md font-medium text-black">{submittedOtp}</span>
            </div>
          )}
        </form>
      </div>
    );
  };

  const componentCode = `
import React, { useState } from "react";

export default function App() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [submittedOtp, setSubmittedOtp] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById("otp-" + (index + 1)).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        document.getElementById("otp-" + (index - 1)).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.includes("")) {
      setError("Please enter the OTP");
      setSubmittedOtp("");
      return;
    }

    setError("");
    setSubmittedOtp(otp.join(""));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-4 p-6 border rounded-xl shadow-lg"
      >
        <div className="flex gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={"otp-" + index}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={digit}
              required
              maxLength="1"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="size-10 text-center border rounded-lg text-lg
             font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-lg
           font-medium hover:bg-gray-800 transition"
        >
          Submit
        </button>

        {error && <div className="text-sm text-red-500">{error}</div>}

        {submittedOtp && (
          <div className="text-sm text-gray-700">
            OTP value:{" "}
            <span className="text-md font-medium text-black">{submittedOtp}</span>
          </div>
        )}
      </form>
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
          <OtpComponent />
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

export default RequiredInputOTP;

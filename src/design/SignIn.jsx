import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FcGoogle } from "react-icons/fc"; 
import { FaApple } from "react-icons/fa"; 
import { FiEye, FiEyeOff } from "react-icons/fi"; 

const Signin = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const MyComponent = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="flex items-center justify-center h-90 bg-white text-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-xs bg-white p-6 rounded-2xl shadow-lg border border-gray-300"
        >
          <h1 className="text-xl font-bold mb-2 text-center">Create an account</h1>
          <p className="text-xs text-gray-600 text-center mb-6">
            Already have an account?{" "}
            <a href="#" className="text-black underline hover:text-gray-700">
              Log in
            </a>
          </p>

          <form className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
              <span
                className="absolute right-3 top-2 text-gray-600 cursor-pointer select-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs">
              <input type="checkbox" className="accent-black" />
              <p>
                I agree to the{" "}
                <a href="#" className="underline hover:text-gray-700">
                  Terms & Conditions
                </a>
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              Create account
            </motion.button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-xs">Or register with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-1/2 flex items-center justify-center gap-1 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <FcGoogle size={18} /> Google
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-1/2 flex items-center justify-center gap-1 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <FaApple size={18} /> Apple
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  };

  const componentCode = `
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { motion } from "framer-motion";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xs bg-white p-6 rounded-2xl shadow-lg border border-gray-300"
      >
        <h1 className="text-xl font-bold mb-2 text-center">Create an account</h1>
        <p className="text-xs text-gray-600 text-center mb-6">
          Already have an account?{" "}
          <a href="#" className="text-black underline hover:text-gray-700">
            Log in
          </a>
        </p>

        <form className="space-y-3">
          <div className="flex gap-2">
            <input type="text" placeholder="First name" className="w-1/2 
            px-3 py-2 text-sm bg-gray-100 border border-gray-300
             rounded-lg focus:outline-none focus:border-black" />
            <input type="text" placeholder="Last name" className="w-1/2
             px-3 py-2 text-sm bg-gray-100 border border-gray-300
              rounded-lg focus:outline-none focus:border-black" />
          </div>

          <input type="email" placeholder="Email" className="w-full px-3 py-2
           text-sm bg-gray-100 border border-gray-300 rounded-lg
            focus:outline-none focus:border-black" />

          <div className="relative">
            <input type={showPassword ? "text" : "password"} placeholder="Enter your password"
             className="w-full px-3 py-2 text-sm bg-gray-100 border border-gray-300
              rounded-lg focus:outline-none focus:border-black" />
            <span className="absolute right-3 top-2 text-gray-600 cursor-pointer select-none"
             onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <input type="checkbox" className="accent-black" />
            <p>I agree to the <a href="#" className="underline
             hover:text-gray-700">Terms & Conditions</a></p>
          </div>

          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit"
           className="w-full py-2 bg-black text-white text-sm font-semibold rounded-lg
            hover:bg-gray-800 transition">
            Create account
          </motion.button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-xs">Or register with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex gap-3">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
           className="w-1/2 flex items-center justify-center gap-1 py-2 text-sm border
            border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <FcGoogle size={18} /> Google
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
          className="w-1/2 flex items-center justify-center gap-1 py-2 text-sm border
           border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <FaApple size={18} /> Apple
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
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

      <div className="w-full mt-4">
        {show === "component" ? (
          <MyComponent />
        ) : (
          <div className="overflow-auto pl-6 max-h-108 w-full">
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

export default Signin;

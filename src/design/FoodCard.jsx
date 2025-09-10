import { color } from "motion";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const FoodCard = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const MyComponent = () => (
    <div className="w-180 h-70 flex justify-center items-center">
      <div className="flex justify-center items-center h-screen">
        <motion.div
          className="w-72 h-80 rounded-2xl overflow-hidden shadow-lg bg-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{
            opacity: 0.8,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut", delay: 0.4 },
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <img
            className="w-full h-38 object-cover"
            src="https://imgs.search.brave.com/r6DqrnlQ7j55jBrQuDsO0bfIxoK4z2SeNeafx_c7TWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iaXJ5YW5pLWlz/LW1peGVkLXJpY2Ut/ZGlzaF84OTEzMzYt/NzQwLmpwZz9zZW10/PWFpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw"
            alt="Chicken Biryani"
          />

          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Chicken Biryani</h3>
            <p className="text-gray-600 text-sm mb-4">
              Authentic Chicken Biryani packed with rich flavors and royal
              taste.
            </p>

            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-green-600">₹299</span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow shadow-green-500"
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const componentCode = `
import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.8, y: 0, transition:{duration: 0.5, ease: "easeInOut", delay: 0.4} }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >

        <img
          className="w-full h-48 object-cover"
          src="https://imgs.search.brave.com/r6DqrnlQ7j55jBrQuDsO0bfIxoK4z2SeNeafx_
          c7TWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1w
          aG90/by9iaXJ5YW5pLWlz/LW1peGVkLXJpY2Ut/ZGlzaF84OTEzMzYt/NzQwLmpwZz9zZW10/PW
          Fpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw"
          alt="Chicken Biryani"
        />

        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Chicken Biryani</h3>
          <p className="text-gray-600 text-sm mb-4">
            Authentic Chicken Biryani packed with rich flavors and royal taste.
          </p>

          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-green-600">₹299</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-green-500 text-white rounded-lg
               hover:bg-green-600 transition shadow shadow-green-500"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      {/* Buttons */}
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

      {/* Preview OR Code */}
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

export default FoodCard;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const P = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  // ✅ MediaControlCard Component
  const MediaControlCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
      setIsPlaying(!isPlaying);
    };

    return (
      <motion.div
        className="flex bg-white shadow-md rounded-lg overflow-hidden max-w-md mx-auto mt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col justify-between p-4 flex-1">
          <div>
            <h2 className="text-xl font-bold text-gray-900">One Thousand Miles</h2>
            <p className="text-gray-500 mt-1">Honey Singh</p>
          </div>

          <div className="flex items-center space-x-2 ml-8 mt-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-gray-200 hover:shadow-md transition"
            >
              <FaStepBackward size={20} />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="p-3 rounded-full hover:bg-gray-200 hover:shadow-md transition"
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-gray-200 hover:shadow-md transition"
            >
              <FaStepForward size={20} />
            </motion.button>
          </div>
        </div>

        <motion.img
          src="https://imgs.search.brave.com/S6xsUJNMw0U_1KyrqWF18EN9n3GPvq04ng7NQKdQ2Q4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpHWXpOR1V3/TVRjdE5URmhOaTAw/TkdJeUxUZzVaR1l0/WVdRNU1HRTBZek16/WXpnelhrRXlYa0Zx/Y0djQC5qcGc"
          alt="One Thousand Miles"
          className="w-50 object-cover"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    );
  };

  // ✅ Code string for copy feature
  const componentCode = `
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

function MediaControlCard() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto mt-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <h2 className="text-xl font-bold text-gray-900">One Thousand Miles</h2>
          <p className="text-gray-500 mt-1">Honey Singh</p>
        </div>

        <div className="flex items-center space-x-2 ml-8 mt-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-gray-200 hover:shadow-md transition"
          >
            <FaStepBackward size={20} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="p-3 rounded-full hover:bg-gray-200 hover:shadow-md transition"
          >
            {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-gray-200 hover:shadow-md transition"
          >
            <FaStepForward size={20} />
          </motion.button>
        </div>
      </div>

      <motion.img
        src="https://imgs.search.brave.com/S6xsUJNMw0U_1KyrqWF18EN9n3GPvq04ng7NQKdQ2Q4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpHWXpOR1V3/TVRjdE5URmhOaTAw/TkdJeUxUZzVaR1l0/WVdRNU1HRTBZek16/WXpnelhrRXlYa0Zx/Y0djQC5qcGc"
        alt="One Thousand Miles"
        className="w-50 object-cover"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export default MediaControlCard;
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
      <div className="w-full">
        {show === "component" ? (
          <MediaControlCard />
        ) : (
          <div className="overflow-y-auto pl-6 max-h-96 w-full">
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

export default P;

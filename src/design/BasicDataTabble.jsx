import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const BasicDataTable = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const BasicTable = () => {
    const rows = [
      { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
      { name: "Ice cream sandwich", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
      { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
      { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
      { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
    ];

    return (
      <div className="overflow-x-auto mt-5 flex justify-center items-center">
        <table className="w-150 border">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left border-b">Dessert (100g serving)</th>
              <th className="px-4 py-2 text-right border-b">Calories</th>
              <th className="px-4 py-2 text-right border-b">Fat (g)</th>
              <th className="px-4 py-2 text-right border-b">Carbs (g)</th>
              <th className="px-4 py-2 text-right border-b">Protein (g)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{row.name}</td>
                <td className="px-4 py-2 text-right border-b">{row.calories}</td>
                <td className="px-4 py-2 text-right border-b">{row.fat}</td>
                <td className="px-4 py-2 text-right border-b">{row.carbs}</td>
                <td className="px-4 py-2 text-right border-b">{row.protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const componentCode = `
import React from "react";

export default function BasicTable() {
  const rows = [
    { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Ice cream sandwich", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
    { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
    { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  ];

  return (
    <div className="overflow-x-auto h-screen flex justify-center items-center">
      <table className="w-150 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left border-b">Dessert (100g serving)</th>
            <th className="px-4 py-2 text-right border-b">Calories</th>
            <th className="px-4 py-2 text-right border-b">Fat (g)</th>
            <th className="px-4 py-2 text-right border-b">Carbs (g)</th>
            <th className="px-4 py-2 text-right border-b">Protein (g)</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{row.name}</td>
              <td className="px-4 py-2 text-right border-b">{row.calories}</td>
              <td className="px-4 py-2 text-right border-b">{row.fat}</td>
              <td className="px-4 py-2 text-right border-b">{row.carbs}</td>
              <td className="px-4 py-2 text-right border-b">{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
          <BasicTable />
        ) : (
          <div className="overflow-y-auto pl-6 max-h-82 w-full">
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

export default BasicDataTable;

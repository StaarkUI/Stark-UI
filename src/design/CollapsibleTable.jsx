import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const data = [
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    price: 3.99,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    price: 4.99,
    history: [
      { date: "2020-02-01", customerId: "22091500", amount: 2 },
      { date: "2020-02-03", customerId: "Anonymous", amount: 1 },
    ],
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
    price: 3.79,
    history: [
      { date: "2020-03-01", customerId: "33091200", amount: 4 },
      { date: "2020-03-05", customerId: "Anonymous", amount: 2 },
    ],
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    price: 2.5,
    history: [
      { date: "2020-04-02", customerId: "44091100", amount: 6 },
      { date: "2020-04-06", customerId: "Anonymous", amount: 1 },
    ],
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    price: 1.5,
    history: [
      { date: "2020-05-01", customerId: "55091300", amount: 3 },
      { date: "2020-05-07", customerId: "Anonymous", amount: 5 },
    ],
  },
];

function Row({ row }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr className="border-b">
        <td className="px-4 py-2">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-600 hover:text-black transition"
          >
            {open ? "▲" : "▼"}
          </button>
        </td>
        <td className="px-4 py-2 font-medium">{row.name}</td>
        <td className="px-4 py-2 text-right">{row.calories}</td>
        <td className="px-4 py-2 text-right">{row.fat}</td>
        <td className="px-4 py-2 text-right">{row.carbs}</td>
        <td className="px-4 py-2 text-right">{row.protein}</td>
      </tr>

      <AnimatePresence>
        {open && (
          <tr>
            <td colSpan={6} className="px-4 py-2 bg-gray-50">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <h3 className="font-semibold mb-2">History</h3>
                <table className="w-full text-sm border">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-2 py-1 text-left">Date</th>
                      <th className="px-2 py-1 text-left">Customer</th>
                      <th className="px-2 py-1 text-right">Amount</th>
                      <th className="px-2 py-1 text-right">Total ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {row.history.map((h, i) => (
                      <tr key={i} className="border-t">
                        <td className="px-2 py-1">{h.date}</td>
                        <td className="px-2 py-1">{h.customerId}</td>
                        <td className="px-2 py-1 text-right">{h.amount}</td>
                        <td className="px-2 py-1 text-right">
                          {(h.amount * row.price).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </td>
          </tr>
        )}
      </AnimatePresence>
    </>
  );
}

const CollapsibleTable = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const MyComponent = () => (
    <div className="p-4 flex justify-center items-center">
      <table className="w-150 border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th></th>
            <th className="px-4 py-2 text-left">Dessert (100g serving)</th>
            <th className="px-4 py-2 text-right">Calories</th>
            <th className="px-4 py-2 text-right">Fat (g)</th>
            <th className="px-4 py-2 text-right">Carbs (g)</th>
            <th className="px-4 py-2 text-right">Protein (g)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <Row key={idx} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );

  const componentCode = `import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    price: 3.99,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    price: 4.99,
    history: [
      { date: "2020-02-01", customerId: "22091500", amount: 2 },
      { date: "2020-02-03", customerId: "Anonymous", amount: 1 },
    ],
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
    price: 3.79,
    history: [
      { date: "2020-03-01", customerId: "33091200", amount: 4 },
      { date: "2020-03-05", customerId: "Anonymous", amount: 2 },
    ],
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    price: 2.5,
    history: [
      { date: "2020-04-02", customerId: "44091100", amount: 6 },
      { date: "2020-04-06", customerId: "Anonymous", amount: 1 },
    ],
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    price: 1.5,
    history: [
      { date: "2020-05-01", customerId: "55091300", amount: 3 },
      { date: "2020-05-07", customerId: "Anonymous", amount: 5 },
    ],
  },
];

function Row({ row }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr className="border-b">
        <td className="px-4 py-2">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-600 hover:text-black transition"
          >
            {open ? "▲" : "▼"}
          </button>
        </td>
        <td className="px-4 py-2 font-medium">{row.name}</td>
        <td className="px-4 py-2 text-right">{row.calories}</td>
        <td className="px-4 py-2 text-right">{row.fat}</td>
        <td className="px-4 py-2 text-right">{row.carbs}</td>
        <td className="px-4 py-2 text-right">{row.protein}</td>
      </tr>

      <AnimatePresence>
        {open && (
          <tr>
            <td colSpan={6} className="px-4 py-2 bg-gray-50">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <h3 className="font-semibold mb-2">History</h3>
                <table className="w-full text-sm border">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-2 py-1 text-left">Date</th>
                      <th className="px-2 py-1 text-left">Customer</th>
                      <th className="px-2 py-1 text-right">Amount</th>
                      <th className="px-2 py-1 text-right">Total ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {row.history.map((h, i) => (
                      <tr key={i} className="border-t">
                        <td className="px-2 py-1">{h.date}</td>
                        <td className="px-2 py-1">{h.customerId}</td>
                        <td className="px-2 py-1 text-right">{h.amount}</td>
                        <td className="px-2 py-1 text-right">
                          {(h.amount * row.price).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </td>
          </tr>
        )}
      </AnimatePresence>
    </>
  );
}

export default function SimpleCollapsibleTable() {
  return (
    <div className="p-4">
      <table className="w-150 border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th></th>
            <th className="px-4 py-2 text-left">Dessert (100g serving)</th>
            <th className="px-4 py-2 text-right">Calories</th>
            <th className="px-4 py-2 text-right">Fat (g)</th>
            <th className="px-4 py-2 text-right">Carbs (g)</th>
            <th className="px-4 py-2 text-right">Protein (g)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <Row key={idx} row={row} />
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
      <div className="flex gap-4 mb-4">
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
          <div className="overflow-y-auto pl-6 max-h-79 w-full">
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

export default CollapsibleTable;

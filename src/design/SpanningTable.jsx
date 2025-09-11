import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return num.toFixed(2);
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Jeans", 5, 1999),
  createRow("Shirt", 10, 499),
  createRow("Tshirt", 2, 299),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const InvoiceTable = () => (
    <div className="flex justify-center items-center h-60">
  <motion.div
    className="max-w-lg mx-auto mt-8 p-4 shadow-md rounded-xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-xl font-bold mb-3 text-center">Invoice Details</h2>
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th colSpan="3" className="py-1.5 px-2.5 border text-center">
              Details
            </th>
            <th className="py-1.5 px-2.5 border text-right">Price</th>
          </tr>
          <tr>
            <th className="py-1.5 px-2.5 border text-left">Desc</th>
            <th className="py-1.5 px-2.5 border text-right">Qty.</th>
            <th className="py-1.5 px-2.5 border text-right">Unit</th>
            <th className="py-1.5 px-2.5 border text-right">Sum</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.desc} className="hover:bg-gray-50 transition-colors">
              <td className="py-1.5 px-2.5 border">{row.desc}</td>
              <td className="py-1.5 px-2.5 border text-right">{row.qty}</td>
              <td className="py-1.5 px-2.5 border text-right">
                {ccyFormat(row.unit)}
              </td>
              <td className="py-1.5 px-2.5 border text-right">
                {ccyFormat(row.price)}
              </td>
            </tr>
          ))}

          <tr className="font-medium">
            <td className="py-1.5 px-2.5 border" rowSpan="3"></td>
            <td className="py-1.5 px-2.5 border" colSpan="2">
              Subtotal
            </td>
            <td className="py-1.5 px-2.5 border text-right">
              {ccyFormat(invoiceSubtotal)}
            </td>
          </tr>

          <tr>
            <td className="py-1.5 px-2.5 border">Tax</td>
            <td className="py-1.5 px-2.5 border text-right">
              {(TAX_RATE * 100).toFixed(0)} %
            </td>
            <td className="py-1.5 px-2.5 border text-right">
              {ccyFormat(invoiceTaxes)}
            </td>
          </tr>

          <tr className="font-bold bg-gray-50">
            <td className="py-1.5 px-2.5 border" colSpan="2">
              Total
            </td>
            <td className="py-1.5 px-2.5 border text-right">
              {ccyFormat(invoiceTotal)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </motion.div>
  </div>
);

const SpanningTable = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const componentCode = `
import React from "react";
import { motion } from "framer-motion";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return num.toFixed(2);
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Jeans", 5, 1999),
  createRow("Shirt", 10, 499),
  createRow("Tshirt", 2, 299),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function InvoiceTable() {
  return (
    <motion.div
      className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-3 text-center">Invoice Details</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th colSpan="3" className="py-1.5 px-2.5 border text-center">
                Details
              </th>
              <th className="py-1.5 px-2.5 border text-right">Price</th>
            </tr>
            <tr>
              <th className="py-1.5 px-2.5 border text-left">Desc</th>
              <th className="py-1.5 px-2.5 border text-right">Qty.</th>
              <th className="py-1.5 px-2.5 border text-right">Unit</th>
              <th className="py-1.5 px-2.5 border text-right">Sum</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.desc} className="hover:bg-gray-50 transition-colors">
                <td className="py-1.5 px-2.5 border">{row.desc}</td>
                <td className="py-1.5 px-2.5 border text-right">{row.qty}</td>
                <td className="py-1.5 px-2.5 border text-right">
                  {ccyFormat(row.unit)}
                </td>
                <td className="py-1.5 px-2.5 border text-right">
                  {ccyFormat(row.price)}
                </td>
              </tr>
            ))}

            <tr className="font-medium">
              <td className="py-1.5 px-2.5 border" rowSpan="3"></td>
              <td className="py-1.5 px-2.5 border" colSpan="2">
                Subtotal
              </td>
              <td className="py-1.5 px-2.5 border text-right">
                {ccyFormat(invoiceSubtotal)}
              </td>
            </tr>

            <tr>
              <td className="py-1.5 px-2.5 border">Tax</td>
              <td className="py-1.5 px-2.5 border text-right">
                {(TAX_RATE * 100).toFixed(0)} %
              </td>
              <td className="py-1.5 px-2.5 border text-right">
                {ccyFormat(invoiceTaxes)}
              </td>
            </tr>

            <tr className="font-bold bg-gray-50">
              <td className="py-1.5 px-2.5 border" colSpan="2">
                Total
              </td>
              <td className="py-1.5 px-2.5 border text-right">
                {ccyFormat(invoiceTotal)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
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
          <InvoiceTable />
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

export default SpanningTable;

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const columns = [
  { key: "firstName", label: "First Name", width: "w-28" },
  { key: "lastName", label: "Last Name", width: "w-28" },
  { key: "age", label: "Age", width: "w-12", numeric: true },
  { key: "state", label: "State", width: "w-40" },
  { key: "phone", label: "Phone Number", width: "w-40" },
];

const rows = [
  {
    id: 1,
    firstName: "Amit",
    lastName: "Sharma",
    age: 28,
    state: "Delhi",
    phone: "9876543210",
  },
  {
    id: 2,
    firstName: "Priya",
    lastName: "Verma",
    age: 25,
    state: "Uttar Pradesh",
    phone: "9876501234",
  },
  {
    id: 3,
    firstName: "Ravi",
    lastName: "Kumar",
    age: 32,
    state: "Bihar",
    phone: "9876123450",
  },
  {
    id: 4,
    firstName: "Sneha",
    lastName: "Gupta",
    age: 22,
    state: "Maharashtra",
    phone: "9823456789",
  },
  {
    id: 5,
    firstName: "Vikram",
    lastName: "Patel",
    age: 30,
    state: "Gujarat",
    phone: "9812345678",
  },
  {
    id: 6,
    firstName: "Anjali",
    lastName: "Singh",
    age: 27,
    state: "Rajasthan",
    phone: "9801122334",
  },
  {
    id: 7,
    firstName: "Rahul",
    lastName: "Mehta",
    age: 29,
    state: "Punjab",
    phone: "9877234567",
  },
  {
    id: 8,
    firstName: "Kiran",
    lastName: "Yadav",
    age: 24,
    state: "Haryana",
    phone: "9898989898",
  },
  {
    id: 9,
    firstName: "Saurabh",
    lastName: "Mishra",
    age: 31,
    state: "Uttarakhand",
    phone: "9778899001",
  },
  {
    id: 10,
    firstName: "Nisha",
    lastName: "Thakur",
    age: 26,
    state: "Madhya Pradesh",
    phone: "9765432109",
  },
  {
    id: 11,
    firstName: "Alok",
    lastName: "Joshi",
    age: 33,
    state: "Himachal Pradesh",
    phone: "9756677889",
  },
  {
    id: 12,
    firstName: "Deepa",
    lastName: "Choudhary",
    age: 23,
    state: "West Bengal",
    phone: "9745566778",
  },
  {
    id: 13,
    firstName: "Sunil",
    lastName: "Rao",
    age: 35,
    state: "Telangana",
    phone: "9734455667",
  },
  {
    id: 14,
    firstName: "Meena",
    lastName: "Iyer",
    age: 28,
    state: "Tamil Nadu",
    phone: "9723344556",
  },
  {
    id: 15,
    firstName: "Arjun",
    lastName: "Nair",
    age: 27,
    state: "Kerala",
    phone: "9712233445",
  },
  {
    id: 16,
    firstName: "Ritika",
    lastName: "Kapoor",
    age: 24,
    state: "Goa",
    phone: "9701122334",
  },
  {
    id: 17,
    firstName: "Manoj",
    lastName: "Das",
    age: 36,
    state: "Odisha",
    phone: "9690011223",
  },
  {
    id: 18,
    firstName: "Shalini",
    lastName: "Roy",
    age: 29,
    state: "Jharkhand",
    phone: "9689900112",
  },
  {
    id: 19,
    firstName: "Harish",
    lastName: "Banerjee",
    age: 34,
    state: "Assam",
    phone: "9678899001",
  },
  {
    id: 20,
    firstName: "Pooja",
    lastName: "Ghosh",
    age: 25,
    state: "Tripura",
    phone: "9667788990",
  },
  {
    id: 21,
    firstName: "Ramesh",
    lastName: "Singhania",
    age: 38,
    state: "Chhattisgarh",
    phone: "9656677889",
  },
  {
    id: 22,
    firstName: "Seema",
    lastName: "Malhotra",
    age: 26,
    state: "Nagaland",
    phone: "9645566778",
  },
  {
    id: 23,
    firstName: "Ajay",
    lastName: "Bhatt",
    age: 30,
    state: "Sikkim",
    phone: "9634455667",
  },
  {
    id: 24,
    firstName: "Lakshmi",
    lastName: "Krishnan",
    age: 29,
    state: "Andhra Pradesh",
    phone: "9623344556",
  },
  {
    id: 25,
    firstName: "Rajesh",
    lastName: "Pillai",
    age: 32,
    state: "Karnataka",
    phone: "9612233445",
  },
  {
    id: 26,
    firstName: "Komal",
    lastName: "Dutta",
    age: 27,
    state: "Manipur",
    phone: "9601122334",
  },
  {
    id: 27,
    firstName: "Ankit",
    lastName: "Agarwal",
    age: 28,
    state: "Mizoram",
    phone: "9590011223",
  },
  {
    id: 28,
    firstName: "Swati",
    lastName: "Sen",
    age: 24,
    state: "Meghalaya",
    phone: "9589900112",
  },
  {
    id: 29,
    firstName: "Mohit",
    lastName: "Khan",
    age: 35,
    state: "Arunachal Pradesh",
    phone: "9578899001",
  },
  {
    id: 30,
    firstName: "Jyoti",
    lastName: "Dasgupta",
    age: 26,
    state: "Nagaland",
    phone: "9567788990",
  },
];

// Table Component
const SimpleTable = () => (
  <div className="flex justify-center items-center h-80">
    <div className="p-2">
      <div className="w-150 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-3 py-2 border-b">
          <h2 className="text-base font-semibold">Users Directory</h2>
          <p className="text-xs text-gray-500">
            30 records (scroll to see all)
          </p>
        </div>

        <div
          className="overflow-scroll overflow-x-hidden"
          style={{ maxHeight: 140 }}
        >
          <table className="min-w-full table-fixed border-collapse text-sm">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={[
                      "px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-gray-600",
                      col.width,
                    ].join(" ")}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, idx) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: idx * 0.005 }}
                  whileHover={{
                    scale: 1.01,
                    backgroundColor: "rgba(59,130,246,0.05)",
                  }}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={[
                        "px-3 py-2 text-gray-700",
                        col.width,
                        col.numeric ? "text-right" : "text-left",
                      ].join(" ")}
                    >
                      {row[col.key]}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-3 py-2 border-t text-xs text-gray-500">
          Showing <strong>{rows.length}</strong> records
        </div>
      </div>
    </div>
  </div>
);

const VirtualizedTable = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const componentCode = `
import React from "react";
import { motion } from "framer-motion";

const columns = [
  { key: "firstName", label: "First Name", width: "w-28" },
  { key: "lastName", label: "Last Name", width: "w-28" },
  { key: "age", label: "Age", width: "w-12", numeric: true },
  { key: "state", label: "State", width: "w-40" },
  { key: "phone", label: "Phone Number", width: "w-40" },
];

const rows = [
  {
    id: 1,
    firstName: "Amit",
    lastName: "Sharma",
    age: 28,
    state: "Delhi",
    phone: "9876543210",
  },
  {
    id: 2,
    firstName: "Priya",
    lastName: "Verma",
    age: 25,
    state: "Uttar Pradesh",
    phone: "9876501234",
  },
  {
    id: 3,
    firstName: "Ravi",
    lastName: "Kumar",
    age: 32,
    state: "Bihar",
    phone: "9876123450",
  },
  {
    id: 4,
    firstName: "Sneha",
    lastName: "Gupta",
    age: 22,
    state: "Maharashtra",
    phone: "9823456789",
  },
  {
    id: 5,
    firstName: "Vikram",
    lastName: "Patel",
    age: 30,
    state: "Gujarat",
    phone: "9812345678",
  },
  {
    id: 6,
    firstName: "Anjali",
    lastName: "Singh",
    age: 27,
    state: "Rajasthan",
    phone: "9801122334",
  },
  {
    id: 7,
    firstName: "Rahul",
    lastName: "Mehta",
    age: 29,
    state: "Punjab",
    phone: "9877234567",
  },
  {
    id: 8,
    firstName: "Kiran",
    lastName: "Yadav",
    age: 24,
    state: "Haryana",
    phone: "9898989898",
  },
  {
    id: 9,
    firstName: "Saurabh",
    lastName: "Mishra",
    age: 31,
    state: "Uttarakhand",
    phone: "9778899001",
  },
  {
    id: 10,
    firstName: "Nisha",
    lastName: "Thakur",
    age: 26,
    state: "Madhya Pradesh",
    phone: "9765432109",
  },
  {
    id: 11,
    firstName: "Alok",
    lastName: "Joshi",
    age: 33,
    state: "Himachal Pradesh",
    phone: "9756677889",
  },
  {
    id: 12,
    firstName: "Deepa",
    lastName: "Choudhary",
    age: 23,
    state: "West Bengal",
    phone: "9745566778",
  },
  {
    id: 13,
    firstName: "Sunil",
    lastName: "Rao",
    age: 35,
    state: "Telangana",
    phone: "9734455667",
  },
  {
    id: 14,
    firstName: "Meena",
    lastName: "Iyer",
    age: 28,
    state: "Tamil Nadu",
    phone: "9723344556",
  },
  {
    id: 15,
    firstName: "Arjun",
    lastName: "Nair",
    age: 27,
    state: "Kerala",
    phone: "9712233445",
  },
  {
    id: 16,
    firstName: "Ritika",
    lastName: "Kapoor",
    age: 24,
    state: "Goa",
    phone: "9701122334",
  },
  {
    id: 17,
    firstName: "Manoj",
    lastName: "Das",
    age: 36,
    state: "Odisha",
    phone: "9690011223",
  },
  {
    id: 18,
    firstName: "Shalini",
    lastName: "Roy",
    age: 29,
    state: "Jharkhand",
    phone: "9689900112",
  },
  {
    id: 19,
    firstName: "Harish",
    lastName: "Banerjee",
    age: 34,
    state: "Assam",
    phone: "9678899001",
  },
  {
    id: 20,
    firstName: "Pooja",
    lastName: "Ghosh",
    age: 25,
    state: "Tripura",
    phone: "9667788990",
  },
  {
    id: 21,
    firstName: "Ramesh",
    lastName: "Singhania",
    age: 38,
    state: "Chhattisgarh",
    phone: "9656677889",
  },
  {
    id: 22,
    firstName: "Seema",
    lastName: "Malhotra",
    age: 26,
    state: "Nagaland",
    phone: "9645566778",
  },
  {
    id: 23,
    firstName: "Ajay",
    lastName: "Bhatt",
    age: 30,
    state: "Sikkim",
    phone: "9634455667",
  },
  {
    id: 24,
    firstName: "Lakshmi",
    lastName: "Krishnan",
    age: 29,
    state: "Andhra Pradesh",
    phone: "9623344556",
  },
  {
    id: 25,
    firstName: "Rajesh",
    lastName: "Pillai",
    age: 32,
    state: "Karnataka",
    phone: "9612233445",
  },
  {
    id: 26,
    firstName: "Komal",
    lastName: "Dutta",
    age: 27,
    state: "Manipur",
    phone: "9601122334",
  },
  {
    id: 27,
    firstName: "Ankit",
    lastName: "Agarwal",
    age: 28,
    state: "Mizoram",
    phone: "9590011223",
  },
  {
    id: 28,
    firstName: "Swati",
    lastName: "Sen",
    age: 24,
    state: "Meghalaya",
    phone: "9589900112",
  },
  {
    id: 29,
    firstName: "Mohit",
    lastName: "Khan",
    age: 35,
    state: "Arunachal Pradesh",
    phone: "9578899001",
  },
  {
    id: 30,
    firstName: "Jyoti",
    lastName: "Dasgupta",
    age: 26,
    state: "Nagaland",
    phone: "9567788990",
  },
];

export default function SimpleTable() {
  return (
    <div className="flex justify-center items-center">
      <div className="p-2">
        <div className="w-150 bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-3 py-2 border-b">
            <h2 className="text-base font-semibold">Users Directory</h2>
            <p className="text-xs text-gray-500">
              30 records (scroll to see all)
            </p>
          </div>

          <div
            className="overflow-scroll overflow-x-hidden"
            style={{ maxHeight: 140 }}
          >
            <table className="min-w-full table-fixed border-collapse text-sm">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={[
                        "px-3 py-2 text-left text-xs font-medium" +
                          "uppercase tracking-wide text-gray-600",
                        col.width,
                      ].join(" ")}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, idx) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: idx * 0.005 }}
                    whileHover={{
                      scale: 1.01,
                      backgroundColor: "rgba(59,130,246,0.05)",
                    }}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={[
                          "px-3 py-2 text-gray-700",
                          col.width,
                          col.numeric ? "text-right" : "text-left",
                        ].join(" ")}
                      >
                        {row[col.key]}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-3 py-2 border-t text-xs text-gray-500">
            Showing <strong>{rows.length}</strong> records
          </div>
        </div>
      </div>
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
          <SimpleTable />
        ) : (
          <div className="overflow-y-auto mt-2 pl-6 max-h-81 w-full">
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

export default VirtualizedTable;

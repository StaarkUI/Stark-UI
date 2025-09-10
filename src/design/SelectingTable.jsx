import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdDelete } from "react-icons/md";
import { div } from "framer-motion/client";

const data = [
  { id: 1, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 2, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { id: 3, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { id: 4, name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: 5, name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { id: 6, name: "Honeycomb", calories: 408, fat: 3.2, carbs: 87, protein: 6.5 },
  { id: 7, name: "Ice cream sandwich", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
];

const Selecting_Table = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const SimpleTable = () => {
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("calories");
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const rowsPerPage = 5;

    const handleSort = (col) => {
      const isAsc = orderBy === col && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(col);
    };

    const sortedData = [...data].sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
      return 0;
    });

    const paginatedData = sortedData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );

    const handleSelectAll = (e) => {
      if (e.target.checked) {
        setSelected(paginatedData.map((row) => row.id));
      } else {
        setSelected([]);
      }
    };

    const handleSelect = (id) => {
      if (selected.includes(id)) {
        setSelected(selected.filter((sid) => sid !== id));
      } else {
        setSelected([...selected, id]);
      }
    };

    return (
        <div className="flex justify-center items-center h-75">
      <div className="w-150 p-4 ">
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2">
          {selected.length > 0 ? (
            <span className="text-gray-600">{selected.length} selected</span>
          ) : (
            <span className="font-semibold">Nutrition</span>
          )}
          {selected.length > 0 && (
            <button className="bg-gray-500 text-white px-3 py-1 rounded-full">
              <MdDelete />
            </button>
          )}
        </div>

        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">
                <input
                  type="checkbox"
                  checked={
                    selected.length === paginatedData.length &&
                    paginatedData.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>
              {["name", "calories", "fat", "carbs", "protein"].map((col) => (
                <th
                  key={col}
                  className="p-2 border cursor-pointer"
                  onClick={() => handleSort(col)}
                >
                  {col.toUpperCase()}{" "}
                  {orderBy === col ? (order === "asc" ? "↑" : "↓") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr
                key={row.id}
                className={
                  "hover:bg-gray-100 " +
                  (selected.includes(row.id) ? "bg-blue-100" : "")
                }
              >
                <td className="p-2 border text-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={() => handleSelect(row.id)}
                  />
                </td>
                <td className="p-2 border">{row.name}</td>
                <td className="p-2 border text-center">{row.calories}</td>
                <td className="p-2 border text-center">{row.fat}</td>
                <td className="p-2 border text-center">{row.carbs}</td>
                <td className="p-2 border text-center">{row.protein}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <span>
            Page {page + 1} of {Math.ceil(data.length / rowsPerPage)}
          </span>
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={page >= Math.ceil(data.length / rowsPerPage) - 1}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
      </div>
    );
  };

  const componentCode = `
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const data = [
  { id: 1, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 2, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { id: 3, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  {
    id: 4,
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    id: 5,
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
  },
  {
    id: 6,
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
  },
  {
    id: 7,
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
];

export default function SimpleTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  // Sorting
  const handleSort = (col) => {
    const isAsc = orderBy === col && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(col);
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  // Pagination
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Select logic
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(paginatedData.map((row) => row.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((sid) => sid !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="w-150 p-4">
      <div className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2">
        {selected.length > 0 ? (
          <span className="text-gray-600">{selected.length} selected</span>
        ) : (
          <span className="font-semibold">Nutrition</span>
        )}
        {selected.length > 0 && (
          <button className="bg-gray-500 text-white px-3 py-1 rounded-full">
            <MdDelete />
          </button>
        )}
      </div>

      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">
              <input
                type="checkbox"
                checked={
                  selected.length === paginatedData.length &&
                  paginatedData.length > 0
                }
                onChange={handleSelectAll}
              />
            </th>
            {["name", "calories", "fat", "carbs", "protein"].map((col) => (
              <th
                key={col}
                className="p-2 border cursor-pointer"
                onClick={() => handleSort(col)}
              >
                {col.toUpperCase()}{" "}
                {orderBy === col ? (order === "asc" ? "↑" : "↓") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr
              key={row.id}
              className={
                "hover:bg-gray-100 " +
                (selected.includes(row.id) ? "bg-blue-100" : "")
              }
            >
              <td className="p-2 border text-center">
                <input
                  type="checkbox"
                  checked={selected.includes(row.id)}
                  onChange={() => handleSelect(row.id)}
                />
              </td>
              <td className="p-2 border">{row.name}</td>
              <td className="p-2 border text-center">{row.calories}</td>
              <td className="p-2 border text-center">{row.fat}</td>
              <td className="p-2 border text-center">{row.carbs}</td>
              <td className="p-2 border text-center">{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-2">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <span>
          Page {page + 1} of {Math.ceil(data.length / rowsPerPage)}
        </span>
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={page >= Math.ceil(data.length / rowsPerPage) - 1}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
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
          <SimpleTable />
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

export default Selecting_Table;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiFilter, FiTrash2 } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";


function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Cupcake", 305, 3.7, 67, 4.3),
  createData(2, "Donut", 452, 25.0, 51, 4.9),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
  createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(9, "KitKat", 518, 26.0, 65, 7.0),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0),
  createData(11, "Marshmallow", 318, 0, 81, 2.0),
  createData(12, "Nougat", 360, 19.0, 9, 37.0),
  createData(13, "Oreo", 437, 18.0, 63, 4.0),
];

const headCells = [
  { id: "name", label: "Dessert (100g serving)", numeric: false },
  { id: "calories", label: "Calories", numeric: true },
  { id: "fat", label: "Fat (g)", numeric: true },
  { id: "carbs", label: "Carbs (g)", numeric: true },
  { id: "protein", label: "Protein (g)", numeric: true },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


const SelectingDataTable = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [dense, setDense] = useState(false);

  const sortedRows = React.useMemo(
    () => [...rows].sort(getComparator(order, orderBy)),
    [order, orderBy]
  );

  const visibleRows = React.useMemo(() => {
    const start = page * rowsPerPage;
    return sortedRows.slice(start, start + rowsPerPage);
  }, [sortedRows, page, rowsPerPage]);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(rows.map((r) => r.id));
    } else {
      setSelected([]);
    }
  };

  const handleRowClick = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isSelected = (id) => selected.includes(id);

  const handleChangePage = (dir) => {
    setPage((p) => {
      const next = p + dir;
      const maxPage = Math.max(0, Math.ceil(rows.length / rowsPerPage) - 1);
      if (next < 0) return 0;
      if (next > maxPage) return maxPage;
      return next;
    });
  };

  const handleRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(0);
  };

  const emptyRows = rowsPerPage - visibleRows.length;

  const componentCode = `import React from "react";
import { motion } from "framer-motion";
import { FiFilter, FiTrash2 } from "react-icons/fi";

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Cupcake", 305, 3.7, 67, 4.3),
  createData(2, "Donut", 452, 25.0, 51, 4.9),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
  createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(9, "KitKat", 518, 26.0, 65, 7.0),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0),
  createData(11, "Marshmallow", 318, 0, 81, 2.0),
  createData(12, "Nougat", 360, 19.0, 9, 37.0),
  createData(13, "Oreo", 437, 18.0, 63, 4.0),
];

const headCells = [
  { id: "name", label: "Dessert (100g serving)", numeric: false },
  { id: "calories", label: "Calories", numeric: true },
  { id: "fat", label: "Fat (g)", numeric: true },
  { id: "carbs", label: "Carbs (g)", numeric: true },
  { id: "protein", label: "Protein (g)", numeric: true },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function App() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [dense, setDense] = React.useState(false);

  const sortedRows = React.useMemo(
    () => [...rows].sort(getComparator(order, orderBy)),
    [order, orderBy]
  );

  const visibleRows = React.useMemo(() => {
    const start = page * rowsPerPage;
    return sortedRows.slice(start, start + rowsPerPage);
  }, [sortedRows, page, rowsPerPage]);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(rows.map((r) => r.id));
    } else {
      setSelected([]);
    }
  };

  const handleRowClick = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isSelected = (id) => selected.includes(id);

  const handleChangePage = (dir) => {
    setPage((p) => {
      const next = p + dir;
      const maxPage = Math.max(0, Math.ceil(rows.length / rowsPerPage) - 1);
      if (next < 0) return 0;
      if (next > maxPage) return maxPage;
      return next;
    });
  };

  const handleRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(0);
  };

  const emptyRows = rowsPerPage - visibleRows.length;

  return (
    <div className="w-180 mx-auto p-6">
      {/* Toolbar */}
      <div
        className={
          "flex items-center justify-between p-3 rounded-md mb-4 transition-colors " +
          (selected.length > 0 ? "bg-blue-50" : "bg-white") +
          " shadow-sm"
        }
      >
        <div>
          {selected.length > 0 ? (
            <div className="text-sm font-medium text-blue-700">
              {selected.length} selected
            </div>
          ) : (
            <div className="text-lg font-semibold">Nutrition</div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {selected.length > 0 ? (
            <button
              className="flex items-center gap-1 px-3 py-1 rounded bg-red-100 hover:bg-red-200 text-red-700"
              onClick={() => {
                alert("Delete action (implement as needed)");
                setSelected([]);
              }}
            >
              <FiTrash2 />
              Delete
            </button>
          ) : (
            <button className="flex items-center gap-1 px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">
              <FiFilter />
              Filter
            </button>
          )}

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={dense}
              onChange={(e) => setDense(e.target.checked)}
              className="h-4 w-4"
            />
            Dense
          </label>
        </div>
      </div>

      <div className="shadow border">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selected.length === rows.length}
                  ref={(el) => {
                    if (!el) return;
                    el.indeterminate =
                      selected.length > 0 && selected.length < rows.length;
                  }}
                />
              </th>
              {headCells.map((cell) => (
                <th
                  key={cell.id}
                  className={
                    "px-4 py-2 text-sm font-medium " +
                    (cell.numeric ? "text-right" : "text-left") +
                    " cursor-pointer"
                  }
                  onClick={() => handleRequestSort(cell.id)}
                >
                  <div className="flex items-center justify-between">
                    <span>{cell.label}</span>
                    <span className="text-xs text-gray-500">
                      {orderBy === cell.id
                        ? order === "asc"
                          ? "↑"
                          : "↓"
                        : ""}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white">
            {visibleRows.map((row) => {
              const selectedRow = isSelected(row.id);
              return (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={
                    "border-b " +
                    (selectedRow ? "bg-blue-50" : "bg-white") +
                    " " +
                    (dense ? "text-sm" : "text-base")
                  }
                  onClick={() => handleRowClick(row.id)}
                >
                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRow}
                      onChange={() => handleRowClick(row.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="h-4 w-4"
                    />
                  </td>
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3 text-center">{row.calories}</td>
                  <td className="px-4 py-3 text-center">{row.fat}</td>
                  <td className="px-4 py-3 text-center">{row.carbs}</td>
                  <td className="px-4 py-3 text-center">{row.protein}</td>
                </motion.tr>
              );
            })}
            {emptyRows > 0 &&
              Array.from({ length: emptyRows }).map((_, idx) => (
                <tr
                  key={"empty-" + idx}
                  className={dense ? "h-8" : "h-12"}
                >
                  <td colSpan={6}></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          Rows per page:
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPage}
            className="ml-2 border rounded px-2 py-1 text-sm"
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-600">
            Page {page + 1} of {Math.max(1, Math.ceil(rows.length / rowsPerPage))}
          </div>
          <button
            onClick={() => handleChangePage(-1)}
            className="px-3 py-1 rounded border hover:bg-gray-100"
          >
            Prev
          </button>
          <button
            onClick={() => handleChangePage(1)}
            className="px-3 py-1 rounded border hover:bg-gray-100"
          >
            Next
          </button>
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

      <div className="flex justify-center items-center mt-4">
        {show === "component" ? (
          <div className="w-180 mx-auto p-6">
            <div
              className={
                "flex items-center justify-between p-3 rounded-md mb-4 transition-colors " +
                (selected.length > 0 ? "bg-blue-50" : "bg-white") +
                " shadow-sm"
              }
            >
              <div>
                {selected.length > 0 ? (
                  <div className="text-sm font-medium text-blue-700">
                    {selected.length} selected
                  </div>
                ) : (
                  <div className="text-lg font-semibold">Nutrition</div>
                )}
              </div>

              <div className="flex items-center gap-3">
                {selected.length > 0 ? (
                  <button
                    className="flex items-center gap-1 px-3 py-1 rounded bg-red-100 hover:bg-red-200 text-red-700"
                    onClick={() => {
                      alert("Delete action (implement as needed)");
                      setSelected([]);
                    }}
                  >
                    <FiTrash2 />
                    Delete
                  </button>
                ) : (
                  <button className="flex items-center gap-1 px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">
                    <FiFilter />
                    Filter
                  </button>
                )}

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={dense}
                    onChange={(e) => setDense(e.target.checked)}
                    className="h-4 w-4"
                  />
                  Dense
                </label>
              </div>
            </div>

            <div className="shadow border">
              <table className="min-w-full divide-y">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left">
                      <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={selected.length === rows.length}
                        ref={(el) => {
                          if (!el) return;
                          el.indeterminate =
                            selected.length > 0 &&
                            selected.length < rows.length;
                        }}
                      />
                    </th>
                    {headCells.map((cell) => (
                      <th
                        key={cell.id}
                        className={
                          "px-4 py-2 text-sm font-medium " +
                          (cell.numeric ? "text-right" : "text-left") +
                          " cursor-pointer"
                        }
                        onClick={() => handleRequestSort(cell.id)}
                      >
                        <div className="flex items-center justify-between">
                          <span>{cell.label}</span>
                          <span className="text-xs text-gray-500">
                            {orderBy === cell.id
                              ? order === "asc"
                                ? "↑"
                                : "↓"
                              : ""}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {visibleRows.map((row) => {
                    const selectedRow = isSelected(row.id);
                    return (
                      <motion.tr
                        key={row.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={
                          "border-b " +
                          (selectedRow ? "bg-blue-50" : "bg-white") +
                          " " +
                          (dense ? "text-sm" : "text-base")
                        }
                        onClick={() => handleRowClick(row.id)}
                      >
                        <td className="px-3 py-3">
                          <input
                            type="checkbox"
                            checked={selectedRow}
                            onChange={() => handleRowClick(row.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="h-4 w-4"
                          />
                        </td>
                        <td className="px-4 py-3">{row.name}</td>
                        <td className="px-4 py-3 text-center">
                          {row.calories}
                        </td>
                        <td className="px-4 py-3 text-center">{row.fat}</td>
                        <td className="px-4 py-3 text-center">{row.carbs}</td>
                        <td className="px-4 py-3 text-center">{row.protein}</td>
                      </motion.tr>
                    );
                  })}
                  {emptyRows > 0 &&
                    Array.from({ length: emptyRows }).map((_, idx) => (
                      <tr key={"empty-" + idx} className={dense ? "h-8" : "h-12"}>
                        <td colSpan={6}></td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-600">
                Rows per page:
                <select
                  value={rowsPerPage}
                  onChange={handleRowsPerPage}
                  className="ml-2 border rounded px-2 py-1 text-sm"
                >
                  <option value={4}>4</option>
                  <option value={8}>8</option>
                  <option value={12}>12</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-600">
                  Page {page + 1} of{" "}
                  {Math.max(1, Math.ceil(rows.length / rowsPerPage))}
                </div>
                <button
                  onClick={() => handleChangePage(-1)}
                  className="px-3 py-1 rounded border hover:bg-gray-100"
                >
                  Prev
                </button>
                <button
                  onClick={() => handleChangePage(1)}
                  className="px-3 py-1 rounded border hover:bg-gray-100"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-y-auto pl-6 max-h-109 w-full">
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

export default SelectingDataTable;

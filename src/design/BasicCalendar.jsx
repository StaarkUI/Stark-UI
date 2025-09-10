import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaArrowRight, FaArrowLeftLong } from "react-icons/fa6";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const BasicCalender = () => {
  const [show, setShow] = useState("component");
  const [copied, setCopied] = useState(false);

  const CalendarComponent = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const getDaysInMonth = (month, year) => {
      return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDay = (month, year) => {
      return new Date(year, month, 1).getDay();
    };

    const handlePrev = () => {
      if (month === 0) {
        setMonth(11);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
    };

    const handleNext = () => {
      if (month === 11) {
        setMonth(0);
        setYear(year + 1);
      } else {
        setMonth(month + 1);
      }
    };

    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDay(month, year);

    const cells = [];
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={"empty-" + i}></div>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const isToday =
        d === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();

      cells.push(
        <div
          key={d}
          className={`flex items-center justify-center h-8 w-8 rounded-full text-sm cursor-pointer transition 
            ${isToday ? "bg-gray-600 text-white font-bold" : "hover:bg-gray-200"}`}
        >
          {d}
        </div>
      );
    }

    return (
      <div className="flex justify-center items-center">
        <div className="w-80 p-4 rounded-xl shadow-lg border bg-white">
          <div className="flex justify-between items-center mb-3">
            <button
              onClick={handlePrev}
              className="px-2 py-1 rounded hover:bg-gray-200"
            >
              <FaArrowLeftLong />
            </button>

            <div className="flex items-center gap-2">
              <select
                value={month}
                onChange={(e) => setMonth(parseInt(e.target.value))}
                className="border rounded px-2 py-1 text-sm"
              >
                {months.map((m, i) => (
                  <option key={i} value={i}>
                    {m}
                  </option>
                ))}
              </select>

              <select
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="border rounded px-2 py-1 text-sm"
              >
                {Array.from({ length: 2050 - 1947 + 1 }, (_, i) => 1947 + i).map(
                  (y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  )
                )}
              </select>
            </div>

            <button
              onClick={handleNext}
              className="px-2 py-1 rounded hover:bg-gray-200"
            >
              <FaArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-7 text-center font-semibold text-gray-600 text-sm mb-1">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-gray-700">{cells}</div>
        </div>
      </div>
    );
  };

  const componentCode = `
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeftLong } from "react-icons/fa6";

function App() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDay = (month, year) => new Date(year, month, 1).getDay();

  const handlePrev = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
  };

  const handleNext = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDay(month, year);

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(<div key={"empty-" + i}></div>);
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday =
      d === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear();

    cells.push(
      <div
        key={d}
        className={\`flex items-center justify-center h-8 w-8 
        rounded-full text-sm cursor-pointer transition 
        \${isToday ? "bg-gray-600 text-white font-bold" : "hover:bg-gray-200"}\`}
      >
        {d}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-80 p-4 rounded-xl shadow-lg border bg-white">
        <div className="flex justify-between items-center mb-3">
          <button onClick={handlePrev}><FaArrowLeftLong /></button>
          <div className="flex items-center gap-2">
            <select value={month} onChange={(e) => setMonth(parseInt(e.target.value))}>
              {months.map((m, i) => (<option key={i} value={i}>{m}</option>))}
            </select>
            <select value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
              {Array.from({ length: 2050 - 1947 + 1 }, (_, i) => 1947 + i).map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <button onClick={handleNext}><FaArrowRight /></button>
        </div>
        <div className="grid grid-cols-7 text-center
         font-semibold text-gray-600 text-sm mb-1">
          <div>Su</div><div>Mo</div><div>Tu</div>
          <div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
        </div>
        <div className="grid grid-cols-7 gap-y-1 text-gray-700">{cells}</div>
      </div>
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

      <div className="w-full">
        {show === "component" ? (
          <CalendarComponent />
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

export default BasicCalender;

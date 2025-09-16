import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const ComponentPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeItem, setActiveItem] = useState(null)

  const matches = (item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())

  return (
    <motion.div
      initial={{ x: -250, opacity: 0 }}   // left se start
      animate={{ x: 0, opacity: 1 }}      // apni jagah par aa jayega
      transition={{ type: "spring", stiffness: 70, damping: 20 }} // smooth motion
      className="fixed left-5 top-25 w-55 h-120 rounded-lg p-4 flex flex-col"
    >
      {/* Glow Animation */}
      <style>
        {`
          @keyframes glow {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          .animate-glow {
            animation: glow 2s linear infinite;
            background-size: 200% auto;
          }
        `}
      </style>

      <h1 className="text-2xl font-bold mb-4">Library</h1>

      <input
        type="text"
        placeholder="Search components..."
        className="text-gray-500 w-full px-5 py-1 mb-4 border rounded-md focus:outline-none"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2 className="text-base text-gray-400 font-semibold">Primitives</h2>

      <ul className="space-y-2 overflow-auto scrollbar-hidden flex-1 pr-2">

        <NavLink to="./uialert">
          <li
            onClick={() => setActiveItem("Alert")}
            className={`px-2 py-2 w-12 rounded-lg cursor-pointer hover:bg-gray-100 ${matches("Alert") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Alert"
                ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Alert
            </span>
          </li>
        </NavLink>

        <NavLink to="./uiAuthentication">
          <li
            onClick={() => setActiveItem("Authentication")}
            className={`px-2 py-1 w-29.5 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Authentication") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Authentication"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Authentication
            </span>
          </li>
        </NavLink>

        <NavLink to="./uiAvatar">
          <li
            onClick={() => setActiveItem("Avatar")}
            className={`px-2 py-1 w-15 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Avatar") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Avatar"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Avatar
            </span>
          </li>
        </NavLink>

        <NavLink to="./Uibutton">
          <li
            onClick={() => setActiveItem("Button")}
            className={`px-2 py-1 w-15.5 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Button") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Button"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Button
            </span>
          </li>
        </NavLink>

        <NavLink to="./uicalendar">
          <li
            onClick={() => setActiveItem("Calendar")}
            className={`px-2 py-1 w-19 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Calendar") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Calendar"
                ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Calendar
            </span>
          </li>
        </NavLink>

        <NavLink to="./uicard">
          <li
            onClick={() => setActiveItem("Card")}
            className={`px-2 py-1 w-12 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Card") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Card"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Card
            </span>
          </li>
        </NavLink>

        <NavLink to="./uicarousel">
          <li
            onClick={() => setActiveItem("Carousel")}
            className={`px-2 py-1 w-19 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Carousel") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Carousel"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Carousel
            </span>
          </li>
        </NavLink>

        <NavLink to="./uidatatable">
          <li
            onClick={() => setActiveItem("Data Table")}
            className={`px-2 py-1 w-23 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Data Table") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Data Table"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Data Table
            </span>
          </li>
        </NavLink>

        <NavLink to="./uidatepicker">
          <li
            onClick={() => setActiveItem("Date Picker")}
            className={`px-2 py-1 w-24 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Date Picker") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Date Picker"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Date Picker
            </span>
          </li>
        </NavLink>

        <NavLink to="./uidropdown">
          <li
            onClick={() => setActiveItem("Drop Down")}
            className={`px-2 py-1 w-25 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Drop Down") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Drop Down"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Drop Down
            </span>
          </li>
        </NavLink>

        <NavLink to="./uiinput">
          <li
            onClick={() => setActiveItem("Input1")}
            className={`px-2 py-1 w-13 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Input") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Input1"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Input
            </span>
          </li>
        </NavLink>

        <NavLink to="./uiinput">
          <li
            onClick={() => setActiveItem("Input2")}
            className={`px-2 py-1 w-30 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Input") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Input2"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Input
            </span>
          </li>
        </NavLink>

        <NavLink to="./uiinput">
          <li
            onClick={() => setActiveItem("Input3")}
            className={`px-2 py-1 w-30 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Input") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Input3"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Input
            </span>
          </li>
        </NavLink>

        <NavLink to="./uiinput">
          <li
            onClick={() => setActiveItem("Input4")}
            className={`px-2 py-1 w-30 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Input") ? "" : "hidden"}`}
          >
            <span className={`${activeItem === "Input4"
                ? "text-transparent bg-gradient-to-r  from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
                : "text-black"}`}>
              Input
            </span>
          </li>
        </NavLink>

      </ul>
    </motion.div>
  )
}

export default ComponentPage

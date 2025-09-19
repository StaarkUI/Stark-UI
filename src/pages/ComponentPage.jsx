import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const ComponentPage = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const matches = (item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())

  return (
    <motion.div
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 20 }}
      className="fixed left-5 top-25 w-55 h-120 rounded-lg p-4 flex flex-col"
    >
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

      <ul className="space-y-0.5 overflow-auto scrollbar-hidden flex flex-col flex-1 pr-2">

        <NavLink to="./uialert" className={`px-2 py-2 w-12 rounded-lg cursor-pointer hover:bg-gray-100 ${matches("Alert") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Alert
            </span>
          )}
        </NavLink>

        <NavLink to="./uiAuthentication" className={`px-2 py-1 w-29.5 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Authentication") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Authentication
            </span>
          )}
        </NavLink>

        <NavLink to="./uiAvatar" className={`px-2 py-1 w-15 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Avatar") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Avatar
            </span>
          )}
        </NavLink>

        <NavLink to="./Uibutton" className={`px-2 py-1 w-15.5 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Button") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Button
            </span>
          )}
        </NavLink>

        <NavLink to="./uicalendar" className={`px-2 py-1 w-19 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Calendar") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Calendar
            </span>
          )}
        </NavLink>

        <NavLink to="./uicard" className={`px-2 py-1 w-12 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Card") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Card
            </span>
          )}
        </NavLink>

        <NavLink to="./uicarousel" className={`px-2 py-1 w-19 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Carousel") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Carousel
            </span>
          )}
        </NavLink>

        <NavLink to="./uidatatable" className={`px-2 py-1 w-23 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Data Table") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Data Table
            </span>
          )}
        </NavLink>

        <NavLink to="./uidatepicker" className={`px-2 py-1 w-24 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Date Picker") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Date Picker
            </span>
          )}
        </NavLink>

        <NavLink to="./uidropdown" className={`px-2 py-1 w-25 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Drop Down") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Drop Down
            </span>
          )}
        </NavLink>

        <NavLink to="./uiinput" className={`px-2 py-1 w-13 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Input") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Input
            </span>
          )}
        </NavLink>

        <NavLink to="./uiinputotp" className={`px-2 py-1 w-22 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Input") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Input OTP
            </span>
          )}
        </NavLink>

        <NavLink to="./uiinput" className={`px-2 py-1 w-30 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Input") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Input
            </span>
          )}
        </NavLink>

        <NavLink to="./uiinput" className={`px-2 py-1 w-30 rounded-md cursor-pointer hover:bg-gray-100 ${matches("Input") ? "" : "hidden"}`}>
          {({ isActive }) => (
            <span className={isActive
              ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text animate-glow"
              : "text-black"}>
              Input
            </span>
          )}
        </NavLink>

      </ul>
    </motion.div>
  )
}

export default ComponentPage

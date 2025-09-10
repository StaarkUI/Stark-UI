import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./ComponentPage.css";

const ComponentPage = () => {
  const [searchTerm, setSearchTerm] = useState("")

  // helper function: check if item match kare
  const matches = (item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())

  return (
    <div className="fixed left-5 top-25 w-55 h-114 bg-gray-200 shadow-2xl rounded-lg p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Library</h1>

      <input
        type="text"
        placeholder="Search components..."
        className="text-gray-500 w-full px-5 py-2 mb-4 border rounded-full focus:outline-none"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2 className="text-base text-gray-600 font-semibold">Primitives</h2>

      {/* Sidebar list scrollable banega */}
      <ul className="sidebar-list space-y-2 overflow-y-auto flex-1 pr-2">
        <NavLink to ="./uialert">
        <li
          className={`my-2 px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Alert") ? "" : "hidden"
          }`}
        >
          Alert
        </li>
        </NavLink>

         <NavLink to ="./uiAuthentication">
        <li
          className={`my-2 px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Alert") ? "" : "hidden"
          }`}
        >
          Authentication
        </li>
        </NavLink>

        <NavLink to ="./uiAvatar">
        <li
          className={`my-2 px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Avater") ? "" : "hidden"
          }`}
        >
          Avatar
        </li>
        </NavLink>
       
        <NavLink to ="./Uibutton">
        <li
          className={`mb-2 px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Button") ? "" : "hidden"
          }`}
        >
          Button
        </li>
        </NavLink>

        <NavLink to="./uicalendar">
        <li
          className={`mb-2 px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Card") ? "" : "hidden"
          }`}
        >
          Calendar
        </li>
        </NavLink>

        <NavLink to="./uicard">
        <li
          className={`mb-2 px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Card") ? "" : "hidden"
          }`}
        >
          Card
        </li>
        </NavLink>

        <NavLink to="./uicarousel">
        <li
          className={`mb-2 px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Card") ? "" : "hidden"
          }`}
        >
          Carousel
        </li>
        </NavLink>

        <li
          className={`px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Forms") ? "" : "hidden"
          }`}
        >
          Forms
        </li>
        <li
          className={`px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Table") ? "" : "hidden"
          }`}
        >
          Table
        </li>
        <li
          className={`px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Model") ? "" : "hidden"
          }`}
        >
          Model
        </li>
        <li
          className={`px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Tooltip") ? "" : "hidden"
          }`}
        >
          Tooltip
        </li>
        <li
          className={`px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Dropdown") ? "" : "hidden"
          }`}
        >
          Dropdown
        </li>
        <li
          className={`px-5 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-300 ${
            matches("Sidebar") ? "" : "hidden"
          }`}
        >
          Sidebar
        </li>
      </ul>
    </div>
  )
}

export default ComponentPage

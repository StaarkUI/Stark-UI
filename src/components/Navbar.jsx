import React, { useState } from "react";
import logo2 from "../assets/logo2.jpg";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger & close icons
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  return (
    <div className="flex justify-center">
      <motion.div
        id="navbar"
        className="bg-white flex justify-between items-center px-4 md:px-8 py-3 shadow-md w-screen h-16 fixed top-0 left-0 z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
      >
        {/* Logo */}
        <motion.div
          className="flex gap-2 items-center"
          whileHover={{ scale: 1.1, rotate: 3 }}
        >
          <img
            className="w-12 h-12 rounded-full cursor-pointer"
            src={logo2}
            alt="Light mode Logo"
          />
          <h1 className="brand font-extrabold text-xl">STARK UI</h1>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700 items-center">
          <motion.ul
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <NavLink to="/">
              <li className="px-3 py-1 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer">
                Home
              </li>
            </NavLink>
          </motion.ul>

          <motion.ul
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <NavLink to="/docs">
              <li className="px-3 py-1 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer">
                Docs
              </li>
            </NavLink>
          </motion.ul>

          <motion.ul
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <NavLink to="/component">
              <li className="px-3 py-1 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer">
                Components
              </li>
            </NavLink>
          </motion.ul>

          <motion.ul
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <NavLink to="/contact">
              <li className="px-3 py-1 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer">
                Contact Us
              </li>
            </NavLink>
          </motion.ul>

          {/* Get Started Button (only desktop) */}
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <button
           className="bg-blue-600 text-white rounded-full px-3 py-2 shadow-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={() => navigate("/component")}
          >
            Get Started
          </button>
        </motion.div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX size={28} className="text-gray-700" />
            ) : (
              <FiMenu size={28} className="text-gray-700" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed top-16 right-0 w-2/3 h-screen bg-gray-50 shadow-lg z-40 flex flex-col gap-6 p-6 md:hidden"
        >
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/docs"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Docs
          </NavLink>

          <NavLink
            to="/component"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Components
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Contact Us
          </NavLink>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

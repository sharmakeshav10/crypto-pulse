import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  // State to manage the drawer visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex justify-between items-center py-4 sticky top-0 z-50">
      <Link to="/">
        <h1 className="text-white text-3xl font-bold">CryptoPulse</h1>
      </Link>

      {/* Desktop navigation */}
      <div className="md:flex items-center text-white gap-8 hidden">
        <Link to="/">
          <p className="text-slate-500 font-medium text-lg hover:text-white">
            Home
          </p>
        </Link>
        <Link to="/compare">
          <p className="text-slate-500 font-medium text-lg hover:text-white">
            Compare
          </p>
        </Link>
        {/* <Link to="/watchlist">
          <p className="text-slate-500 font-medium text-lg hover:text-white">
            Watchlist
          </p>
        </Link> */}
        <Link to="/dashboard">
          <Button text={"Dashboard"} />
        </Link>
      </div>

      {/* Mobile UI */}
      <div className="text-center flex md:hidden">
        <button
          className="text-white font-medium rounded-lg text-sm px-5 py-2.5"
          type="button"
          onClick={toggleDrawer} // Toggle the drawer
        >
          <FiMenu size={25} />
        </button>
      </div>

      {/* Side Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-all transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={toggleDrawer} // Close the drawer when clicked outside
      >
        <div
          className={`w-64 h-full bg-gray-800 text-white p-6 transition-all transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the drawer
        >
          <h2 className="text-xl font-bold mb-4">CryptoPulse</h2>
          <Link to="/" onClick={toggleDrawer}>
            <p className="text-slate-500 font-medium hover:text-white mb-4">
              Home
            </p>
          </Link>
          <Link to="/compare" onClick={toggleDrawer}>
            <p className="text-slate-500 font-medium hover:text-white mb-4">
              Compare
            </p>
          </Link>
          <Link to="/watchlist" onClick={toggleDrawer}>
            <p className="text-slate-500 font-medium hover:text-white mb-4">
              Watchlist
            </p>
          </Link>
          <Link to="/dashboard" onClick={toggleDrawer}>
            <Button text={"Dashboard"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

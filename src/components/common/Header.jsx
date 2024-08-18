import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("in header");
  return (
    <div className="flex justify-between items-center py-4 sticky top-0">
      <h1 className="text-white text-2xl font-bold">CryptoPulse</h1>
      <div className="flex items-center text-white gap-4">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/compare">
          <p>Compare</p>
        </Link>
        <Link to="/watchlist">
          <p>Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"} />
        </Link>
      </div>
    </div>
  );
};

export default Header;

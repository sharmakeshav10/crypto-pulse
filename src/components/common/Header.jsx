import React from "react";
import Button from "./Button";

const Header = () => {
  console.log("in header");
  return (
    <div className="flex justify-between items-center py-4 sticky top-0">
      <h1 className="text-white text-2xl font-bold">CryptoPulse</h1>
      <div className="flex items-center text-white gap-4">
        <a>
          <p>Home</p>
        </a>
        <a>
          <p>Compare</p>
        </a>
        <a>
          <p>Watchlist</p>
        </a>
        <a>
          <Button text={"Dashboard"} />
        </a>
      </div>
    </div>
  );
};

export default Header;

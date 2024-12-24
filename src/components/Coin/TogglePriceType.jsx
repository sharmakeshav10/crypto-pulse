import React, { useState } from "react";

const TogglePriceType = ({ priceType, handlePriceTypeChange }) => {
  const [activeButton, setActiveButton] = useState(priceType);

  const handleButtonClick = (value) => {
    setActiveButton(value);
    handlePriceTypeChange(value); // Pass the newType only
  };

  return (
    <div className="flex items-center justify-center my-6">
      <button
        className={`px-6 py-2 rounded-md text-white border border-fuchsia text-sm sm:font-semibold font-light transition-colors duration-200 ${
          activeButton === "prices"
            ? "bg-fuchsia border-b-2 border-fuchsia-800"
            : ""
        }`}
        onClick={() => handleButtonClick("prices")}
      >
        Prices
      </button>

      <button
        className={`px-6 py-2 rounded-md border border-fuchsia text-white text-sm sm:font-semibold font-light transition-colors duration-200 ${
          activeButton === "market_caps"
            ? "bg-fuchsia border-b-2 border-fuchsia-800"
            : ""
        }`}
        onClick={() => handleButtonClick("market_caps")}
      >
        Market Cap
      </button>

      <button
        className={`px-6 py-2 rounded-md border border-fuchsia text-white text-sm sm:font-semibold font-light transition-colors duration-200 ${
          activeButton === "total_volumes"
            ? "bg-fuchsia border-b-2 border-fuchsia-800"
            : ""
        }`}
        onClick={() => handleButtonClick("total_volumes")}
      >
        Total Volume
      </button>
    </div>
  );
};

export default TogglePriceType;

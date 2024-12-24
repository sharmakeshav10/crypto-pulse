import React, { useState } from "react";

const SelectDays = ({ days, handleDaysChange }) => {
  return (
    <div className="flex gap-4 items-center mt-4">
      <h2 className="text-lg font-medium">Price Change in the last</h2>
      <select
        onChange={handleDaysChange}
        value={days}
        className="bg-slate-900 text-white border hover:border-fuchsia border-slate-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors duration-200"
      >
        <option value={7}>7 Days</option>
        <option value={30}>30 Days</option>
        <option value={60}>60 Days</option>
        <option value={90}>90 Days</option>
      </select>
    </div>
  );
};

export default SelectDays;

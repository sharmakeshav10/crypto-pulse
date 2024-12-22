import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ searchCoin, handleSearchChange }) => {
  return (
    <div className="bg-slate-950 rounded-full w-full my-4 flex items-center p-4">
      <CiSearch className="text-slate-300 mx-4" size={20} />
      <input
        className="bg-slate-950 text-slate-300 rounded-full w-full outline-none"
        placeholder="Search your coin..."
        type="text"
        value={searchCoin}
        onChange={(e) => handleSearchChange(e)}
      />
    </div>
  );
};

export default Search;

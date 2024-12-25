import React, { useEffect, useState } from "react";
import { get100Coins } from "../../functions/get100Coins";

const SelectCoins = ({ cryptoOne, cryptoTwo, handleCoinChange }) => {
  const [allCoins, setAllCoins] = useState([]);

  const getCoins = async () => {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div className="flex gap-8">
      <div className="flex gap-4 items-center mt-4 ">
        <h2 className="text-lg text-white font-medium hidden md:flex">
          Crypto 1
        </h2>
        <select
          onChange={(e) => handleCoinChange(e, false)}
          value={cryptoOne}
          className="bg-slate-900 cursor-pointer text-white border hover:border-fuchsia border-slate-600 rounded p-2 w-auto focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors duration-200"
        >
          {allCoins
            .filter((item) => item.id !== cryptoTwo)
            .map((coin) => (
              <option value={coin?.id}>{coin?.name}</option>
            ))}
        </select>
      </div>
      <div className="flex gap-4 items-center mt-4 ">
        <h2 className="text-lg text-white font-medium hidden md:flex">
          Crypto 2
        </h2>
        <select
          onChange={(e) => handleCoinChange(e, true)}
          value={cryptoTwo}
          className="bg-slate-900 cursor-pointer text-white border hover:border-fuchsia border-slate-600 rounded p-2 w-auto focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors duration-200"
        >
          {allCoins
            .filter((item) => item.id !== cryptoOne)
            .map((coin) => (
              <option value={coin?.id}>{coin?.name}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default SelectCoins;

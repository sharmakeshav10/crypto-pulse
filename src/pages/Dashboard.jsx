import React, { useEffect, useState } from "react";
import TabsComponent from "../components/Dashboard/TabsComponent";
import { options } from "../config/appConfig";
import Search from "../components/Dashboard/Search";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

  const handleSearchChange = (e) => {
    setSearchCoin(e.target.value);
    console.log(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchCoin.toLowerCase()) ||
      coin?.symbol.toLowerCase().includes(searchCoin.toLowerCase())
  );

  const fetchCoins = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
        options
      );

      const data = await response.json();
      console.log(data);
      setCoins(data);
    } catch (e) {}
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      <Search searchCoin={searchCoin} handleSearchChange={handleSearchChange} />
      <TabsComponent coins={filteredCoins} />
    </div>
  );
};

export default Dashboard;

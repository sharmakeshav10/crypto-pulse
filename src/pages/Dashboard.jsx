import React, { useEffect, useState } from "react";
import TabsComponent from "../components/Dashboard/TabsComponent";
import { options } from "../config/appConfig";
import Search from "../components/Dashboard/Search";
import Loader from "../components/common/Loader";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //handle onchange for search
  const handleSearchChange = (e) => {
    setSearchCoin(e.target.value);
  };

  //filtered coins after search
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchCoin.toLowerCase()) ||
      coin?.symbol.toLowerCase().includes(searchCoin.toLowerCase())
  );

  //api call for fetching all the coins
  const fetchCoins = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
        options
      );

      const data = await response.json();
      console.log(data);
      setCoins(data);
      setIsLoading(false);
    } catch (e) {}
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search
            searchCoin={searchCoin}
            handleSearchChange={handleSearchChange}
          />
          <TabsComponent coins={filteredCoins} />
        </div>
      )}
    </>
  );
};

export default Dashboard;

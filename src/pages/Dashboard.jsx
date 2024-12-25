import React, { useEffect, useState } from "react";
import TabsComponent from "../components/Dashboard/TabsComponent";
import Search from "../components/Dashboard/Search";
import Loader from "../components/common/Loader";
import { get100Coins } from "../functions/get100Coins";

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
    const myCoins = await get100Coins();
    console.log(myCoins);

    if (myCoins) {
      setCoins(myCoins);
      // setPaginatedCoins()
      setIsLoading(false);
    }
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

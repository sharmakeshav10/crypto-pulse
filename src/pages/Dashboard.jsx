import React, { useEffect, useState } from "react";
import TabsComponent from "../components/Dashboard/TabsComponent";
import { options } from "../config/appConfig";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const fetchCoins = async () => {
    console.log("inside fetch");

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
      <TabsComponent coins={coins} />
    </div>
  );
};

export default Dashboard;

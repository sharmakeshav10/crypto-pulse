import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import ListView from "../components/Dashboard/ListView";
import { coinObject } from "../functions/convertCoinObject";
import CoinInfo from "../components/Coin/CoinInfo";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();

  const fetchCoinData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );

      const data = await response.json();
      console.log(data);

      coinObject(setCoinData, data);

      setIsLoading(false);
    } catch (e) {
      console.log("Error fetching coinData page: ", e);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [id]);

  return (
    <div className="text-white">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ListView coin={coinData} />
          <CoinInfo
            name={coinData.name}
            category={coinData.category}
            description={coinData.description}
          />
        </>
      )}
    </div>
  );
};

export default CoinPage;

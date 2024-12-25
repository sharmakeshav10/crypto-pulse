import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import ListView from "../components/Dashboard/ListView";
import { coinObject } from "../functions/convertCoinObject";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import ChartComponent from "../components/Coin/ChartComponent";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/TogglePriceType";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  const fetchCoinData = async () => {
    if (id) {
      getData();
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [id]);

  const getData = async () => {
    setIsLoading(true);
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices.length > 0) {
        console.log("wuhooo");
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  };

  const handleDaysChange = async (e) => {
    setIsLoading(true);
    setDays(e.target.value);
    const prices = await getCoinPrices(id, e.target.value, priceType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (newType) => {
    setIsLoading(true);
    setPriceType(newType);
    console.log("NEWTYPE: ", newType);

    const prices = await getCoinPrices(id, days, newType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ListView coin={coinData} />
          <div className="bg-slate-950 p-4 rounded-lg w-full mt-6">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              handlePriceTypeChange={handlePriceTypeChange}
              priceType={priceType}
            />
            <ChartComponent
              priceType={priceType}
              chartData={chartData}
              multiAxis={false}
            />
          </div>
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

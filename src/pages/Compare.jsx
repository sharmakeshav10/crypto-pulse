import React, { useEffect, useState } from "react";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/convertCoinObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import Loader from "../components/common/Loader";
import ListView from "../components/Dashboard/ListView";
import CoinInfo from "../components/Coin/CoinInfo";
import ChartComponent from "../components/Coin/ChartComponent";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/TogglePriceType";

const Compare = () => {
  const [cryptoOne, setCryptoOne] = useState("bitcoin");
  const [cryptoTwo, setCryptoTwo] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  const [cryptoOneData, setCryptoOneData] = useState({});
  const [cryptoTwoData, setCryptoTwoData] = useState({});

  const handleDaysChange = async (e) => {
    setIsLoading(true);
    setDays(e.target.value);
    const pricesOne = await getCoinPrices(cryptoOne, e.target.value, priceType);
    const pricesTwo = await getCoinPrices(cryptoTwo, e.target.value, priceType);

    settingChartData(
      setChartData,
      pricesOne,
      pricesTwo,
      cryptoOneData.name,
      cryptoTwoData.name
    );
    setIsLoading(false);
  };

  //initial crypto1 and crypto2 data
  const getDefaultCoinData = async () => {
    setIsLoading(true);
    const dataOne = await getCoinData(cryptoOne);

    if (dataOne) {
      const dataTwo = await getCoinData(cryptoTwo);
      coinObject(setCryptoOneData, dataOne);
      if (dataTwo) {
        coinObject(setCryptoTwoData, dataTwo);
        const pricesOne = await getCoinPrices(cryptoOne, days, priceType);
        const pricesTwo = await getCoinPrices(cryptoTwo, days, priceType);

        settingChartData(
          setChartData,
          pricesOne,
          pricesTwo,
          cryptoOneData.name,
          cryptoTwoData.name
        );

        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getDefaultCoinData();
  }, []);

  //reflect data change on coin change
  const handleCoinChange = async (e, isCoinTwo) => {
    setIsLoading(true);
    if (isCoinTwo) {
      setCryptoTwo(e.target.value);
      const data = await getCoinData(e.target.value);

      coinObject(setCryptoTwoData, data);
      const pricesOne = await getCoinPrices(cryptoOne, days, priceType);
      const pricesTwo = await getCoinPrices(cryptoTwo, days, priceType);
      if (pricesOne.length > 0 && pricesTwo.length > 0) {
        console.log("BOTH PRICES FETCHED: ", pricesOne, pricesTwo);
        setIsLoading(false);
      }
    } else {
      setCryptoOne(e.target.value);
      const data = await getCoinData(e.target.value);

      coinObject(setCryptoOneData, data);
    }
  };

  const handlePriceTypeChange = async (newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const pricesOne = await getCoinPrices(cryptoOne, days, newType);
    const pricesTwo = await getCoinPrices(cryptoTwo, days, newType);

    settingChartData(
      setChartData,
      pricesOne,
      pricesTwo,
      cryptoOneData.name,
      cryptoTwoData.name
    );
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex items-center">
            <SelectCoins
              cryptoOne={cryptoOne}
              handleCoinChange={handleCoinChange}
              cryptoTwo={cryptoTwo}
            />
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <ListView coin={cryptoOneData} />
            <ListView coin={cryptoTwoData} />
          </div>
          <div className="bg-slate-950 p-4 rounded-lg w-full mt-6">
            <TogglePriceType
              handlePriceTypeChange={handlePriceTypeChange}
              priceType={priceType}
            />
            <ChartComponent
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <CoinInfo
            name={cryptoOneData.name}
            category={cryptoOneData.category}
            description={cryptoOneData.description}
          />
          <CoinInfo
            name={cryptoTwoData.name}
            category={cryptoTwoData.category}
            description={cryptoTwoData.description}
          />
        </>
      )}
    </div>
  );
};

export default Compare;

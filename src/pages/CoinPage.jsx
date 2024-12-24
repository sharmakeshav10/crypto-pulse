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

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});

  const fetchCoinData = async () => {
    if (id) {
      getData();
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [id]);

  const getData = async () => {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices.length > 0) {
        console.log("wuhooo");
        setChartData({
          labels: prices.map((coinPrice) => convertDate(coinPrice[0])),
          datasets: [
            {
              data: prices.map((coinPrice) => coinPrice[1]),
              borderColor: "#FF00FF",
              backgroundColor: "rgb(255, 0, 255, 0.1)",
              fill: true,
              tension: 0.25,
              pointRadius: 0,
            },
          ],
        });

        setIsLoading(false);
      }
    }
  };

  const handleDaysChange = async (e) => {
    setIsLoading(true);
    setDays(e.target.value);
    const prices = await getCoinPrices(id, e.target.value);
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
            <ChartComponent chartData={chartData} />
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

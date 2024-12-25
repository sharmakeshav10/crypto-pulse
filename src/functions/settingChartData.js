import { convertDate } from "./convertDate";

export const settingChartData = (
  setChartData,
  pricesOne,
  pricesTwo,
  cryptoOneName,
  cryptoTwoName
) => {
  if (pricesTwo) {
    setChartData({
      labels: pricesOne.map((coinPrice) => convertDate(coinPrice[0])),
      datasets: [
        {
          label: cryptoOneName,
          data: pricesOne.map((coinPrice) => coinPrice[1]),
          borderColor: "#FF00FF",
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "cryptoOne",
        },
        {
          label: cryptoTwoName,
          data: pricesTwo.map((coinPrice) => coinPrice[1]),
          borderColor: "#4db8b8",
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "cryptoTwo",
        },
      ],
    });
  } else {
    setChartData({
      labels: pricesOne.map((coinPrice) => convertDate(coinPrice[0])),
      datasets: [
        {
          data: pricesOne.map((coinPrice) => coinPrice[1]),
          borderColor: "#FF00FF",
          backgroundColor: "rgb(255, 0, 255, 0.1)",
          fill: true,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};

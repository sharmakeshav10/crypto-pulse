import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices) => {
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
};

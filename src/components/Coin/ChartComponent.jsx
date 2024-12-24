import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ChartComponent = ({ chartData, priceType, multiAxis }) => {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: multiAxis ? true : false,
        position: "top",
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default ChartComponent;

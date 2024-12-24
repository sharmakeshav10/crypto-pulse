import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, scales } from "chart.js/auto";
import { callback } from "chart.js/helpers";
import { convertNumber } from "../../functions/convertNumber";

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
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            if (priceType === "prices") {
              return "$" + value.toLocaleString();
            } else {
              return "$" + convertNumber(value);
            }
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default ChartComponent;

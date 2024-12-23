import React from "react";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { Link } from "react-router-dom";

const GridView = ({ coin }) => {
  return (
    <Link key={coin.id} to={`/coin/${coin?.id}`}>
      <div
        className={`bg-slate-950 p-4 rounded-lg ${
          coin?.price_change_percentage_24h >= 0
            ? "hover:border hover:border-green-500"
            : "hover:border hover:border-red-500 "
        }`}
      >
        {/* image, symbol and name */}
        <div className="flex">
          <img src={coin?.image} alt={coin?.name} className="h-20 w-20 mr-4" />
          <div>
            <h2 className="text-white font-bold text-lg">
              {coin?.symbol.toUpperCase()}
            </h2>
            <h3 className="text-white">{coin?.name}</h3>
          </div>
        </div>

        {/* market cap percetnage */}
        <div
          className={`flex items-center gap-6 mt-4 ${
            coin?.price_change_percentage_24h >= 0
              ? "text-green-500"
              : "text-red-500"
          } `}
        >
          <>
            <div
              className={`p-2 border ${
                coin?.price_change_percentage_24h >= 0
                  ? "border-green-500"
                  : "border-red-500"
              } rounded-full`}
            >
              <p className="font-bold">
                {coin?.price_change_percentage_24h.toFixed(2)} %
              </p>
            </div>

            <div
              className={`p-2 border ${
                coin?.price_change_percentage_24h >= 0
                  ? "border-green-500"
                  : "border-red-500"
              } rounded-full`}
            >
              {coin?.price_change_percentage_24h >= 0 ? (
                <IoIosTrendingUp />
              ) : (
                <IoIosTrendingDown />
              )}
            </div>
          </>
        </div>

        {/* current price */}
        {coin?.price_change_percentage_24h >= 0 ? (
          <p className="text-green-500 mt-4 font-bold text-lg">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: coin?.currency || "USD", // Use the coin's currency or default to 'USD'
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(coin?.current_price)}
          </p>
        ) : (
          <p className="text-red-500 mt-4 font-bold text-lg">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: coin?.currency || "USD", // Use the coin's currency or default to 'USD'
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(coin?.current_price)}
          </p>
        )}

        {/* total volume */}
        <p className="mt-4">
          <span className="font-semibold text-sm text-slate-400">
            Total Volume:
          </span>
          <span className="font-medium text-sm text-slate-300">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: coin?.currency || "USD", // Use the coin's currency or default to 'USD'
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(coin?.total_volume)}
          </span>
        </p>
        <p className="">
          <span className="font-semibold text-sm text-slate-400">
            Market Cap:
          </span>
          <span className="font-medium text-sm text-slate-300">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: coin?.currency || "USD", // Use the coin's currency or default to 'USD'
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(coin?.market_cap)}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default GridView;

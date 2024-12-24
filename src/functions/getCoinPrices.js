export const getCoinPrices = async (id, days, priceType) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    );

    const data = await response.json();
    console.log("PRICESS: ", data);

    if (priceType === "market_caps") {
      return data.market_caps;
    } else if (priceType === "total_volumes") {
      return data.total_volumes;
    } else {
      return data.prices;
    }
  } catch (e) {
    console.log("Error fetching coin prices: ", e);
  }
};

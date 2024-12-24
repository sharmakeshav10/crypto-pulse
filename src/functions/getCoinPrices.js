export const getCoinPrices = async (id, days) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    );

    const data = await response.json();
    console.log("PRICESS: ", data.prices);

    return data.prices;
  } catch (e) {
    console.log("Error fetching coin prices: ", e);
  }
};

export const getCoinData = async (id) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );

    const data = await response.json();
    console.log(data);

    return data;
  } catch (e) {
    console.log("Error fetching coinData page: ", e);
  }
};

import { options } from "../config/appConfig";

export const get100Coins = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
      options
    );

    const data = await response.json();
    console.log("DATAAA", data);
    return data;
  } catch (e) {}
};

//can be used across coinpage
export const coinObject = (setState, data) => {
  setState({
    id: data.id,
    symbol: data.symbol,
    name: data.name,
    description: data.description.en,
    category: data.categories[0],
    image: data.image.large,
    price_change_percentage_24h: data.market_data.price_change_percentage_24h,
    total_volume: data.market_data.total_volume.usd,
    current_price: data.market_data.current_price.usd,
    market_cap: data.market_data.market_cap.usd,
  });
};

import React from "react";

import CoinDescription from "./CoinDescription";

const CoinInfo = ({ name, description, category }) => {
  return (
    <div className="bg-slate-950 p-4 rounded-lg w-full my-6">
      <h2 className="text-white text-2xl font-bold">{name}</h2>
      <h4 className="text-slate-500">{category}</h4>
      <CoinDescription description={description} />
    </div>
  );
};

export default CoinInfo;

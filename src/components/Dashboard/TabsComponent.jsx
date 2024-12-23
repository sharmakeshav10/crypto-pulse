import React, { useState } from "react";

import GridView from "./GridView";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import ListView from "./ListView";

const TabsComponent = ({ coins }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Grid", "List"];
  // const contents = ["one", "two"];
  return (
    <>
      <div className="text-lg font-bold text-center shadow flex">
        {tabs.map((tab, index) => (
          <div key={index} className="w-full focus-within:z-10">
            <button
              // href="#"
              onClick={() => setActiveTab(index)}
              className={`inline-block w-full p-4 ${
                activeTab === index
                  ? "text-fuchsia border-b-2 border-fuchsia"
                  : "text-white"
              }`}
              aria-current="page"
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-12">
        {/* Check if activeTab is 0 and coins data is available */}
        {activeTab === 0 ? (
          coins.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {coins.map((coin) => (
                <GridView key={coin.id} coin={coin} />
              ))}
            </div>
          ) : (
            <div className="text-white">No coins available</div>
          )
        ) : activeTab === 1 ? (
          <div className="flex flex-col gap-6">
            {coins.length > 0 ? (
              coins.map((coin) => <ListView key={coin.id} coin={coin} />)
            ) : (
              <div className="text-white">No coins available</div>
            )}
          </div>
        ) : (
          <div className="text-white">Invalid Tab Selected</div>
        )}
      </div>
    </>
  );
};

export default TabsComponent;

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

      {/* tab content */}
      <div className="mt-12">
        {/* Check if activeTab is 0 and coins data is available */}
        {activeTab === 0 ? (
          coins.length > 0 ? (
            <GridView coins={coins} />
          ) : (
            <div className="text-white">No coins available</div>
          )
        ) : activeTab === 1 ? (
          coins.length > 0 ? (
            <ListView coins={coins} />
          ) : (
            <div className="text-white">No coins available</div>
          )
        ) : (
          <div className="text-white">Invalid Tab Selected</div>
        )}
      </div>
    </>
  );
};

export default TabsComponent;

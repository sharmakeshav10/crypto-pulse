import React, { useState } from "react";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Grid", "List"];
  const contents = ["one", "two"];
  return (
    <>
      <div className="hidden text-lg font-bold text-center shadow sm:flex">
        {tabs.map((tab, index) => (
          <div key={index} className="w-full focus-within:z-10">
            <button
              href="#"
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
      <div>
        {contents.map((content, index) => {
          if (activeTab === index) {
            return <div className="text-white">{content}</div>;
          }
        })}
      </div>
    </>
  );
};

export default TabsComponent;

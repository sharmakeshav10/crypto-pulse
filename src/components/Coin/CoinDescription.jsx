import React, { useState } from "react";
import "../Coin/CoinInfo.css";

const CoinDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullDescription = description;
  const truncatedDescription = description.slice(0, 500);

  const handleDescToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const shouldShowReadMore = description.length > 500;

  return (
    <div>
      <p className="text-sm font-semibold text-slate-300 mt-4 coin-description">
        {isExpanded ? (
          <>
            <span dangerouslySetInnerHTML={{ __html: fullDescription }}></span>
            <div
              className="text-blue-500 cursor-pointer mt-2"
              onClick={handleDescToggle}
            >
              Read Less
            </div>
          </>
        ) : (
          <>
            <span
              dangerouslySetInnerHTML={{ __html: truncatedDescription }}
            ></span>
            {shouldShowReadMore && (
              <div
                className="text-blue-500 cursor-pointer mt-2"
                onClick={handleDescToggle}
              >
                Read More
              </div>
            )}
          </>
        )}
      </p>
    </div>
  );
};

export default CoinDescription;

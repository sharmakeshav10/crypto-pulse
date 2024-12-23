import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PuffLoader
        color="#8e44ad"
        size={50}
        loading={true}
        cssOverride={{
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default Loader;

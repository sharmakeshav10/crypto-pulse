import React from "react";
import PrimaryComponent from "../components/LandingPage/PrimaryComponent";
import PhoneComponent from "../components/LandingPage/PhoneComponent";

const Landingpage = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between ">
      <PrimaryComponent />
      <PhoneComponent />
    </div>
  );
};

export default Landingpage;

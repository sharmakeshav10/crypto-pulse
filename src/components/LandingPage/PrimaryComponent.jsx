import React from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";

const PrimaryComponent = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <h1 className="text-white sm:text-5xl md:text-8xl text-center md:text-left font-bold text-2xl ">
        Track Crypto,
      </h1>
      <motion.h1
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1 }}
        className="text-fuchsia sm:text-5xl md:text-8xl text-center md:text-left font-bold text-2xl"
      >
        Make Smarter Decisions
      </motion.h1>
      <div className="flex gap-5 mt-3 text-center md:text-left justify-center md:justify-start">
        <Button text={"Dashboard"} />
        <RWebShare
          data={{
            text: "Explore CryptoPulse, your go-to platform for real-time crypto tracking and insights! 🚀",
            url: "https://crypto-ify.netlify.app",
            title: "CryptoPulse - Real-Time Crypto Tracker",
          }}
          onClick={() => toast.info("Thanks for sharing CryptoPulse!")}
        >
          <Button text={"Share App"} outlined={true} />
        </RWebShare>
      </div>
    </div>
  );
};

export default PrimaryComponent;

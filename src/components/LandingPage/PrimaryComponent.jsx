import React from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";

const PrimaryComponent = () => {
  return (
    <div className="">
      <h1 className="text-white text-8xl font-bold ">Track Crypto</h1>
      <motion.h1
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1 }}
        className="text-fuchsia text-8xl font-bold"
      >
        Real Time
      </motion.h1>
      <div className="flex gap-5 mt-3">
        <Button text={"Dashboard"} />
        <Button text={"Share App"} outlined={true} />
      </div>
    </div>
  );
};

export default PrimaryComponent;

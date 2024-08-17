import React from "react";
import iphone from "../../assets/iphone.png";
import gradient from "../../assets/gradient.png";
import { motion } from "framer-motion";

const PhoneComponent = () => {
  return (
    <div className="w-[1/2]">
      <div className="">
        <motion.img
          src={iphone}
          className="w-96"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeat: Infinity,
            duration: 2,
            repeatType: "mirror",
          }}
        />
      </div>
    </div>
  );
};

export default PhoneComponent;

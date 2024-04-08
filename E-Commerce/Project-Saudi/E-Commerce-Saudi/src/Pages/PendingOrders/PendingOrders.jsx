import React from "react";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/MotionVarient";

//___ Css ___//
import "./PendingOrders.scss";

const PendingOrders = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0, 2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        PendingOrders
      </motion.div>
    </>
  );
};

export default PendingOrders;

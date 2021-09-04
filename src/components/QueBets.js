import React from "react";
import { motion } from "framer-motion";

function QueBets(props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="que-tab"
    >
      <div className="user">id: {props.element.id}</div>
      <div className="value">{props.element.value}</div>
    </motion.div>
  );
}

export default QueBets;

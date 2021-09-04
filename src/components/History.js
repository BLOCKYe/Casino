import React from "react";
import { motion } from "framer-motion";

function History(props) {
  return (
    <motion.div
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 3,
      }}
      className={`tab ${props.element}`}
    ></motion.div>
  );
}

export default History;

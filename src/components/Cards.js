import React from "react";
import { motion } from "framer-motion";

function History(props) {
  return (
    <div>
      {props.status && (
        <motion.div
          initial={{ x: props.first.length > 0 ? -800 : 0 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 20,
          }}
          className={`tab ${props.element} ${props.id === 20 ? "winner" : ""}`}
        >
          <span className="icon-symbol"></span>
        </motion.div>
      )}
    </div>
  );
}

export default History;

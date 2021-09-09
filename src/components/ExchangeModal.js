import { motion } from "framer-motion";
import React from "react";
import Currency from "./Currency";

function ExchangeModal(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      className="modal"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        onClick={() => props.setshowModal(false)}
        className="close"
      >
        ❌
      </motion.div>
      <div>
        {[...props.currency].map((e) => (
          <Currency
            setshowModal={props.setshowModal}
            setactual={props.setactual}
            code={e.code}
            name={e.currency}
            rate={e.mid}
            key={e.currency}
            setrate={props.setrate}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default ExchangeModal;

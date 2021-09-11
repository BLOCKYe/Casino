import { motion } from "framer-motion";
import React from "react";
import Currency from "./Currency";

function ExchangeModal(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      onClick={() => props.setshowModal(false)}
      className="modal"
    >
      <div className="align">
        <div className="currency-container">
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
      </div>
    </motion.div>
  );
}

export default ExchangeModal;

import React, { useState } from "react";
import { motion } from "framer-motion";

function PlaceBet(props) {
  const [placedValue, setplacedValue] = useState("");
  const [betCount, setbetCount] = useState(0);

  // validation
  const handleInput = (e) => {
    if (e.target.value > props.element) e.target.value = props.element;
    if (e.target.value < 0) e.target.value = 0;
    setplacedValue(parseInt(e.target.value));
  };

  return (
    <div className="placebet">
      <div className="balance">
        <div className="balance-value">
          <span className="coin"></span>
          <span>{props.element}</span>
        </div>
      </div>

      <div className="placebet-container">
        <div>
          Place your <strong>bet</strong>
        </div>
        <div className="input-container">
          <div className="placebet-content">
            <span className="coin"></span>
            <input
              onChange={handleInput}
              className="placebet-input"
              type="number"
              value={placedValue}
            ></input>
          </div>

          <div className="bet-value-btn-container">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="bet-value-btn"
              onClick={() =>
                props.element > 100
                  ? setplacedValue(100)
                  : setplacedValue(props.element)
              }
            >
              100
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="bet-value-btn"
              onClick={() =>
                props.element > 1000
                  ? setplacedValue(1000)
                  : setplacedValue(props.element)
              }
            >
              1000
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="bet-value-btn"
              onClick={() => setplacedValue(props.element / 2)}
            >
              {" "}
              1 / 2
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="bet-value-btn"
              onClick={() => setplacedValue(props.element)}
            >
              MAX
            </motion.div>
          </div>
        </div>

        <div className="bet-container">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setbetCount(betCount + 1);
              props.getBet(
                betCount,
                placedValue > 0 ? placedValue : 0,
                "amber"
              );
              setplacedValue("");
            }}
            className="bet-amber-btn"
          >
            bet amber
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setbetCount(betCount + 1);
              props.getBet(
                betCount,
                placedValue > 0 ? placedValue : 0,
                "purple"
              );
              setplacedValue("");
            }}
            className="bet-purple-btn"
          >
            bet purple
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PlaceBet;

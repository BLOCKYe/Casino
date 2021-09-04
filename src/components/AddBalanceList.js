import React from "react";
import { motion } from "framer-motion";

function AddBalanceList(props) {
  return (
    <div>
      <div className="deposit-balance">
        <div className="deposit-balance-title">Balance</div>
        <div className="deposit-balance-value">
          <span className="coin"></span>
          <span>{props.balance}</span>
        </div>
      </div>

      <div>
        Add <strong>balance</strong> to your <strong>wallet</strong>
      </div>

      <div className="deposit-tabs">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            props.setDepositValue(1);
          }}
          className="deposit-tab"
        >
          1
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            props.setDepositValue(2);
          }}
          className="deposit-tab"
        >
          2
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            props.setDepositValue(5);
          }}
          className="deposit-tab"
        >
          5
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            props.setDepositValue(10);
          }}
          className="deposit-tab"
        >
          10
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            props.setDepositValue(25);
          }}
          className="deposit-tab"
        >
          25
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            props.setDepositValue(50);
          }}
          className="deposit-tab"
        >
          50
        </motion.div>
      </div>
    </div>
  );
}

export default AddBalanceList;

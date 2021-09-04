import React from "react";
import { motion } from "framer-motion";

function AddBalanceInput(props) {
  const handleInput = (e) => {
    if (e.target.value < 0) e.target.value = 0;
    if (e.target.value > 10000) e.target.value = 10000;
    props.setDepositValue(e.target.value);
  };

  const addBalance = () => {
    let deposit =
      props.depositValue === "" ? 0 : parseInt(props.depositValue) * 100;
    props.setBalance(parseInt(props.balance) + deposit);
    props.setDepositValue("");
  };

  return (
    <div className="exchange">
      <div className="add-title">Your payment</div>
      <div className="add-container">
        <input
          onChange={handleInput}
          className="add-input"
          type="number"
          value={props.depositValue}
        ></input>
        <div className="add-currency">USD</div>
      </div>

      <div className="add-title">You will get</div>
      <div className="add-conv">
        <div className="coin"></div>
        <div className="add-conv-value">{props.depositValue * 100}</div>
      </div>

      <div className="confirm-btn-container">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={addBalance}
          className="confirm-btn"
        >
          Confirm
        </motion.button>
      </div>
    </div>
  );
}

export default AddBalanceInput;

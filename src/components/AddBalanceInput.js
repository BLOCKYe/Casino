import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ExchangeModal from "./ExchangeModal";

function AddBalanceInput(props) {
  const [showModal, setshowModal] = useState(false);
  const [currency, setcurrency] = useState("");
  const [actual, setactual] = useState("PLN");
  const [rate, setrate] = useState(1);

  // get currency data
  useEffect(() => {
    fetch(`https://api.nbp.pl/api/exchangerates/tables/a/?format=json`)
      .then((response) => response.json())
      .then((response) => {
        const pln = {
          currency: "polski złoty",
          code: "PLN",
          mid: 1,
        };
        let rates = [pln, ...response[0].rates];
        setcurrency(rates);
      });
  }, []);

  const handleInput = (e) => {
    if (e.target.value < 0) e.target.value = 0;
    if (e.target.value > 10000) e.target.value = 10000;
    props.setDepositValue(e.target.value);
  };

  const addBalance = () => {
    let deposit =
      props.depositValue === ""
        ? 0
        : Math.round(parseInt(props.depositValue) * rate * 100);
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
        <div
          onClick={() => {
            setshowModal(true);
          }}
          className="add-currency"
        >
          💸 {actual}
        </div>
      </div>

      <div className="add-title">You will get</div>
      <div className="add-conv">
        <div className="coin"></div>
        <div className="add-conv-value">
          {Math.round(props.depositValue * rate * 100)}
        </div>
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
      {showModal && (
        <ExchangeModal
          setactual={setactual}
          currency={currency}
          setshowModal={setshowModal}
          setrate={setrate}
        />
      )}
    </div>
  );
}

export default AddBalanceInput;

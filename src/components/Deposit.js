import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import AddBalanceInput from "./AddBalanceInput";
import AddBalanceList from "./AddBalanceList";
import Header from "./Header";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";

function Deposit() {
  const [depositValue, setDepositValue] = useState("");
  const [menu, setmenu] = useState(false);
  const [balance, setBalance] = useState(
    localStorage.getItem("balance") > 100
      ? localStorage.getItem("balance")
      : 100
  );

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  // toggle show/hide menu
  const showMenu = () => {
    setmenu(!menu);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="deposit"
    >
      <Header element={menu} showMenu={showMenu.bind()} />
      <div className="deposit-menu">
        <Menu element={menu} />
      </div>

      <Link to="/">
        <motion.div whileHover={{ x: -5 }} className="back">
          <span className="icon-go"></span>
          <span className="back-text">Back to roulette</span>
        </motion.div>
      </Link>

      <AddBalanceList balance={balance} setDepositValue={setDepositValue} />
      <AddBalanceInput
        balance={balance}
        setBalance={setBalance}
        depositValue={depositValue}
        setDepositValue={setDepositValue}
      />
    </motion.div>
  );
}

export default Deposit;

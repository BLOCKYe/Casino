import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Menu = (props) => {
  return (
    <div className={`menu ${props.element ? "show" : ""}`}>
      <div className="menu-title">Menu</div>
      <div className="menu-balance">
        <div className="menu-balance-title">Balance</div>
        <div className="menu-balance-value">
          <span className="coin"></span>
          <span>{localStorage.getItem("balance")}</span>
        </div>
        <Link to="/deposit">
          <motion.div whileHover={{ x: -5 }} className="menu-add">
            <span className="icon-add"></span>Add <strong>balance</strong>
          </motion.div>
        </Link>
        <div className="games">
          <div className="menu-crash menu-jackpot">
            <span className="icon-go"></span>
            <span className="manu-crash-title">Crash</span>
          </div>
          <div className="menu-crash menu-jackpot">
            <span className="icon-go"></span>
            <span className="manu-crash-title">Jackpot</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { Component } from "react";
import Countdown from "./Countdown";
import { Menu } from "./Menu";
import PlaceBet from "./PlaceBet";
import Que from "./Que";
import Header from "./Header";
import HistoryRender from "./HistoryRender";
import Wheel from "./Wheel";
import { motion } from "framer-motion";

export class Roulette extends Component {
  state = {
    menuOpen: false,
    balance:
      parseInt(localStorage.getItem("balance")) > 100
        ? parseInt(localStorage.getItem("balance"))
        : 100,
    history: [],
    selected: [],
    ambers: [],
    purples: [],
    totalpurples: 0,
    totalAmbers: 0,
    randomCards: [],
    rollStatus: true,
    timer: 15,
  };

  // roulette engine
  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        this.countDown();
      }, 15000 * i);
    }

    this.generateCards();
  }

  // itegrate localstorage
  componentDidUpdate() {
    if (this.state.balance !== localStorage.getItem("balance")) {
      localStorage.setItem("balance", this.state.balance);
    }
  }

  // start
  countDown() {
    this.timer();
    setTimeout(() => {
      this.getPrize();
      this.clearState();
    }, 16000);
  }

  timer = () => {
    for (let i = 1; i < 16; i++) {
      setTimeout(() => {
        this.setState({ timer: this.state.timer - 1 });
      }, 1000 * (i + 1));
    }
  };

  // create random cards
  generateCards = () => {
    let cards = [];

    for (let i = 0; i < 41; i++) {
      cards[i] = {
        color: Math.round(Math.random()) ? "amber" : "purple",
        id: i,
      };
    }

    if (this.state.history.length > 0) {
      // winner card
      cards[20] = {
        color: this.state.history[0].color,
        id: 20,
      };
    }

    this.setState({ randomCards: cards });
  };

  // get bet values
  getBet(id, value, color) {
    const item = {
      id: id,
      color: color,
      value: value,
    };
    const newSelected = [item, ...this.state.selected];
    this.setState({
      selected: newSelected,
      balance: this.state.balance - value,
    });

    if (color === "amber") {
      const amber = {
        id: id,
        value: value,
      };
      const newAmber = [amber, ...this.state.ambers];
      this.setState({
        ambers: newAmber,
        totalAmbers: this.state.totalAmbers + value,
      });
    }

    if (color === "purple") {
      const purple = {
        id: id,
        value: value,
      };
      const newpurple = [purple, ...this.state.purples];
      this.setState({
        purples: newpurple,
        totalpurples: this.state.totalpurples + value,
      });
    }
  }

  // roll algorithm
  rollColor() {
    let value = Math.round(Math.random());
    return value;
  }

  // check win
  getPrize() {
    const allBets = [...this.state.selected];
    let amount = 0;

    const winner = {
      color: this.rollColor() ? "amber" : "purple",
      id: new Date().getTime(),
    };

    const newHistory = [winner, ...this.state.history];
    this.setState({ history: newHistory });

    for (let i = 0; i < allBets.length; i++) {
      if (allBets[i].color === winner.color) amount += allBets[i].value;
    }

    setTimeout(() => {
      this.setState({ balance: this.state.balance + 2 * amount });
    }, 4000);

    this.setState({ rollStatus: false });

    this.generateCards();
  }

  // clear all state
  clearState() {
    this.setState({
      selected: [],
      ambers: [],
      purples: [],
      totalAmbers: 0,
      totalpurples: 0,
      rollStatus: true,
      timer: 15,
    });
  }

  // toggle show/hide menu
  showMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="roulette"
      >
        <Menu element={this.state.menuOpen} balance={this.state.balance} />
        <Header
          element={this.state.menuOpen}
          showMenu={this.showMenu.bind(this)}
        />
        <Countdown timer={this.state.timer} kd={this.state.kd} />
        <Wheel
          element={this.state.randomCards}
          status={this.state.rollStatus}
          first={this.state.history}
        />
        <HistoryRender element={this.state.history} />
        <PlaceBet
          getBet={this.getBet.bind(this)}
          element={this.state.balance}
        />
        <Que element={this.state} />

        {/* <button onClick={this.countDown.bind(this)} className="rollTest">Start roll</button> */}
      </motion.div>
    );
  }
}

export default Roulette;

import React from "react";
import QueBets from "./QueBets";

function Que(props) {
  // render que-amber array
  const queAmber = props.element.ambers.map((e) => {
    return <QueBets element={e} key={e.id} />;
  });
  // render que-amber array
  const quepurple = props.element.purples.map((e) => {
    return <QueBets element={e} key={e.id} />;
  });

  return (
    <div className="que">
      <div className="que-col">
        <div className="total">
          <div className="total-count">
            {props.element.ambers.length}{" "}
            {props.element.ambers.length === 1 ? "Bet" : "Bets"}
          </div>
          <div className="total-value">
            <span className="coin"></span>
            {props.element.totalAmbers}
          </div>
        </div>
        <div className="que-container">{queAmber}</div>
      </div>

      <div className="que-col">
        <div className="total">
          <div className="total-count">
            {props.element.purples.length}{" "}
            {props.element.purples.length === 1 ? "Bet" : "Bets"}
          </div>
          <div className="total-value">
            <span className="coin"></span>
            {props.element.totalpurples}
          </div>
        </div>
        <div className="que-container">{quepurple}</div>
      </div>
    </div>
  );
}

export default Que;

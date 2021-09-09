import React from "react";

function Currency(props) {
  return (
    <div
      onClick={() => {
        props.setactual(props.code);
        props.setrate(props.rate);
        props.setshowModal(false);
      }}
      className="currency"
    >
      <h3 className="code">{props.code}</h3>
      <p className="name">{props.name}</p>
    </div>
  );
}

export default Currency;

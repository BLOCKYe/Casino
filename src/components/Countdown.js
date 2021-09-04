import React from "react";

export default function Logo(props) {
  const style = {
    width: props.timer < 15 ? "0px" : "100%",
    opacity: props.timer < 15 ? "1" : "0.1",
    transition: props.timer < 15 ? "14s" : "0s",
  };
  return (
    <div className="rolling">
      <span className="rolling-text">
        Rolling in <strong>{props.timer}</strong>
      </span>
      <div className="rolling-line" style={style}></div>
    </div>
  );
}

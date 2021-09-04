import React from "react";

function MenuButton(props) {
  return (
    <div className="menu-paths">
      <div
        className={`menu-path-1 ${props.element ? "menu-path-1-after" : ""}`}
      ></div>
      <div
        className={`menu-path-2 ${props.element ? "menu-path-2-after" : ""}`}
      ></div>
      <div
        className={`menu-path-3 ${props.element ? "menu-path-3-after" : ""}`}
      ></div>
    </div>
  );
}

export default MenuButton;

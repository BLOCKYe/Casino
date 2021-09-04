import React from "react";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <span className="icon-logo">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </span>
        </div>
      </Link>

      <div className="menu-button" onClick={props.showMenu.bind()}>
        <MenuButton element={props.element} />
      </div>
    </div>
  );
}

export default Header;

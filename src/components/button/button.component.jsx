import React from "react";
import { Link } from "react-router-dom";
import "./button.styles.scss";

const Button = props => (
  <button
    className="main-button"
    style={{ backgroundColor: `${props.bg ? props.bg : "#ffffff"}` }}
  >
    <Link
      to={props.to}
      style={{ color: props.color ? props.color : "#113077" }}
    >
      {props.children}
    </Link>
  </button>
);

export default Button;

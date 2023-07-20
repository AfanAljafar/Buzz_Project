import React from "react";
import "./Button.css";

const Button = ({ children, type, onClickEvent }) => {
  return (
    <button className="Button-comp" type={type} onClick={onClickEvent}>
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import "./Link.css";
import { Link } from "react-router-dom";

const LinkComp = ({ children, to }) => {
  return (
    <Link className="Link-comp" to={to}>
      {children}
    </Link>
  );
};

export default LinkComp;

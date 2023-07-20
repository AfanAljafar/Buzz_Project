import React from "react";
import { Button, Link, Title } from "../../single";
import "./Header.css";

const Header = () => {
  return (
    <nav className="Header-comp">
      <div className="Header-comp-left">
        <Title children={"Buzz Project!"} />
      </div>
      <div className="Header-comp-right">
        <Link children={"Our Services"} to="/" />
        <Link children={"About Us"} to="/post" />
        <Link children={"Portofolio"} to="/post" />
        <Link children={"Blog"} to="/post" />
        <Button
          children={"Start New Project"}
          type={"button"}
          onClickEvent={() => null}
        />
      </div>
    </nav>
  );
};

export default Header;

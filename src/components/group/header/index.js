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
        <Link children={"Our Services"} to="/Services" />
        <Link children={"About Us"} to="/AboutUs" />
        <Link children={"Portofolio"} to="/Portofolio" />
        <Link children={"Blog"} to="/Blog" />
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

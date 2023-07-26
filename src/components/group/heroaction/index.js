import React from "react";
import "./HeroAction.css";

const HeroAction = () => {
  return (
    <div className="canvas">
      <img src="/heroaction.jpg" alt="heroaction" className="image-hero"></img>
      <div className="image-hero-transparent" />
      <div className="title-in-image-hero">
        Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </div>
    </div>
  );
};

export default HeroAction;

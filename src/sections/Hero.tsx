import Button from "@/components/Button";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <h3 className="hero-title">Hi, my name is </h3>
      <h1 className="hero-title-large">Natnael Demelash</h1>
      <h1 className="hero-title-large hero-title-sub">
        I Build things for the Web
      </h1>
      <p className="hero-text">
        A Passionate Frontend Web Developer based in Addis Ababa, dedicated to
        crafting engaging and user-centric digital experiences
      </p>
      <div className="hero-button">
        <Button text="See recent works" link="/#work" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import "./hero.css";
import logo from "../../assets/cg-logo.png";
import RightHero from "./RightHero/RightHero";
import LeftHero from "./LeftHero/LeftHero";


const Hero = () => {
  return (
    <div className="hero ">

      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <main className="container-isr">
        <section className="left">
          <LeftHero />
        </section>

        <section className="right">
          <RightHero />
        </section>

      </main>
    </div>
  );
};

export default Hero;

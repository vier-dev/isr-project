import React from "react";
import "./about.css";
import Right from "./Right/Right";
import Left from "./Left/Left";

const About = () => {
  return (
    <>
      <div className="about">
        <h2>CloudGate MUROで実現できること</h2>
        <main className="container-isr">
          <section className="left">
            <Left />
          </section>
          <section className="right">
            <Right />
          </section>
        </main>
      </div>
    </>
  );
};

export default About;

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
          <div className="left-context">
            <h1>
                多様な働き方に合わせたクラウド認証も、<br />
                社内システムのログイン統合も、 <br />
                これひとつで。
            </h1>
            <p>
              ゼロトラストモデルを採用したCloudGate MUROは快適で <br />
              よりセキュアなクラウド利用を可能にします。
            </p>
          </div>
            
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

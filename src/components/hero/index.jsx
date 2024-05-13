import React, { memo } from "react";
import "./hero.scss";
import heroImg from "../../assets/images/hero.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__theme">Mobile</h1>
        <h1 className="hero__title">
          Backcover <br /> Tempered Glass
        </h1>
        <button>Shop all</button>
      </div>
      <div className="hero__right">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default memo(Hero);

import React, { memo } from "react";
import logo from "../../assets/icons/logo.svg";

const AboutCards = () => {
  return (
    <div className="about__cards">
      <div className="about__card__first">
        <img
          src="https://fixfactor.co.uk/wp-content/uploads/2021/04/List-of-Phone-Accessories-e1618919187411.jpg"
          alt=""
        />
      </div>
      <div className="about__card__second">
        <h2>Mobile Phone</h2>
        <h2>Accessories</h2>
      </div>
      <div className="about__card__third">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default memo(AboutCards);

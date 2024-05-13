import React, { memo } from "react";
import glass from "../../assets/images/glass.svg";

const Glasses = () => {
  return (
    <section className="glasses">
      <div className="glasses__left">
        <h2 className="glasses__title">
          Shop Premium Tempered Glass in wholesale Price !
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. 
        </p>
        <p>LKR : 299</p>
        <button>Shop Tempered Glass </button>
      </div>
      <div className="glasses__right">
        <img src={glass} alt="" />
      </div>
      <div className="glasses__back"></div>
    </section>
  );
};

export default memo(Glasses);

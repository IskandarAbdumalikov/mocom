import React from "react";
import logo from "../../assets/icons/logo.svg";
import "./about.scss"

const About = () => {
  return (
    <section className="about">
      <h3>about us</h3>
      <h2>
        If you’re looking for a Premium Quality Tempered Glass or Back-cover for
        your Device
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. 
      </p>
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
    </section>
  );
};

export default About;

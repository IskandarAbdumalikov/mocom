import React, { memo } from "react";
import "./about.scss";
import AboutCards from "./AboutCards";

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
      <AboutCards />
    </section>
  );
};

export default memo(About);

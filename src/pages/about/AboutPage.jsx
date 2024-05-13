import React, { memo } from "react";
import AboutCards from "../../components/about/AboutCards";
import "./aboutPage.scss";

const AboutPage = () => {
  let AboutItem = (
    <p className="about__title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas
      tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec
      enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum
      fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet
      suspendisse interdum consectetur. Turpis massa sed elementum tempus
      egestas sed sed. Ornare massa eget egestas purus viverra accumsan in.
      Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi
      lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
      mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod
      nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum
      varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
    </p>
  );
  return (
    <section className="aboutPage container">
      <AboutCards />
      {AboutItem}
      <h1>Price Strategy</h1>
      {AboutItem}
    </section>
  );
};

export default memo(AboutPage);

import React, { memo } from "react";
import Hero from "../../components/hero";
import Products from "../../components/productCards";
import Stick from "../../components/stick";
import About from "../../components/about/About";
import WhyUs from "../../components/whyUs";

import Glasses from "../../components/glasses";

const HomePage = () => {
  return (
    <main className="container">
      <Hero />
      <Products />
      <Stick />
      <About />
      <Glasses />
      <Stick />
      <WhyUs />
    </main>
  );
};

export default memo(HomePage);

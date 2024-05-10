import React from "react";
import "./whyus.scss";
import { DATA } from "../../static/productData";

const WhyUs = () => {
  let whyusItems = DATA?.map((el) => (
    <div key={el.id} className="whyus__card">
      <img src={el.img} alt="" />
      <h2>{el.title}</h2>
      <p>{el.info}</p>
    </div>
  ));
  return (
    <section className="why__us">
      <h3>Why Choose US</h3>
      <div className="whyUs__cards">{whyusItems}</div>
    </section>
  );
};

export default WhyUs;

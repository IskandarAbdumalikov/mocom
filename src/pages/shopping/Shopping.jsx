import React, { memo } from "react";
import Products from "../../components/productCards";
import "./shopping.scss";

const Shopping = () => {
  return (
    <div className="container shopping">
      <h1>Shop All Products</h1>
      <Products />
    </div>
  );
};

export default memo(Shopping);

import React, { useEffect, useState, memo } from "react";
import "./shopping.scss";
import mainUrl from "../../components/api";
import { Link } from "react-router-dom";

const Shopping = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    mainUrl
      .get(`/products`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  let productItem = products?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__card__image">
        <Link to={`product/${el.id}`}>
          <img
            className="product__card__img"
            src={el.images[0]}
            alt={el.title}
          />
        </Link>
      </div>
      <div className="product__card__info">
        <h3>{el.title}</h3>
        <p>{el.brand}</p>
        <p className="product__card__desc">{el.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="container shopping">
      <h1>Shop All Products</h1>
      <div className="wrapper__cards">{productItem}</div>
    </div>
  );
};

export default memo(Shopping);

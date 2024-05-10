import React, { useEffect, useState } from "react";
import "./products.scss";
import mainUrl from "../api/index";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [loader, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const pageCount = 4;
  useEffect(() => {
    setLoading(true);
    mainUrl
      .get(`/products`, {
        params: {
          limit: offset * pageCount,
        },
      })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [offset]);

  let productItem = products?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__card__image">
        <img
          className="product__card__img"
          src={el.images[0]}
          alt={el.title}
        />
      </div>
      <div className="product__card__info">
        <h3>{el.title}</h3>
        <p>{el.brand}</p>
        <p className="product__card__desc">{el.description}</p>
      </div>
    </div>
  ));
  let loadingItem = (
    <div className="loading__card">
      <div className="loading__img bg__animation"></div>
      <div className="loading__info">
        <p className="loading__item bg__animation"></p>
        <p className="loading__item bg__animation"></p>
        <p className="loading__item bg__animation"></p>
      </div>
    </div>
  );
  return (
    <div className="container wrapper">
      <div className="loading">
        {loader ? loadingItem : <></>}
        {loader ? loadingItem : <></>}
        {loader ? loadingItem : <></>}
        {loader ? loadingItem : <></>}
      </div>
      <div className="wrapper__cards">{productItem}</div>

      <button className="see__more-btn" onClick={() => setOffset((p) => p + 1)}>
        See more
      </button>
    </div>
  );
};

export default Products;

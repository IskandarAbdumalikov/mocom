import React from "react";

const NavSearchModule = ({ data }) => {
  // console.log(data.length);
  let searchItems = data?.map((el) => (
    <div className="nav__search__card" key={el.id}>
      <img src={el.images[0]} width={40} alt="" />
      <div className="search__result__right">
        <span>{el.title}</span>
        <p>{el.category}</p>
      </div>
    </div>
  ));
  return (
    <div className="nav__search-results">
      {data && data.length === 0 ? (
        <h3>Malumot topilmadi</h3>
      ) : (
        <>{searchItems}</>
      )}
    </div>
  );
};

export default NavSearchModule;

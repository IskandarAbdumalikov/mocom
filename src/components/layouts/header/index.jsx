import React, { useEffect, useState,memo } from "react";
import "./header.scss";
import logo from "../../../assets/icons/logo.svg";
import search from "../../../assets/icons/search.svg";
import x from "../../../assets/icons/x.svg";
import { FaBars } from "react-icons/fa";
import NavSearchModule from "./navSearchModule";
import mainUrl from "../../api/index";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState("");
  const [shrink, setShrink] = useState(false);
  const [closeNavList, setCloseNavList] = useState(false);
  const [data, setData] = useState(null);
  const handleOpneNavList = () => {
    setCloseNavList(true);
    document.body.style.overflow = "auto";
  };

  const handleCloseNavList = () => {
    setCloseNavList(false);
  };

  useEffect(() => {
    if (!value.trim()) return;
    mainUrl
      .get(`/products/search?q=${value.trim()}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [value]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  {
    closeNavList
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  return (
    <header className={shrink ? " show__header-shrink" : ""}>
      <nav className="container header__nav">
        <div
          onClick={handleCloseNavList}
          className={
            closeNavList ? "nav__overlay show__nav-overlay" : "nav__overlay"
          }
        ></div>
        <ul className={closeNavList ? "nav__list show__nav-list" : "nav__list"}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/shopping"}>Shop all</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About Us</NavLink>
          </li>
          <img
            className="nav__list-closer"
            onClick={handleCloseNavList}
            src={x}
            width={30}
            alt=""
          />
        </ul>
        <div className="nav__logo">
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="nav__btns">
          <form className="nav__form" action="">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search Product"
              className="nav__search__input"
              type="text"
            />
            <img src={search} width={20} alt="" />
            {value.trim() ? <NavSearchModule data={data} /> : <></>}
          </form>
          <FaBars onClick={handleOpneNavList} className="nav__bar" />
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);

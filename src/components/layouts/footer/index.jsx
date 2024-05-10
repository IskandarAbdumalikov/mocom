import React from "react";
import "./footer.scss";
import footerLogo from "../../../assets/icons/footerLogo.svg";
import whatsup from "../../../assets/icons/whatsup.svg";
import facebook from "../../../assets/icons/facebook.svg";
import instagram from "../../../assets/icons/instagram.svg";
import tiktok from "../../../assets/icons/tiktok.svg";




const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="footer__logo">
          <img src={footerLogo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <ul className="footer__list">
          <h3>Contact us</h3>
          <li className="footer__item">
            E:
            <a href="email:"> info@example.com </a>
          </li>
          <li>
            P:
            <a href="tel:+947670000000"> +947670000000 </a>
          </li>
          <li>
            A:
            <a href="address:">123 Hospital rd</a>
          </li>
          <li>
            <a href="address:">Kalubowila, Dehiwela</a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3>Useful links</h3>
          <li className="footer__item">
            <a href="#">Shop All </a>
          </li>
          <li>
            <a href="#"> +Tempered Glass</a>
          </li>
          <li>
            <a href="#">Back-cover</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href="https://www.whatsapp.com/" className="footer__social">
            <img src={whatsup} alt="" />
            Whatsapp
          </a>
          <a href="https://www.facebook.com/" className="footer__social">
            <img src={facebook} alt="" />
            Facebook
          </a>
          <a href="https://www.instagram.com/" className="footer__social">
            <img src={instagram} alt="" />
            Instagram
          </a>
          <a href="https://www.tiktok.com/en/" className="footer__social">
            <img src={tiktok} alt="" />
            Tik Tok
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Fragment } from "react";
import Header from "./components/layouts/header";
import Hero from "./components/hero";
import Products from "./components/productCards";
import Stick from "./components/stick";
import About from "./components/about/About";
import glass from "./assets/images/glass.svg";
import WhyUs from "./components/whyUs";
import Footer from "./components/layouts/footer";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="container">
        <Hero />
        <Products />
        <Stick />
        <About />
        <section className="glasses">
          <div className="glasses__left">
            <h2 className="glasses__title">
              Shop Premium Tempered Glass in wholesale Price !
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. 
            </p>
            <p>LKR : 299</p>
            <button>Shop Tempered Glass </button>
          </div>
          <div className="glasses__right">
            <img src={glass} alt="" />
          </div>
          <div className="glasses__back"></div>
        </section>
        <Stick />
        <WhyUs />
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;

import React, { memo } from "react";
import "./blog.scss";
import blog1 from "../../assets/images/blog1.svg";
import blog2 from "../../assets/images/blog2.svg";

const Blog = () => {
  return (
    <div className="container blog">
      <h1> Blog Posts</h1>
      <section className="blog__section">
        <div className="blog__top blog__portion">
          <div className="blog__top__left">
            <h3>Tempered Glass</h3>
            <p
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum."
              className="blog__title"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
              Ornare massa eget egestas purus viverra accumsan in. Tristique
              senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
              sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
              mauris augue neque gravida in fermentum et. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
              consequat interdum varius sit amet mattis. Odio eu feugiat pretium
              nibh ipsum.
            </p>
          </div>
          <div className="blog__top__right">
            <img src={blog1} alt="" />
          </div>
        </div>
        <div className="blog__middle blog__portion">
          <div className="blog__middle__left">
            <img src={blog2} alt="" />
          </div>
          <div className="blog__middle__right">
            <h3>Back Cover</h3>
            <p
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum."
              className="blog__title"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
              Ornare massa eget egestas purus viverra accumsan in. Tristique
              senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
              sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
              mauris augue neque gravida in fermentum et. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
              consequat interdum varius sit amet mattis. Odio eu feugiat pretium
              nibh ipsum.
            </p>
          </div>
        </div>
        <div className="blog__bottom blog__portion">
          <h3>Mobile Brand and Price Strategy</h3>
          <p
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum."
            className="blog__title"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum.
          </p>
        </div>
      </section>
    </div>
  );
};

export default memo(Blog);

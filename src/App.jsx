import { Fragment } from "react";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Shopping from "./pages/shopping/Shopping";
import Blog from "./pages/blog/Blog";
import AboutPage from "./pages/about/AboutPage";
import NotFound from "./pages/404/NotFound";
import SingleItem from "./pages/singleItem/SingleItem";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shopping" element={<Shopping />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="product/:id" element={<SingleItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;

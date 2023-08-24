import React from "react";

// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// antd
import Layout, { Content } from "antd/es/layout/layout";

// pages
import Home from "./containers/Home/Home";
import WhoWeAre from "./containers/WhoWeAre/WhoWeAre";
import Login from "./containers/Login/Login";
import SignUp from "./containers/SignUp/SignUp";
import Product from "./containers/Product/Product";

// error pages
import ErrorPage404 from "./containers/Error/ErrorPage404";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// css
import "./App.css";
import useWindowDimensions from "./hooks/useWindowDimensions";
import HeroImage from "./components/HeroImage/HeroImage";

function App() {
  const { width } = useWindowDimensions();

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Content className="site-layout">
          <HeroImage />
          <div className={`${width >= 992 ? "plr-100" : "plr-10"}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/register" element={<SignUp />} />
              <Route path="*" element={<ErrorPage404 />} />
            </Routes>
          </div>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;

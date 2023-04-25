import React from "react";

// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// antd
import Layout, { Content } from "antd/es/layout/layout";

// pages
import Home from "./containers/Home/Home";
import About from "./containers/About/About";

// error pages
import ErrorPage404 from "./containers/Error/ErrorPage404";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// css
import "./App.css";

function App() {
  return (
    <Layout>
      <Content className="site-layout-content">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Header />} />
            <Route path="/" element={<Home />} errorElement={ErrorPage404} />
            <Route
              path="/about"
              element={<About />}
              errorElement={ErrorPage404}
            />
          </Routes>
        </BrowserRouter>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;

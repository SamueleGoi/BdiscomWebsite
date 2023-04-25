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
    <BrowserRouter>
      <Layout>
        <Header />
        <Content className="site-layout">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
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

import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// router
// import {
//   BrowserRouter as Router,
//   createBrowserRouter,
//   RouterProvider,
//   createRoutesFromElements,
//   Route,
//   useNavigate,
// } from "react-router-dom";

// pages
// import Home from "./containers/Home/Home";
// import About from "./containers/About/About";

// error pages
// import ErrorPage404 from "./containers/Error/ErrorPage404";

// components
import App from "./App";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

// antd
// import Layout, { Content } from "antd/es/layout/layout";
import { ConfigProvider } from "antd";

// css
import "./index.css";

// const router = createBrowserRouter([
//   { Component: <Header /> },
//   { path: "/", element: <Home />, errorElement: <ErrorPage404 /> },
//   { path: "/about", element: <About />, errorElement: <ErrorPage404 /> },
// ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Home />} errorElement={ErrorPage404} />
//       <Route path="/about" element={<About />} errorElement={ErrorPage404} />
//     </>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2d56a0",
          colorBgBase: "#fff",
        },
      }}
    >
      <App />
    </ConfigProvider>

    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";

import { useNavigate } from "react-router-dom";

// antd
import { Image, Menu } from "antd";
import { Header as HeaderComponent } from "antd/es/layout/layout";

// logo
import LogoBdiscom from "../../resources/logo/Bdiscom_srl.png";

// css
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const items1 = ["about", "products", "contact", "login"].map((key) => ({
    key,
    label: key,
    onClick: () => {
      console.log("key", key);
      // navigate(`/${key}`);
    },
    className: `menu-${key}`,
  }));

  return (
    // <section className="header">
    <HeaderComponent>
      <div className="logo">
        <div
          className="logo__image"
          onClick={() => {
            // navigate("/");
          }}
        />
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        items={items1}
      />
      {/* <div className="login" /> */}
    </HeaderComponent>
    // </section>
  );
};

export default Header;

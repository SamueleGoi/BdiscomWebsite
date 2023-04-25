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
  // const navigate = useNavigate();

  const items1 = ["home", "about"].map((key) => ({
    key,
    label: key,
    onClick: () => {
      console.log("key", key);
      // navigate("/about");
    },
  }));

  return (
    <HeaderComponent className="header">
      <div className="logo">
        <Image
          src={LogoBdiscom}
          alt="BDISCOM"
          preview={false}
          onClick={() => {
            console.log("naviga");
          }}
        />
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        items={items1}
      />
    </HeaderComponent>
  );
};

export default Header;

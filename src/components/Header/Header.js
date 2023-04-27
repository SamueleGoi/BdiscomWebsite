import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

// antd
import { Col, Menu, Row } from "antd";
import { Header as HeaderComponent } from "antd/es/layout/layout";

// icon
import UserIcon from "../../resources/svg-components/UserIcon";
import AngleSmallDown from "../../resources/svg-components/AngleSmallDown";

// css
import "./Header.css";

const Header = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const navigate = useNavigate();

  const openMegaMenuOrNavigate = (key) => {
    switch (key) {
      case "login":
        return console.log("navigate");
      case "products":
        return setOpenSubMenu(true);
      default:
        break;
    }
  };

  const itemMenu = [
    "Who we are",
    "What we do",
    "Products",
    "Contact",
    "About",
    "login",
  ].map((key) => ({
    key,
    icon: key === "products" && <AngleSmallDown color="#2d56a0" />,
    label: key === "login" ? <UserIcon /> : key,
    onClick: () => openMegaMenuOrNavigate(key),
    className: key === "login" && "menu-login--transparent",
  }));

  return (
    <>
      {openSubMenu && (
        <div
          className="header__backdrop"
          onClick={() => setOpenSubMenu(false)}
        ></div>
      )}

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
          items={itemMenu}
        />

        {/* <Menu
          theme="light"
          mode="horizontal"
          style={{ justifyContent: "space-between" }}
        >
          <Menu.ItemGroup className="menu__left">
            {leftMenu.map((ele) => (
              <Menu.Item key={ele.key} onClick={ele.onClick}>
                {ele.label}
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
          <Menu.ItemGroup className="menu__right">
            {loginMenu.map((ele) => (
              <Menu.Item key={ele.key} onClick={ele.onClick} icon={ele.icon}>
                {ele.label}
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
        </Menu> */}
      </HeaderComponent>
      {openSubMenu && (
        <Row className="mega-menu mega-menu--active">
          <Col span={6}></Col>
          <Col span={12}>
            <h1>Product</h1>
          </Col>
          <Col span={6}>
            <h1>X</h1>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Header;

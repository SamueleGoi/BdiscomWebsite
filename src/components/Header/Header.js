import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

// antd
import { Button, Col, Image, Menu, Row } from "antd";
import { Header as HeaderComponent } from "antd/es/layout/layout";

// custom layout
import { CustomButtonLogin } from "../../CustomLayout";

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useScrollPosition from "../../hooks/useScrollPosition";

// constants
import { HEIGHT_POSITION } from "../../utils/constant";

// logo
import LogoBdiscomPrimary from "../../resources/logo/logo.svg";
import LogoBdiscomWhite from "../../resources/logo/logo bianco.svg";

// icon
import UserIcon from "../../resources/svg-components/User";
import AngleSmallDown from "../../resources/svg-components/AngleSmallDown";
import MenuBurger from "../../resources/svg-components/MenuBurger";

// css
import "./Header.css";

const Header = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  // const [pathname, setPathname] = useState("");

  const { width } = useWindowDimensions();

  const scrollPosition = useScrollPosition();

  const navigate = useNavigate();
  const location = useLocation();

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

  const clickToNavigate = (element) => {
    switch (element.key) {
      case "Who we are":
        return navigate("/about");
      case "Login":
        return navigate("/account/login");
      default:
        break;
    }
  };

  const itemMenu = [
    "Who we are",
    "What we do",
    "Products",
    "Contact",
    "Login",
  ].map((element) => ({
    key: element,
    // icon: element === "Products" && <AngleSmallDown color="#2d56a0" />,
    label:
      element === "Login" ? (
        <CustomButtonLogin
          type="ghost"
          className={`button-login ${headerActive && "button-login--active"}`}
        >
          {element}
        </CustomButtonLogin>
      ) : (
        element
      ),
    onClick: (element) => clickToNavigate(element),
    className: element === "Login" && "menu-login menu-login--transparent",
  }));

  const widthLogoIcon = (width) => {
    let logoWidth = 0;
    switch (true) {
      case width >= 1400:
        logoWidth = 300;
        return logoWidth;
      case width >= 767:
        logoWidth = 200;
        return logoWidth;
      case width < 767:
        logoWidth = 170;
        return logoWidth;
      default:
        break;
    }
    return logoWidth;
  };

  const switchPaddingMenu = (width) => {
    let paddingMenu = {};
    switch (true) {
      case width >= 1600:
        paddingMenu = "0 15em 0 15em";
        return paddingMenu;
      case width < 1600 && width >= 1500:
        paddingMenu = "0 10em 0 10em";
        return paddingMenu;
      case width < 1500 && width >= 1400:
        paddingMenu = "0 5em 0 5em";
        return paddingMenu;
      case width < 1400:
        paddingMenu = "0 10px 0 10px";
        return paddingMenu;
    }
    return paddingMenu;
  };

  // useEffect(() => {
  //   setPathname(location.pathname);
  // }, [location]);

  useEffect(() => {
    scrollPosition < HEIGHT_POSITION && setHeaderActive(false);
    scrollPosition >= HEIGHT_POSITION && setHeaderActive(true);
  }, [scrollPosition]);

  return (
    <>
      {openSubMenu && (
        <div
          className="header__backdrop"
          onClick={() => setOpenSubMenu(false)}
        ></div>
      )}

      <HeaderComponent
        // onMouseOver={() => setHeaderActive(true)}
        // onMouseOut={() => setHeaderActive(false)}
        style={{ padding: switchPaddingMenu(width) }}
        className={`${
          headerActive || location.pathname !== "/"
            ? "layout-header--active"
            : "layout-header"
        }`}
      >
        <div className="logo">
          <Image
            src={
              headerActive || location.pathname !== "/"
                ? LogoBdiscomPrimary
                : LogoBdiscomWhite
            }
            width={widthLogoIcon(width)}
            preview={false}
            onClick={() => navigate("/")}
          />
        </div>

        <Menu
          style={width < 1400 ? { display: "none" } : { display: "flex" }}
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          expandIcon={false}
          items={itemMenu}
        />

        {width < 1400 && (
          <div className="mobile-burger-menu">
            <MenuBurger
              fill={headerActive && "var(--color-primary)"}
              onClick={() => {
                console.log("open menu mobile ");
                setOpenMenuMobile(true);
              }}
            />
          </div>
        )}
      </HeaderComponent>
      {/* {openSubMenu && (
        <Row className="mega-menu mega-menu--active">
          <Col span={6}></Col>
          <Col span={12}>
            <h1>Product</h1>
          </Col>
          <Col span={6}>
            <h1>X</h1>
          </Col>
        </Row>
      )} */}
    </>
  );
};

export default Header;

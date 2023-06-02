import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

// components
import HeaderDesktopMenu from "../Menu/HeaderDesktopMenu";
import HeaderMobileMenu from "../Menu/HeaderMobileMenu";

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

// models
import { IItemMenu } from "../../models/Header/IHeader";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  // const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const [headerActive, setHeaderActive] = useState<boolean>(false);
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  // const [pathname, setPathname] = useState("");

  const { width } = useWindowDimensions();

  const scrollPosition = useScrollPosition();

  const navigate = useNavigate();
  const location = useLocation();

  // const openMegaMenuOrNavigate = (key: string) => {
  //   switch (key) {
  //     case "login":
  //       return console.log("navigate");
  //     case "products":
  //       return setOpenSubMenu(true);
  //     default:
  //       break;
  //   }
  // };

  const clickToNavigate = (element: IItemMenu) => {
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
      element === "Login"
        ? width &&
          width >= 992 && (
            <CustomButtonLogin
              type="ghost"
              className={`button-login ${
                headerActive && "button-login--active"
              }`}
            >
              {element}
            </CustomButtonLogin>
          )
        : element,
    onClick: (element: IItemMenu) => clickToNavigate(element),
    className: element === "Login" && "menu-login menu-login--transparent",
  }));

  const widthLogoIcon = (width: number) => {
    let logoWidth = 0;
    switch (true) {
      case width >= 1400:
        logoWidth = 300;
        return logoWidth;
      case width >= 767:
        logoWidth = 250;
        return logoWidth;
      case width < 767:
        logoWidth = 170;
        return logoWidth;
      default:
        break;
    }
    return logoWidth;
  };

  const switchPaddingMenu = (width: number) => {
    let paddingMenu = {};
    switch (true) {
      case width >= 1600:
        paddingMenu = "30px 10em";
        return paddingMenu;
      case width < 1600 && width >= 1500:
        paddingMenu = "30px 5em";
        return paddingMenu;
      case width < 1500 && width >= 1400:
        paddingMenu = "30px 2em";
        return paddingMenu;
      case width < 1400:
        paddingMenu = "30px 10px";
        return paddingMenu;
    }
    return paddingMenu;
  };

  useEffect(() => {
    scrollPosition < HEIGHT_POSITION && setHeaderActive(false);
    scrollPosition >= HEIGHT_POSITION && setHeaderActive(true);
  }, [scrollPosition]);

  return (
    <>
      {width && width >= 992 && (
        <HeaderDesktopMenu
          switchPaddingMenu={switchPaddingMenu}
          width={width}
          widthLogoIcon={widthLogoIcon}
          navigate={navigate}
          openMenuMobile={openMenuMobile}
          setOpenMenuMobile={setOpenMenuMobile}
          headerActive={headerActive}
          location={location}
          LogoBdiscomPrimary={LogoBdiscomPrimary}
          LogoBdiscomWhite={LogoBdiscomWhite}
          itemMenu={itemMenu}
        />
      )}

      {width && width < 992 && (
        <HeaderMobileMenu
          switchPaddingMenu={switchPaddingMenu}
          width={width}
          widthLogoIcon={widthLogoIcon}
          navigate={navigate}
          openMenuMobile={openMenuMobile}
          setOpenMenuMobile={setOpenMenuMobile}
          headerActive={headerActive}
          location={location}
          LogoBdiscomPrimary={LogoBdiscomPrimary}
          LogoBdiscomWhite={LogoBdiscomWhite}
          itemMenu={itemMenu}
        />
      )}
    </>
  );
};

export default Header;

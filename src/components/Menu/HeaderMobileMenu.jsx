import React from "react";

// antd
import { Image } from "antd";

//icon
import MenuBurger from "../../resources/svg-components/MenuBurger";
import User from "../../resources/svg-components/User";

//css
import "./HeaderMobileMenu.css";

const HeaderMobileMenu = (props) => {
  // ${
  //   props.headerActive || props.location.pathname !== "/"
  //     ? "header__mobile--active"
  //     : "header__mobile--not-active"
  // }
  return (
    <>
      {!props.openMenuMobile && (
        <header
          className={`header__mobile  ${
            props.headerActive
              ? "header__mobile--active"
              : "header__mobile--not-active"
          }`}
        >
          <div className="container">
            <div className="row-wrap">
              <div
                className={`${
                  props.openMenuMobile ? "is-active" : ""
                } hamburger`}
              >
                <MenuBurger
                  style={{ cursor: "pointer" }}
                  fill={props.headerActive && "var(--color-primary)"}
                  onClick={() => {
                    console.log("open menu mobile ");
                    props.setOpenMenuMobile(true);
                  }}
                />
              </div>

              <div className="logo-wrap">
                <span className="logo">
                  <Image
                    src={
                      props.headerActive
                        ? props.LogoBdiscomPrimary
                        : props.LogoBdiscomWhite
                    }
                    width={props.widthLogoIcon(props.width)}
                    preview={false}
                    onClick={() => props.navigate("/")}
                  />
                </span>
              </div>

              <User
                style={{ cursor: "pointer" }}
                fill={props.headerActive && "var(--color-primary)"}
                onClick={() => {
                  console.log("open menu mobile ");
                }}
              />
            </div>
          </div>
        </header>
      )}

      {props.openMenuMobile && (
        <>
          <header className={`header__mobile`}>
            <div className="container">
              <div className="row-wrap">
                <div className={`nav-wrap is-open`}>
                  <div className="logo-wrap--open">
                    <span className="logo">
                      <Image
                        src={props.LogoBdiscomPrimary}
                        width={props.widthLogoIcon(props.width)}
                        preview={false}
                        onClick={() => props.navigate("/")}
                      />
                    </span>
                    <div>
                      <h1>X</h1>
                    </div>
                  </div>
                  <ul className="nav-list">
                    {props.itemMenu?.map((item) => {
                      return (
                        <li key={item.key} className={item.className}>
                          <a onClick={item.onClick}>{item.label}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div
            className="overlay"
            onClick={() => props.setOpenMenuMobile(false)}
          ></div>
        </>
      )}
    </>
  );
};

export default HeaderMobileMenu;

import React from "react";

// antd
import { Image } from "antd";

// models
import { IMenuProps } from "../../models/Menu/IMenu";
import { IItemMenu } from "../../models/Header/IHeader";

// css
import "./HeaderDesktopMenu.css";

const HeaderDesktopMenu: React.FC<IMenuProps> = (props) => {
  return (
    <>
      <header
        style={{ padding: props.switchPaddingMenu(props.width) }}
        className={`header__desktop ${
          props.headerActive || props.location.pathname !== "/"
            ? "header__desktop--active"
            : "header__desktop--not-active"
        }`}
      >
        <div className="container">
          <div className="row-wrap">
            <div className="logo-wrap">
              <span className="logo">
                <Image
                  style={{ cursor: "pointer" }}
                  src={
                    props.headerActive || props.location.pathname !== "/"
                      ? props.LogoBdiscomPrimary
                      : props.LogoBdiscomWhite
                  }
                  width={props.widthLogoIcon(props.width)}
                  preview={false}
                  onClick={() => props.navigate("/")}
                />
              </span>
            </div>
            <div className={`nav-wrap`}>
              <ul className="nav-list">
                {props.itemMenu?.map((item: IItemMenu) => {
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
    </>
  );
};

export default HeaderDesktopMenu;

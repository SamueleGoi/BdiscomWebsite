import React from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import HeaderScrollingMenu from "./HeaderScrollingMenu";

//css
import "./HorizontalScollingMenu.css";
import "react-horizontal-scrolling-menu/dist/styles.css";

const HorizontalScollingMenu = (props) => {
  return (
    <ScrollMenu
      Header={
        <HeaderScrollingMenu
          titleHeader={props.titleHeader}
          VisibilityContext={VisibilityContext}
        />
      }
      separatorClassName={props.separatorItem}
    >
      {props.renderItem()}
    </ScrollMenu>
  );
};

export default HorizontalScollingMenu;

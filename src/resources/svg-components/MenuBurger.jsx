import React from "react";

const MenuBurger = (props) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      //   style="enable-background:new 0 0 512 512;"
      width={20}
      fill={props.fill ? props.fill : "#fff"}
    >
      <g>
        <path
          className="st0"
          d="M480,224H32c-17.7,0-32,14.3-32,32s14.3,32,32,32h448c17.7,0,32-14.3,32-32S497.7,224,480,224z"
        />
        <path
          className="st0"
          d="M32,138.7h448c17.7,0,32-14.3,32-32s-14.3-32-32-32H32c-17.7,0-32,14.3-32,32S14.3,138.7,32,138.7z"
        />
        <path
          className="st0"
          d="M480,373.3H32c-17.7,0-32,14.3-32,32s14.3,32,32,32h448c17.7,0,32-14.3,32-32S497.7,373.3,480,373.3z"
        />
      </g>
    </svg>
  );
};

export default MenuBurger;

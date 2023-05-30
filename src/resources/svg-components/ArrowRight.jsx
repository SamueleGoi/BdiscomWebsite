import React from "react";

const ArrowRight = (props) => {
  return (
    <svg
      {...props}
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      //   style="enable-background:new 0 0 512 512;"
      width={props.width ? props.width : "25px"}
      fill={props.fill ? props.fill : "var(--color-primary)"}
    >
      <path
        className="st0"
        d="M493.2,211.4L410.7,128c-8.3-8.4-21.8-8.4-30.2-0.1c0,0-0.1,0.1-0.1,0.1l0,0c-8.3,8.3-8.3,21.8,0,30.1
	l75.9,76.6h-435C9.6,234.7,0,244.2,0,256l0,0c0,11.8,9.6,21.3,21.3,21.3h436.3l-77.2,77c-8.4,8.3-8.4,21.8-0.1,30.2
	c0,0,0.1,0.1,0.1,0.1l0,0c8.3,8.4,21.8,8.4,30.2,0.1c0,0,0.1-0.1,0.1-0.1l82.6-82.8C517.9,276.9,517.7,236.6,493.2,211.4z"
      />
    </svg>
  );
};

export default ArrowRight;

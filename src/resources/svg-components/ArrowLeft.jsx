import React from "react";

const ArrowLeft = (props) => {
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
        class="st0"
        d="M18.6,211.4l82.5-83.4c8.3-8.4,21.8-8.4,30.2-0.1l0.1,0.1l0,0c8.3,8.3,8.3,21.8,0,30.1l-75.9,76.6h435
	c11.7,0,21.3,9.5,21.3,21.3l0,0c0,11.8-9.6,21.3-21.3,21.3H54.2l77.2,77c8.4,8.3,8.4,21.8,0.1,30.2l-0.1,0.1l0,0
	c-8.3,8.4-21.8,8.4-30.2,0.1l-0.1-0.1l-82.6-82.8C-6.1,276.9-5.9,236.6,18.6,211.4z"
      />
    </svg>
  );
};

export default ArrowLeft;

import React from "react";

const User = (props) => {
  return (
    <svg
      {...props}
      version="1.1"
      id="Outline"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      width={props.width ? props.width : "25px"}
      fill={props.fill ? props.fill : "#fff"}
    >
      <style type="text/css"></style>
      <path
        className="st0"
        d="M256,256c70.7,0,128-57.3,128-128S326.7,0,256,0S128,57.3,128,128C128.1,198.7,185.3,255.9,256,256z M256,42.7
 c47.1,0,85.3,38.2,85.3,85.3s-38.2,85.3-85.3,85.3s-85.3-38.2-85.3-85.3S208.9,42.7,256,42.7z"
      />
      <path
        className="st0"
        d="M256,298.7c-106,0.1-191.9,86-192,192c0,11.8,9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3
 c0-82.5,66.9-149.3,149.3-149.3s149.3,66.9,149.3,149.3c0,11.8,9.6,21.3,21.3,21.3c11.8,0,21.3-9.6,21.3-21.3
 C447.9,384.7,362,298.8,256,298.7z"
      />
    </svg>
  );
};

export default User;

import React from "react";

import { Button } from "antd";

import { ArrowRight } from "../../resources/svg-components";

import "./CustomButton.css";

export const CustomButtonPrimary = (props) => {
  return <Button type="primary" {...props} />;
};

export const CustomButtonSecondary = (props) => {
  return (
    <Button type="secondary" icon={<ArrowRight width={"20px"} />} {...props}>
      {props.title}
    </Button>
  );
};

export const CustomButtonLogin = (props) => {
  return <Button {...props} />;
};

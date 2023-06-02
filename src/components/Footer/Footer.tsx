import React from "react";

import { Footer as FooterComponent } from "antd/es/layout/layout";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <FooterComponent
      style={{
        textAlign: "center",
      }}
    >
      Ant Design ©2023 Created by Ant UED
    </FooterComponent>
  );
};

export default Footer;

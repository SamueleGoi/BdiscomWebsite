import React from "react";

import { Footer as FooterComponent } from "antd/es/layout/layout";
import { Col, Row } from "antd";

// logo
import LogoBdiscomWhite from "../../resources/logo/logo bianco.svg";

import "./Footer.css";
import { useNavigate } from "react-router-dom";

// Ant Design ©2023 Created by Ant UED
const Footer = () => {
  const navigate = useNavigate();

  const itemMenu = [
    "Who we are",
    "What we do",
    "Products",
    "Work with us",
    "Contacts",
    "Login",
  ].map((element) => ({
    key: element,
    label: element,
    onClick: (element) => clickToNavigate(element),
  }));

  const clickToNavigate = (element) => {
    switch (element.key) {
      case "Who we are":
        return navigate("/about");
      case "Login":
        return navigate("/account/login");
      default:
        break;
    }
  };
  return (
    <FooterComponent className="footer__section">
      <Row style={{ width: "100%" }}>
        <Col md={8} lg={8} xl={8}>
          <Row>
            {itemMenu.map((ele) => {
              return (
                <Col
                  key={ele.key}
                  className="footer_section__link d-flex justify-content-center"
                >
                  <a onClick={ele.onClick}>{ele.label}</a>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col md={4} lg={4} xl={4}></Col>
      </Row>
      {/* <Row className="footer__section--border-top-bottom footer__section--padding">
        <Col sm={24} className="d-flex justify-content-center">
          <img
            className="footer__selection--logo-white"
            src={LogoBdiscomWhite}
            alt={"Logo Bdiscom"}
          />
        </Col>
      </Row>

      <Row className="footer__section--border-bottom footer__section--padding">
        <Col sm={24} className="d-flex justify-content-center">
          <Row style={{ width: "100%" }}>
            <Col sm={12} className="d-flex justify-content-center">
              <h2>social</h2>
            </Col>
            <Col sm={12} className="d-flex justify-content-center">
              <h2>social</h2>
            </Col>
          </Row>
        </Col>
      </Row> */}
      {/* <Row>
        <Col sm={8} className="d-flex justify-content-center">
          <img
            className="footer__selection--logo-white"
            src={LogoBdiscomWhite}
            alt={"Logo Bdiscom"}
          />
          <div className="footer__selection--contacts"></div>
        </Col>
        <Col sm={8} className="d-flex justify-content-center">
          <div>
            <h3>Contact us</h3>
          </div>
        </Col>

        <Col sm={8} className="d-flex justify-content-center">
          <div>
            <h3>Contact us</h3>
          </div>
        </Col>
      </Row> */}
    </FooterComponent>
  );
};

export default Footer;

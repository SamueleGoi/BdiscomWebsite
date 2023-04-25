import React from "react";
// import { useNavigate } from "react-router-dom";

// antd
import { Row, Col } from "antd";

// css
import "./Home.css";

const Home = () => {
  //   const navigate = useNavigate();
  return (
    <>
      <section className="hero__image__background" />
      <Row className="section-content__text first-section_row">
        <Col span={24} className="first-section__column text-align-center">
          <h1>Bdiscom Srl key supplier for plasma generators</h1>
          <p>
            Bdiscom Srl is manufactoring company of DCHV, DCLV, MF and RF
            generators and related power accessories for most of the vacuum
            plasma applications to be used in both R/D and industrial
            production.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Home;

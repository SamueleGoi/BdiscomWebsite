import React from "react";
// import { useNavigate } from "react-router-dom";

// antd
import { Row, Col, Image } from "antd";

// image
import HeroBgPcb from "../../resources/header/pcb.jpg";
import HeroBgSpeed from "../../resources/header/speed.jpg";

// css
import "./Home.css";

const Home = () => {
  //   const navigate = useNavigate();
  return (
    <>
      {/* <section className="hero__image__background" /> */}
      <Image
        src={HeroBgSpeed}
        preview={false}
        height={"80vh"}
        width={"100%"}
        style={{ objectFit: "cover", opacity: ".8" }}
        alt="hero"
      />
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
      <Row style={{ height: "100vh" }}></Row>
    </>
  );
};

export default Home;

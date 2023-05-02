import React from "react";
// import { useNavigate } from "react-router-dom";

// antd
import { Row, Col, Image, Button } from "antd";

// image
import HeroBgPcb from "../../resources/header/pcb.jpg";
import HeroBgSpeed from "../../resources/header/speed.jpg";
import HeroBgPcb01 from "../../resources/header/pcb01.jpg";

// css
import "./Home.css";

const Home = () => {
  //   const navigate = useNavigate();
  return (
    <>
      {/* <section className="hero__image__background" /> */}
      {/* <Image
        src={HeroBgPcb01}
        preview={false}
        height={"80vh"}
        width={"100%"}
        style={{ objectFit: "cover", opacity: ".8", objectPosition: "left" }}
        alt="hero"
      /> */}
      <div class="hero-image">
        <div class="hero-text">
          <h1>We power the future</h1>
        </div>
      </div>
      <Row className="section-content__small first-section_row">
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
      <Row className="section-content__small">
        <Col span={12} className="d-flex align-items-center">
          <div>
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
              perferendis iure? Obcaecati inventore deserunt sequi fuga mollitia
              voluptates, dolorem sint sapiente doloremque tempora dolores
              cupiditate doloribus voluptatum aliquid corporis fugiat.
            </p>
            <Button type="primary">Learn more</Button>
          </div>
        </Col>
        <Col
          span={12}
          // className="d-flex align-items-center"
        >
          <Image src={HeroBgSpeed} preview={false} />
        </Col>
      </Row>
      <Row style={{ height: "100vh" }}></Row>
    </>
  );
};

export default Home;

import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// antd
import { Row, Col, Image, Button } from "antd";

import { CustomButtonPrimary } from "../../CustomLayout";

// image
import HeroBgPcb from "../../resources/header/pcb.jpg";
import HeroBgSpeed from "../../resources/header/speed.jpg";
import HeroBgPcb01 from "../../resources/header/pcb01.jpg";

// icon
import { AngleSmallDownIcon } from "../../resources/svg-components";

// css
import "./Home.css";

const Home = () => {
  const [firstIconButtonOver, setFirstIconButtonOver] = useState(false);
  const [secondIconButtonOver, setSecondIconButtonOver] = useState(false);

  //   const navigate = useNavigate();
  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>We power the future</h1>
        </div>
      </div>
      <Row className="section-content__small plr-200 first-section_row">
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

      <Row className="section-content__large plr-100">
        <Col span={10} className="d-flex align-items-start">
          <div className="section-home__about">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
              perferendis iure? Obcaecati inventore deserunt sequi fuga mollitia
              voluptates, dolorem sint sapiente doloremque tempora dolores
              cupiditate doloribus voluptatum aliquid corporis fugiat.
            </p>
            <CustomButtonPrimary
              type="primary"
              className={`button-icon ${
                firstIconButtonOver && "button-icon__over"
              } button-primary`}
              onMouseLeave={() => {
                setFirstIconButtonOver(false);
              }}
              onMouseOver={(ele) => {
                setFirstIconButtonOver(true);
              }}
              icon={firstIconButtonOver && <AngleSmallDownIcon fill="#fff" />}
            >
              Learn more
            </CustomButtonPrimary>
          </div>
        </Col>
        <Col span={12}>
          <Image src={HeroBgSpeed} height={"100%"} preview={false} />
        </Col>
      </Row>

      <Row className="section-content__large mt-200 plr-100">
        <Col>
          <Row>
            <Col span={12}>
              <h1 style={{ fontSize: 50 }}>Bdiscom Srl</h1>
              <h1 style={{ fontSize: 50 }}>
                key supplier for plasma generators
              </h1>
            </Col>
            <Col span={10} className="">
              <div className="section-home__name">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam, perferendis iure? Obcaecati inventore deserunt sequi
                  fuga mollitia voluptates, dolorem sint sapiente doloremque
                  tempora dolores cupiditate doloribus voluptatum aliquid
                  corporis fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam, perferendis iure? Obcaecati inventore deserunt sequi
                  fuga mollitia voluptates, dolorem sint sapiente doloremque
                  tempora dolores cupiditate doloribus voluptatum aliquid
                  corporis fugiat.
                </p>
                <CustomButtonPrimary
                  type="primary"
                  className={`${
                    secondIconButtonOver && "button-icon__over"
                  } button-primary button-icon`}
                  onMouseLeave={() => {
                    setSecondIconButtonOver(false);
                  }}
                  onMouseOver={() => {
                    setSecondIconButtonOver(true);
                  }}
                  icon={
                    secondIconButtonOver && <AngleSmallDownIcon fill="#fff" />
                  }
                >
                  Learn more
                </CustomButtonPrimary>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="mt-50">
          <Row gutter={40} className="section-content__medium">
            <Col span={12}>
              <Image src={HeroBgSpeed} height={"95%"} preview={false} />
            </Col>
            <Col span={6} className="d-flex align-items-end">
              <Image src={HeroBgSpeed} height={300} preview={false} />
            </Col>
            <Col span={6} className="d-flex align-items-center">
              <Image src={HeroBgSpeed} height={300} preview={false} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="section-content__small mt-200 plr-100">
        <Col span={14}>
          <Image src={HeroBgSpeed} height={"100%"} preview={false} />
        </Col>
        <Col span={10} className="d-flex text-align-left align-items-end">
          <div className="section-home__product">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
              perferendis iure? Obcaecati inventore deserunt sequi fuga mollitia
              voluptates, dolorem sint sapiente doloremque tempora dolores
              cupiditate doloribus voluptatum aliquid corporis fugiat.
            </p>
            <CustomButtonPrimary
              type="primary"
              className={`${
                secondIconButtonOver && "button-icon__over"
              } button-primary button-icon`}
              onMouseLeave={() => {
                setSecondIconButtonOver(false);
              }}
              onMouseOver={() => {
                setSecondIconButtonOver(true);
              }}
              icon={secondIconButtonOver && <AngleSmallDownIcon fill="#fff" />}
            >
              Learn more
            </CustomButtonPrimary>
          </div>
        </Col>
      </Row>
      <Row style={{ height: "100vh" }}></Row>
    </>
  );
};

export default Home;

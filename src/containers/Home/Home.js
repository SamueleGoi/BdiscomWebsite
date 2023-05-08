import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

// antd
import { Row, Col, Image } from "antd";
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

  const { width, height } = useWindowDimensions();

  //   const navigate = useNavigate();
  return (
    <>
      <div className="hero-image">
        <div
          className={width >= 992 ? "hero-text__desktop" : "hero-text__mobile"}
        >
          <div className="hero-text__first-title">
            <h1>We power</h1>
          </div>
          <div className="hero-text__second-title">
            <h1>the future</h1>
          </div>
        </div>
      </div>

      <div className={`${width >= 992 ? "plr-100" : "plr-10"}`}>
        <Row
          className={`${width >= 992 && "plr-100"} ptb-100 first-section_row`}
        >
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

        <Row className="ptb-100" gutter={[0, 24]}>
          <Col
            xs={24}
            sm={24}
            lg={10}
            xl={10}
            className="d-flex align-items-start"
          >
            <div className={`${width >= 992 && "pr-200"} section-home__about`}>
              <h1>Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam, perferendis iure? Obcaecati inventore deserunt sequi
                fuga mollitia voluptates, dolorem sint sapiente doloremque
                tempora dolores cupiditate doloribus voluptatum aliquid corporis
                fugiat.
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
          <Col xs={24} sm={24} lg={12} xl={12}>
            <Image
              src={HeroBgSpeed}
              height={width >= 992 ? 700 : "100%"}
              preview={false}
            />
          </Col>
        </Row>

        <div className="ptb-100">
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <h1 style={width >= 992 ? { fontSize: 50 } : { fontSize: 30 }}>
                Bdiscom Srl
              </h1>
              <h1 style={width >= 992 ? { fontSize: 50 } : { fontSize: 30 }}>
                key supplier for plasma generators
              </h1>
            </Col>
            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
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

          <Row gutter={[12, 12]} className="mt-50">
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Image src={HeroBgSpeed} height={"95%"} preview={false} />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={6}
              xl={6}
              className="d-flex align-items-end"
            >
              <Image src={HeroBgSpeed} height={300} preview={false} />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={6}
              xl={6}
              className="d-flex align-items-center"
            >
              <Image src={HeroBgSpeed} height={300} preview={false} />
            </Col>
          </Row>
        </div>

        <Row className="ptb-100" gutter={[0, 24]}>
          <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14}>
            <Image src={HeroBgSpeed} height={"100%"} preview={false} />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={10}
            xl={10}
            className="d-flex text-align-left align-items-end"
          >
            <div
              className={`${width >= 992 && "pl-200"} section-home__product`}
            >
              <h1>Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam, perferendis iure? Obcaecati inventore deserunt sequi
                fuga mollitia voluptates, dolorem sint sapiente doloremque
                tempora dolores cupiditate doloribus voluptatum aliquid corporis
                fugiat.
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
        <Row style={{ height: "100vh" }}></Row>
      </div>
    </>
  );
};

export default Home;

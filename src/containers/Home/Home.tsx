import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

// antd
import { Row, Col, Image } from "antd";
import { CustomButtonSecondary } from "../../CustomLayout";

// components
import RepresentativesCard from "../../components/RepresentativesCard/RepresentativesCard";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import HorizontalScollingMenu from "../../components/HorizontalScollingMenu/HorizontalScollingMenu";

// utils
import { mockdb } from "../../utils/mockdb";

// image header
import HEA03 from "../../resources/images/Header/HEA03.jpg";

// css
import "./Home.css";

interface IHomeProps {}

function Home(props: IHomeProps): JSX.Element {
  const { width  } = useWindowDimensions();

  const navigate:NavigateFunction = useNavigate();

  return (
    <>
      {/* <HeroImage /> */}
      <div>
        <Row className={`${width && width >= 992 && "plr-100"} ptb-100 first-section_row`}>
          <Col span={24} className="first-section__column text-align-center">
            <h1>Bdiscom Srl key supplier for plasma generators</h1>
            <p>
              Bdiscom Srl is manufacturing company of DCHV, DCLV, MF and RF generators and related power accessories for most of the vacuum plasma
              applications to be used in both R&D and industrial production.
            </p>
          </Col>
        </Row>

        <Row className="ptb-100" gutter={[0, 24]}>
          <Col xs={24} sm={24} lg={10} xl={10} className="d-flex align-items-start">
            <div className={`${width && width >= 992 && "pr-200"} section-home__about`}>
              <h1>Who we are</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis iure? Obcaecati inventore deserunt sequi fuga mollitia
                voluptates, dolorem sint sapiente doloremque tempora dolores cupiditate doloribus voluptatum aliquid corporis fugiat. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis iure? Obcaecati inventore deserunt sequi fuga mollitia voluptates,
                dolorem sint sapiente doloremque tempora dolores cupiditate doloribus voluptatum aliquid corporis fugiat.
              </p>
              <CustomButtonSecondary title={"Learn more"} onClick={() => navigate("/who-we-are")} />
            </div>
          </Col>
          <Col xs={24} sm={24} lg={12} xl={12}>
            <Image src={HEA03} height={width && width >= 992 ? 700 : "100%"} preview={false} />
          </Col>
        </Row>

        <Row className="ptb-100" gutter={[0, 24]}>
          <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14}>
            <Image src={HEA03} height={"100%"} preview={false} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} className="d-flex text-align-left align-items-end">
            <div className={`${width && width >= 992 && "pl-200"} section-home__product`}>
              <h1>What we do</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis iure? Obcaecati inventore deserunt sequi fuga mollitia
                voluptates, dolorem sint sapiente doloremque tempora dolores cupiditate doloribus voluptatum aliquid corporis fugiat. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis iure? Obcaecati inventore deserunt sequi fuga mollitia voluptates,
                dolorem sint sapiente doloremque tempora dolores cupiditate doloribus voluptatum aliquid corporis fugiat.
              </p>
              <CustomButtonSecondary title={"Learn more"} />
            </div>
          </Col>
        </Row>

        <Row className="ptb-100">
          <Col style={{ width && width: "100%" }}>
            <HorizontalScollingMenu
              titleHeader={"Products"}
              renderItem={() => {
                return mockdb().MockProductsCard.map((item) => {
                  return (
                    <ProductsCard key={item.key} title={item.title} subtitle={item.subtitle} description={item.description} image={item.image} />
                  );
                });
              }}
            />
          </Col>
        </Row>

        <div className="ptb-100">
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <h1 style={width && width >= 992 ? { fontSize: 50, color: "var(--color-primary)" } : { fontSize: 30, color: "var(--color-primary)" }}>
                Wide spectrum of services,
              </h1>
              <h1 style={width && width >= 992 ? { fontSize: 50, color: "var(--color-primary)" } : { fontSize: 30, color: "var(--color-primary)" }}>
                delivered with the expertise of our team
              </h1>
            </Col>
            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
              <div className="section-home__name">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis iure? Obcaecati inventore deserunt sequi fuga
                  mollitia voluptates, dolorem sint sapiente doloremque tempora dolores cupiditate doloribus voluptatum aliquid corporis fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis iure? Obcaecati inventore deserunt sequi fuga
                  mollitia voluptates, dolorem sint sapiente doloremque tempora dolores cupiditate doloribus voluptatum aliquid corporis fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis iure? Obcaecati inventore deserunt sequi fuga
                  mollitia voluptates, dolorem sint sapiente doloremque tempora dolores cupiditate doloribus voluptatum aliquid corporis fugiat.
                </p>
                <CustomButtonSecondary title={"Learn more"} />
              </div>
            </Col>
          </Row>

          <Row gutter={[12, 12]} className="mt-50">
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Image src={HEA03} height={"95%"} preview={false} />
            </Col>
            <Col xs={24} sm={24} md={24} lg={6} xl={6} className="d-flex align-items-end">
              <Image src={HEA03} height={300} preview={false} />
            </Col>
            <Col xs={24} sm={24} md={24} lg={6} xl={6} className="d-flex align-items-center">
              <Image src={HEA03} height={300} preview={false} />
            </Col>
          </Row>
        </div>

        <Row className="ptb-100">
          <Col className="d-flex justify-content-center width && width-100" xs={24} sm={24} md={24} lg={24} xl={24}>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ color: "var(--color-primary)", fontSize: "1.6em" }}>Representatives</h1>
            </div>
          </Col>
          <Col className="mt-50 width && width-100">
            <Row gutter={[0, 24]}>
              {mockdb().MockRepresentativesCard.map((item) => {
                return (
                  <Col key={item.key} className="d-flex justify-content-center" xs={24} sm={24} md={12} lg={12} xl={8}>
                    <RepresentativesCard image={item.image} title={item.title} description={item.description} link={item.link} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Row className="ptb-100">
          <Col style={{ width && width: "100%" }}>
            <HorizontalScollingMenu
              titleHeader={"International Distributors"}
              separatorItem={"international-disrtubutors--separator"}
              renderItem={() => {
                return mockdb().MockInternationalDistributorsCard.map((item) => {
                  return (
                    <div
                      key={item.key}
                      style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img src={item.image} style={{ width && width: 150, height: 100, cursor: "pointer" }} onClick={() => window.open(item.link, "_blank")} />
                    </div>
                  );
                });
              }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;

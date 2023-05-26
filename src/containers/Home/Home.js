import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

// antd
import { Row, Col, Image, List } from "antd";
import { CustomButtonSecondary, CustomList } from "../../CustomLayout";

// components
import RepresentativesCard from "../../components/RepresentativesCard/RepresentativesCard";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

// utils
import { mockdb } from "../../utils/mockdb";

// image
import HeroBgPcb from "../../resources/header/pcb.jpg";
import HeroBgSpeed from "../../resources/header/speed.jpg";
import HeroBgPcb01 from "../../resources/header/pcb01.jpg";

// icon

// css
import "./Home.css";

const Home = () => {
  const [firstIconButtonOver, setFirstIconButtonOver] = useState(false);
  const [secondIconButtonOver, setSecondIconButtonOver] = useState(false);
  const [changePage, setChangePage] = useState(1);

  const { width, height } = useWindowDimensions();

  const page = (width) => {
    let numPagination;
    let countPageSize = 1;

    if (width < 576) {
      numPagination = 1 * countPageSize;
    }
    if (width >= 576) {
      numPagination = 2 * countPageSize;
    }
    if (width >= 768) {
      numPagination = 2 * countPageSize;
    }
    if (width >= 992) {
      numPagination = 3 * countPageSize;
    }
    if (width >= 1200) {
      numPagination = 4 * countPageSize;
    }
    if (width >= 1600) {
      numPagination = 6 * countPageSize;
    }
    return numPagination;
  };

  const paginationProducts = (width) => {
    let numPagination;
    let countPageSize = 1;

    if (width < 576) {
      numPagination = 1 * countPageSize;
    }
    if (width >= 576) {
      numPagination = 2 * countPageSize;
    }
    if (width >= 768) {
      numPagination = 2 * countPageSize;
    }
    if (width >= 992) {
      numPagination = 2 * countPageSize;
    }
    if (width >= 1200) {
      numPagination = 2 * countPageSize;
    }
    if (width >= 1600) {
      numPagination = 3 * countPageSize;
    }
    return { numPagination };
  };

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
              <CustomButtonSecondary title={"Learn more"} />
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
                <CustomButtonSecondary title={"Learn more"} />
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
              <CustomButtonSecondary title={"Learn more"} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ width: "100%" }}>
            <CustomList
              grid={{
                gutter: 24,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 6,
              }}
              pagination={{ page: page(width) }}
              dataSource={[
                <Image src={HeroBgPcb} preview={false} />,
                <Image src={HeroBgPcb} preview={false} />,
                <Image src={HeroBgPcb} preview={false} />,
                <Image src={HeroBgPcb} preview={false} />,
                <Image src={HeroBgPcb} preview={false} />,
                <Image src={HeroBgPcb} preview={false} />,
                <Image src={HeroBgPcb} preview={false} />,
                <Image src={HeroBgPcb} preview={false} />,
                <Image src={HeroBgPcb} preview={false} />,
              ]}
              renderItem={(item, index) => (
                <List.Item
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  {item}
                </List.Item>
              )}
            />
          </Col>
        </Row>

        <Row className="ptb-100">
          <Col
            className="d-flex justify-content-center width-100"
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
          >
            <div style={{ textAlign: "center" }}>
              <h1 style={{ color: "var(--color-primary)", fontSize: "1.6em" }}>
                Representatives
              </h1>
            </div>
          </Col>
          <Col className="mt-50 width-100">
            <Row gutter={[0, 24]}>
              {mockdb().MockRepresentativesCard.map((item) => {
                return (
                  <Col
                    key={item.key}
                    className="d-flex justify-content-center"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={8}
                  >
                    <RepresentativesCard
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      link={item.link}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Row className="ptb-100">
          <Col style={{ width: "100%" }}>
            <CustomList
              grid={{
                gutter: 24,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 2,
                xxl: 3,
              }}
              pagination={{ page: paginationProducts(width).numPagination }}
              dataSource={mockdb().MockProductsCard}
              renderItem={(item, index) => (
                <List.Item>
                  <ProductsCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <Row style={{ height: "100vh" }}></Row>
      </div>
    </>
  );
};

export default Home;

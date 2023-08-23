import { Col, Image, Row } from "antd";
import React from "react";
import { CustomButtonSecondary } from "../../CustomLayout";
import { mockdb } from "../../utils/mockdb";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Product() {
  const { width } = useWindowDimensions();

  const allProducts = mockdb().MockProductsCard.map((item) => {
    return (
      <Row className="ptb-100" gutter={[0, 24]} key={item.key}>
        {item.key % 2 === 0 && (
          <>
            <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14}>
              <Image src={item.image} height={"100%"} preview={false} />
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
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <CustomButtonSecondary title={"Learn more"} />
              </div>
            </Col>
          </>
        )}
        {item.key % 2 !== 0 && (
          <>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={10}
              xl={10}
              className="d-flex justify-content-start text-align-left align-items-end"
            >
              <div
                className={`${width >= 992 && "pr-200"} section-home__product`}
              >
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <CustomButtonSecondary title={"Learn more"} />
              </div>
            </Col>
            <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14}>
              <Image src={item.image} height={"100%"} preview={false} />
            </Col>
          </>
        )}
      </Row>
    );
  });
  return allProducts;
}

export default Product;

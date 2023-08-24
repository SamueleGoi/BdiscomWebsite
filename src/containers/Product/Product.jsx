import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// antd
import { Col, Image, Row } from "antd";

// CustomLayout
import { CustomButtonSecondary } from "../../CustomLayout";

// utils
import { mockdb } from "../../utils/mockdb";

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

// css
import "./Product.css";

function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const { width } = useWindowDimensions();

  function returnJSX() {
    if (location.state) {
      let singleProduct = location.state;
      return (
        <Row className="ptb-100" gutter={[0, 24]}>
          <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14}>
            <Image src={singleProduct.image} height={500} preview={false} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} className="d-flex text-align-left align-items-start">
            <div className={`section__product`}>
              <h1>{singleProduct.title}</h1>
              <p>{singleProduct.description}</p>
            </div>
          </Col>
        </Row>
      );
    } else {
      return mockdb().MockProductsCard.map((item) => {
        return (
          <Row className="ptb-100" gutter={[0, 24]} key={item.key}>
            {item.key % 2 === 0 && (
              <>
                <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14}>
                  <Image src={item.image} width={"100%"} preview={false} />
                </Col>
                <Col xs={24} sm={24} md={24} lg={10} xl={10} className="d-flex text-align-left align-items-center">
                  <div className={`${width >= 992 && "pl-200"} section__product`}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <CustomButtonSecondary title={"Learn more"} onClick={() => navigate(`/product/${item.title}`, { state: item })} />
                  </div>
                </Col>
              </>
            )}
            {item.key % 2 !== 0 && (
              <>
                <Col xs={24} sm={24} md={24} lg={10} xl={10} className="d-flex justify-content-start text-align-left align-items-center">
                  <div className={`${width >= 992 && "pr-200"} section__product`}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <CustomButtonSecondary title={"Learn more"} onClick={() => navigate(`/product/${item.title}`, { state: item })} />
                  </div>
                </Col>
                <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14}>
                  <Image src={item.image} width={"100%"} preview={false} />
                </Col>
              </>
            )}
          </Row>
        );
      });
    }
  }

  return returnJSX();
}

export default Product;

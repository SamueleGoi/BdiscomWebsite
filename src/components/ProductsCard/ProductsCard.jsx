import React, { useState } from "react";

//antd
import { CustomButtonSecondary } from "../../CustomLayout";

//hook
import useWindowDimensions from "../../hooks/useWindowDimensions";

//css
import "./ProductsCard.css";

const ProductsCard = (props) => {
  const [showDescription, setShowDescription] = useState(false);

  const { width, height } = useWindowDimensions();

  const customStyle = (width) => {
    let fontSizeTitleStyle = {};
    let fontSizeDescriptionStyle = {};
    let widthHeightStyle = {};

    if (width < 576) {
      fontSizeTitleStyle = { fontSize: "1.6rem" };
      fontSizeDescriptionStyle = { fontSize: "1.1rem" };
      widthHeightStyle = { height: "510px" };
    }
    if (width >= 576) {
      fontSizeTitleStyle = { fontSize: "1.2rem" };
      fontSizeDescriptionStyle = { fontSize: "1rem" };
      widthHeightStyle = { width: "270px", height: "610px" };
    }
    if (width >= 768) {
      fontSizeTitleStyle = { fontSize: "1.4rem" };
      fontSizeDescriptionStyle = { fontSize: "1rem" };
      widthHeightStyle = { width: "380px", height: "610px" };
    }
    if (width >= 992) {
      fontSizeTitleStyle = { fontSize: "1.6rem" };
      fontSizeDescriptionStyle = { fontSize: "1rem" };
      widthHeightStyle = { width: "290px", height: "610px" };
    }
    if (width >= 1200) {
      fontSizeTitleStyle = { fontSize: "1.8rem" };
      fontSizeDescriptionStyle = { fontSize: "1ìem" };
      widthHeightStyle = { width: "370px", height: "620px" };
    }
    if (width >= 1600) {
      fontSizeTitleStyle = { fontSize: "2rem" };
      fontSizeDescriptionStyle = { fontSize: "1ìrem" };
      widthHeightStyle = { width: "400px", height: "700px" };
    }
    return { fontSizeTitleStyle, fontSizeDescriptionStyle, widthHeightStyle };
  };

  return (
    <div
      className="product__card"
      style={customStyle(width).widthHeightStyle}
      onMouseOver={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <div className="product__card__section">
        <h3
          className="product__card--title"
          style={
            showDescription
              ? {
                  color: "var(--color-light)",
                  fontSize: customStyle(width).fontSizeTitleStyle.fontSize,
                }
              : {
                  color: "var(--color-primary)",
                  fontSize: customStyle(width).fontSizeTitleStyle.fontSize,
                }
          }
        >
          {props.title}
        </h3>
      </div>

      <img className="product__card--image" src={props.image} alt="" />

      <div
        className={`${
          showDescription
            ? "show-product-description__section--over"
            : "show-product-description__section"
        }`}
      >
        <div className="show-product-description__section--description">
          <p style={customStyle(width).fontSizeDescriptionStyle}>
            {props.description}
          </p>
          <CustomButtonSecondary
            title="Learn more"
            fillIcon="#fff"
            style={{ color: "#fff" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

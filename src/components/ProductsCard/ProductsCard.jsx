import React, { useState } from "react";

import HeroBgPcb01 from "../../resources/header/pcb01.jpg";

//css
import "./ProductsCard.css";

const ProductsCard = (props) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      className="product__card"
      onMouseOver={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <div className="product__card__section">
        <h3
          className="product__card--title"
          style={
            showDescription
              ? { color: "var(--color-light)" }
              : { color: "var(--color-primary)" }
          }
        >
          Titolo
        </h3>
      </div>

      <img className="product__card--image" src={HeroBgPcb01} alt="" />

      {/* <div className=""></div> */}

      <div
        className="show-product-description__section"
        style={showDescription ? { zIndex: 2 } : { zIndex: -1 }}
      ></div>
    </div>
  );
};

export default ProductsCard;

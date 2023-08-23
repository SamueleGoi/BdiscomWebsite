import React from "react";

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

// css
import "./HeroImage.css";

const HeroImage = () => {
  const { width } = useWindowDimensions();

  return (
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
  );
};

export default HeroImage;

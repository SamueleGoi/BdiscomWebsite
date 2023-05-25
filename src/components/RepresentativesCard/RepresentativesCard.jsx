import React from "react";

//antd
import Meta from "antd/es/card/Meta";
import { CustomButtonSecondary, CustomCard } from "../../CustomLayout";

//image
import HeroBgPcb01 from "../../resources/header/pcb01.jpg";

//css
import "./RepresentativesCard.css";

const RepresentativesCard = (props) => {
  return (
    <CustomCard
      className="representative__card"
      hoverable={false}
      style={{
        width: 350,
      }}
      cover={
        <img alt="example" style={{ height: "200px" }} src={props.image} />
      }
    >
      <Meta
        title={<h1 className="representative__card--title">{props.title}</h1>}
        description={
          <div className="representative__card__section">
            <p className="representative__card__section--description">
              {props.description}
            </p>
            <CustomButtonSecondary
              className="representative__card__section--button"
              title={"Go to the website"}
              href={props.link}
              target="_blank"
            />
          </div>
        }
      />
    </CustomCard>
  );
};

export default RepresentativesCard;

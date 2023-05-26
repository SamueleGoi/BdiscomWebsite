import React from "react";

//antd
import Meta from "antd/es/card/Meta";
import { CustomButtonSecondary, CustomCard } from "../../CustomLayout";

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
        <img alt={props.title} src={props.image} style={{ height: "200px" }} />
      }
    >
      <Meta
        title={<h3 className="representative__card--title">{props.title}</h3>}
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

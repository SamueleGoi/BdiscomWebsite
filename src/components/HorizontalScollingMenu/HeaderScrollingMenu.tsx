import React, { useContext } from "react";

//icon
import { ArrowLeft, ArrowRight } from "../../resources/svg-components";

interface IHeaderScrollingMenuProps {
  titleHeader: string;
  VisibilityContext: any;
}

const HeaderScrollingMenu: React.FC<IHeaderScrollingMenuProps> = (props) => {
  const { isLastItemVisible, scrollNext, scrollPrev, isFirstItemVisible }: any =
    useContext(props.VisibilityContext);

  return (
    <div className="content-scrollList__header">
      <div>
        <h1>{props.titleHeader}</h1>
      </div>

      <div className="content-scrollList__header--arrow">
        <div
          className="scroll transition"
          style={
            isFirstItemVisible
              ? { border: "3px solid #CCCCCC" }
              : { opacity: "1" }
          }
          onClick={() => scrollPrev()}
        >
          <ArrowLeft
            className="transition"
            fill={isFirstItemVisible && "#CCCCCC"}
          />
        </div>
        <div
          className="scroll scroll-next transition"
          style={
            isLastItemVisible
              ? { opacity: "1", border: "3px solid #CCCCCC" }
              : { opacity: "1" }
          }
          onClick={() => scrollNext()}
        >
          <ArrowRight
            className="transition"
            fill={isLastItemVisible && "#CCCCCC"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderScrollingMenu;

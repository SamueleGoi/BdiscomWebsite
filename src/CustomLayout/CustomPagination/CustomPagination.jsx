import React from "react";

//antd
import { Pagination } from "antd";

//icon
import { ArrowLeft, ArrowRight } from "../../resources/svg-components";

//css
import "./CustomPagination.css";

const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return (
      <button className="ant-pagination-item-link">
        <span className="anticon">
          <ArrowLeft style={{ display: "inline-block" }} />
        </span>
      </button>
    );
  }

  if (type === "next") {
    return (
      <button className="ant-pagination-item-link">
        <span className="anticon">
          <ArrowRight style={{ display: "inline-block" }} />
        </span>
      </button>
    );
  }

  return originalElement;
};

const CustomPagination = (props) => {
  return (
    <Pagination
      {...props}
      className="pagination__custom"
      itemRender={itemRender}
    />
  );
};

export default CustomPagination;

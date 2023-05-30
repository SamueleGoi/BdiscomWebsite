import React from "react";

// antd
import { List, Pagination } from "antd";

import { ArrowRight, ArrowLeft } from "../../resources/svg-components";

//css
import "./CustomList.css";

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

  if (type === "page") {
    return <div style={{ display: "none" }}></div>;
  }

  return originalElement;
};

const CustomList = (props) => {
  return (
    <List
      {...props}
      // header={
      //   <div style={{ display: "flex", justifyContent: "space-between" }}>
      //     <h1>Logo</h1>
      //     <Pagination className="pagination__custom" itemRender={itemRender} />
      //   </div>
      // }
      pagination={{
        // showTotal: (total) => {
        //   return <h1>Titolo</h1>;
        // },
        position: "top",
        align: "end",
        className: "pagination__custom",
        pageSize: props.pagination.page,
        itemRender: itemRender,
      }}
    />
  );
};

export default CustomList;

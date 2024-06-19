import React from "react";
import HtmlPage from "./html/HtmlPage";
import { Html5Outlined } from "@ant-design/icons";

const CourseCompBlock = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Html5Outlined
          style={{
            fontSize: "70px",
            color: "orangered",
            display: "flex",
            padding: "20px",
            paddingRight: "70px",
            paddingLeft: "70px",
            borderBottom: "2px solid white",
            maxWidth: "100%",
          }}
        />
        <br />
        <HtmlPage />
      </div>
    </>
  );
};

export default CourseCompBlock;

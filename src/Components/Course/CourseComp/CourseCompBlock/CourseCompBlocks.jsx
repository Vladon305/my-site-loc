import { React, useRef } from "react";

import s from "./CourseCompBlocks.module.css";

import HtmlPage from "../html/HtmlPage";
import CssPage from "../CSS/cssPage";
import JsPage from "../JS/jsPage";

import cssImg from "./CourseComp-Img/cssImg.png";
import htmlImg from "./CourseComp-Img/htmlImg.png";
import jsImg from "./CourseComp-Img/jsImg.png";
import reactImg from "./CourseComp-Img/reactImg.png";

const CourseCompBlock = () => {
  const htmlScroll = useRef(null);
  const cssScroll = useRef(null);
  const jsScroll = useRef(null);
  const htmlHandleClick = () => {
    htmlScroll.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  const cssHandleClick = () => {
    cssScroll.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  const jsHandleClick = () => {
    jsScroll.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  return (
    <>
      <div className={s.navBar}>
        <img
          onClick={htmlHandleClick}
          style={{ maxHeight: "70px" }}
          src={htmlImg}
          alt="htmlNB"
          className={s.imgNB}
        />
        <img
          onClick={cssHandleClick}
          style={{ maxHeight: "70px" }}
          src={cssImg}
          alt="cssNB"
          className={s.imgNB}
        />
        <img
          onClick={jsHandleClick}
          style={{ maxHeight: "70px" }}
          src={jsImg}
          alt="jsNB"
          className={s.imgNB}
        />
        {/* <img style={{ maxHeight: "70px" }} src={reactImg} alt="" /> */}
      </div>

      <div
        ref={htmlScroll}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={htmlImg}
          style={{
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

      <div
        ref={cssScroll}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={cssImg}
          style={{
            display: "flex",
            padding: "20px",
            paddingRight: "70px",
            paddingLeft: "70px",
            borderBottom: "2px solid white",
            maxWidth: "100%",
          }}
        />
        <br />
        <CssPage />
      </div>

      <div
        ref={jsScroll}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={jsImg}
          style={{
            display: "flex",
            padding: "20px",
            paddingRight: "70px",
            paddingLeft: "70px",
            borderBottom: "2px solid white",
            maxWidth: "100%",
          }}
        />
        <br />
        <JsPage />
      </div>
    </>
  );
};

export default CourseCompBlock;

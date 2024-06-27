import React from "react";
import s from "./DevelopmentBranch.module.css";
import ArrowRight from "./Development-Branch-IMG/ArrowRight.png";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Select } from "antd";

const DevelopmentBranch = () => {
  return (
    <div className={s.firstStroke}>
      <div className={s.rectangle}>
        <PlusCircleOutlined
          style={{
            fontSize: "40px",
            color: "white",
          }}
        />
      </div>
      <img src={ArrowRight} alt="ArrowRight" />
      <div className={s.rectangle}>
        <PlusCircleOutlined
          style={{
            fontSize: "40px",
            color: "white",
          }}
        />
      </div>
      <img src={ArrowRight} alt="ArrowRight" />
      <div className={s.rectangle}>
        <Select></Select>
      </div>
    </div>
  );
};

export default DevelopmentBranch;

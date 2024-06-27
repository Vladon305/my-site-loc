import React from "react";
import s from "./CourseCard.module.css";
import { PlusCircleOutlined } from "@ant-design/icons";

const CourceCard = ({ text, img, color, onClick }) => {
  return (
    <div id="html1" className={s.card} style={{ backgroundColor: color }}>
      <img className={s.imgCard} src={img} alt="htmlIMG" />
      <p className={s.pCard}>{text}</p>
      <div onClick={onClick}>
        <PlusCircleOutlined className={s.btnHeart} />
      </div>
      <button className={s.btnCard}>
        <a href="#" target="_blank" className={s.triggerOption}>
          Corse Link
        </a>
      </button>
    </div>
  );
};

export default CourceCard;

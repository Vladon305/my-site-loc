import React from "react";
import htmlIMG from "./htmlImg/htmlMG.jpg";
import s from "./htmlPage.module.css";
import { NavLink } from "react-router-dom";

const HtmlPage = () => {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <img className={s.imgCard} src={htmlIMG} alt="htmlIMG" />
        <p className={s.title}>HTML</p>
        <p className={s.pCard}>
          By clicking on the button below, a list of the
          <span className={s.aqua}> best HTML courses</span> will appear. These
          are the ones I <span className={s.aqua}>recommend you start </span>
          with.
        </p>
        <button className={s.btnCard}>
          <NavLink to="/htmlPage" className={s.triggerOption}>
            Corse Link
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default HtmlPage;

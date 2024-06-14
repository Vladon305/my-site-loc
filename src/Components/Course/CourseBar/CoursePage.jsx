import React from "react";
import s from "./CoursePage.module.css";
import { NavLink } from "react-router-dom";
import htmlIMG from "./CoursePageIMG/htmlMG.jpg";

const CoursePage = () => {
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
            Course List
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default CoursePage;

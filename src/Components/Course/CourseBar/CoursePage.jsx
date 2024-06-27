import React from "react";
import s from "./CoursePage.module.css";
import { NavLink } from "react-router-dom";
import htmlIMG from "./CoursePageIMG/htmlMG.jpg";
import BG from "./CoursePageIMG/BG.png";

const CoursePage = () => {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <img className={s.imgCard} src={htmlIMG} alt="htmlIMG" />
        <p className={s.title}>Course Library</p>
        <p className={s.pCard}>
          <span className={s.aqua}>This section</span> contains a library of all
          sorts of
          <span className={s.aqua}> different, useful </span>video courses.
        </p>
        <button className={s.btnCard}>
          <NavLink to="/CourseCompBlock" className={s.triggerOption}>
            Course Library!
          </NavLink>
        </button>
      </div>

      <div className={s.card}>
        <img
          className={s.imgCard}
          src={BG}
          alt="htmlIMG"
          style={{ width: "358px", height: "204px" }}
        />
        <p className={s.title}>Favorite courses</p>
        <p className={s.pCard}>
          In this section,
          <span className={s.aqua}> there will be a list of courses </span> you
          have added from the
          <span className={s.aqua}> course library.</span>
        </p>
        <button className={s.btnCard}>
          <NavLink to="/FavoriteCourses" className={s.triggerOption}>
            Favor Courses!
          </NavLink>
        </button>
      </div>

      <div className={s.card}>
        <img
          className={s.imgCard}
          src={BG}
          alt="htmlIMG"
          style={{ width: "358px", height: "204px" }}
        />
        <p style={{ fontSize: "37px" }} className={s.title}>
          Development Branch
        </p>
        <p className={s.pCard}>
          In this section
          <span className={s.aqua}> you can create or select a preset </span>
          that puts the courses in the right order to
          <span className={s.aqua}> make learning convenient.</span>
        </p>
        <button className={s.btnCard}>
          <NavLink to="/DevelopmentBranch" className={s.triggerOption}>
            Dev Branch!
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default CoursePage;

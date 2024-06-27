import React from "react";
import s from "./jsPage.module.css";
import CourseCard from "../../CourseCard/CourseCard";

const JsPage = () => {
  return (
    <div className={s.container}>
      <CourseCard
        text={
          <>
            By clicking on the button below, a list of the
            <span className={s.aqua}> best HTML courses</span> will appear.
            These are the ones I{" "}
            <span className={s.aqua}>recommend you start </span>
            with.
          </>
        }
        color={"rgb(218, 214, 0)"}
      />
      <CourseCard
        text={
          <>
            By clicking on the button below, a list of the
            <span className={s.aqua}> best HTML courses</span> will appear.
            These are the ones I{" "}
            <span className={s.aqua}>recommend you start </span>
            with.
          </>
        }
        color={"rgb(218, 214, 0)"}
      />
      <CourseCard
        text={
          <>
            By clicking on the button below, a list of the
            <span className={s.aqua}> best HTML courses</span> will appear.
            These are the ones I{" "}
            <span className={s.aqua}>recommend you start </span>
            with.
          </>
        }
        color={"rgb(218, 214, 0)"}
      />
      <CourseCard
        text={
          <>
            By clicking on the button below, a list of the
            <span className={s.aqua}> best HTML courses</span> will appear.
            These are the ones I{" "}
            <span className={s.aqua}>recommend you start </span>
            with.
          </>
        }
        color={"rgb(218, 214, 0)"}
      />
    </div>
  );
};

export default JsPage;

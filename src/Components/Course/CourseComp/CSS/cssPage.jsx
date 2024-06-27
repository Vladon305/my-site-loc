import React from "react";
import s from "./cssPage.module.css";
import CourseCard from "../../CourseCard/CourseCard";

const CssPage = () => {
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
        color={"rgb(53, 123, 253)"}
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
        color={"rgb(53, 123, 253)"}
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
        color={"rgb(53, 123, 253)"}
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
        color={"rgb(53, 123, 253)"}
      />
    </div>
  );
};

export default CssPage;

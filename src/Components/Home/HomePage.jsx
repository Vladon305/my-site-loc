import React from "react";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.h1}>
        Short about{" "}
        <a className={s.a} href="https://vk.com/vardox6" target="_blank">
          me
        </a>{" "}
        and the website
      </h1>

      <ol className="">
        <li className={s.ul}>
          I am a candidate for junior frontend developer, I have spent a lot of
          time and effort not only to learn, but also to find free training
          courses and materials.
        </li>
        <p></p>
        <li className={s.ul}>
          This site is a library of courses, their descriptions and useful and
          materials, to help and quickly teach beginner frontend developers.
        </li>
        <p></p>
        <li className={s.ul}>
          The site was created by me in the process of learning the courses that
          will be described on this site.
        </li>
      </ol>
    </div>
  );
};

export default HomePage;

import React from "react";
import s from "./FavoriteCourses.module.css";
import CourseCard from "../CourseCard/CourseCard";

const FavoriteCorses = ({ favorites }) => {
  return (
    <div className={s.container}>
      {favorites.map((card) => (
        <div key={card.id} id={card.id}>
          <CourseCard
            text={card.text}
            img={card.img}
            color={card.color}
            onClick={() => {}}
          />
        </div>
      ))}
    </div>
  );
};

export default FavoriteCorses;

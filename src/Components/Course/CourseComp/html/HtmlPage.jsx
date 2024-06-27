import { React, useState } from "react";
import htmlIMG from "./htmlImg/htmlMG.jpg";
import s from "./htmlPage.module.css";
import CourseCard from "../../CourseCard/CourseCard";
import { useFavoritesContext } from "../../../../Modules/favorites/favoritesContext";
import { useCardsContext } from "../../../../Modules/cards/cardsContext";

const HtmlPage = () => {
  const { setFavorites } = useFavoritesContext();
  const { htmlCards: cards } = useCardsContext();
  return (
    <div className={s.container}>
      {cards.map((card) => (
        <CourseCard
          text={card.text}
          img={card.img}
          color={card.color}
          onClick={() => setFavorites((favorites) => [...favorites, card])}
        />
      ))}
    </div>
  );
};

export default HtmlPage;

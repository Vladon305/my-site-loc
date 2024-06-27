import React, { useContext, useState } from "react";
import { htmlCards as htmlData } from "./cards.js";

const CardsContext = React.createContext(undefined); // Значение по умолчанию

export default CardsContext;

export const useCardsContext = () => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCardsContext must be used within a CardsProvider");
  }

  return context;
};

export const CardsProvider = ({ children }) => {
  const [htmlCards, setHtmlCards] = useState(htmlData);
  const [cssCards, setCssCards] = useState([]);
  const [jsCards, setJsCards] = useState([]);

  return (
    <CardsContext.Provider
      value={{
        htmlCards,
        setHtmlCards,
        cssCards,
        setCssCards,
        jsCards,
        setJsCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

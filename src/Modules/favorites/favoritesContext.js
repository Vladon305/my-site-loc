import React, { useContext, useState } from "react";

const FavoritesContext = React.createContext(undefined); // Значение по умолчанию

export default FavoritesContext;

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [htmlCards, setHtmlCards] = useState([]);
  const [cssCards, setCssCards] = useState([]);
  const [jsCards, setJsCards] = useState([]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        htmlCards,
        setHtmlCards,
        cssCards,
        setCssCards,
        jsCards,
        setJsCards,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

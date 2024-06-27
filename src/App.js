import React, { useState } from "react";
import NavBar from "./Components/NavigationBar/NavBar";
import CoursePage from "./Components/Course/CourseBar/CoursePage";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import CourseCompBlock from "./Components/Course/CourseComp/CourseCompBlock/CourseCompBlocks";
import DevelopmentBranch from "./Components/Development-Branch/DevelopmentBranch";

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure you import Routes
import FavoriteCorses from "./Components/Course/Favorite-Courses/FavoriteCourses";
import { useFavoritesContext } from "./Modules/favorites/favoritesContext";

const App = () => {
  const { favorites } = useFavoritesContext();

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route exact path="/Course" element={<CoursePage />} />
        <Route path="/CourseCompBlock" element={<CourseCompBlock />} />
        <Route
          path="/FavoriteCourses"
          element={<FavoriteCorses favorites={favorites} />}
        />
        <Route path="/DevelopmentBranch" element={<DevelopmentBranch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

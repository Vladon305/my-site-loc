import React from "react";
import NavBar from "./Components/NavigationBar/NavBar";
import CoursePage from "./Components/Course/CourseBar/CoursePage";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import HtmlPage from "./Components/Course/CourseComp/html/HtmlPage";

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure you import Routes

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Course" element={<CoursePage />} />
        <Route path="/htmlPage" element={<HtmlPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

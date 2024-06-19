import React from "react";
import NavBar from "./Components/NavigationBar/NavBar";
import CoursePage from "./Components/Course/CourseBar/CoursePage";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import CourseCompBlock from "./Components/Course/CourseComp/CourseCompBlocks";

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure you import Routes

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route exact path="/Course" element={<CoursePage />} />
        <Route path="/CourseCompBlock" element={<CourseCompBlock />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

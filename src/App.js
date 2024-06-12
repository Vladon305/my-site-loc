import React from "react";
import NavBar from "./Components/NavigationBar/NavBar";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import Course from "./Components/Course/Course";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure you import Routes

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import s from "./NavBar.module.css";
import NavBarLogo from "./navBarImg/NavBarLogo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={s.container}>
      <NavLink to="/HomePage" ClassName={s.a}>
        <img className={s.logostyles} src={NavBarLogo} alt="Logo of NavBar" />
      </NavLink>
      <NavLink to="/Course" className={s.a}>
        Course
      </NavLink>
    </div>
  );
};

export default NavBar;

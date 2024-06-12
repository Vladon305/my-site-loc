import React from "react";
import s from "./NavBar.module.css";
import NavBarLogo from "./img/NavBarLogo.png";

const NavBar = () => {
  return (
    <div className={s.container}>
      <a className={s.a} href="/HomePage">
        <img className={s.logostyles} src={NavBarLogo} alt="Logo of NavBar" />
      </a>
      <a href="/Course" className={s.a}>
        Course
      </a>
    </div>
  );
};

export default NavBar;

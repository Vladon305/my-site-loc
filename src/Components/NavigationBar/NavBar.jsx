import React from "react";
import s from "./NavBar.module.css";
import NavBarLogo from "./img/NavBarLogo.png";

const NavBar = () => {
  return (
    <div className={s.container}>
      <a className={s.a} href="http://localhost:3000/">
        <img className={s.logostyles} src={NavBarLogo} alt="Logo of NavBar" />
      </a>
      <a className={s.a}>Course</a>
    </div>
  );
};

export default NavBar;

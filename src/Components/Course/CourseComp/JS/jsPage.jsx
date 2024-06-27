import React from "react";
import s from "./jsPage.module.css";

const JsPage = () => {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <img className={s.imgCard} alt="htmlIMG" />

        <p className={s.pCard}>
          By clicking on the button below, a list of the
          <span className={s.aqua}> best HTML courses</span> will appear. These
          are the ones I <span className={s.aqua}>recommend you start </span>
          with.
        </p>
        <button className={s.btnCard}>
          <a href="#" target="_blank" className={s.triggerOption}>
            Corse Link
          </a>
        </button>
      </div>
      <div className={s.card}>
        <img className={s.imgCard} alt="htmlIMG" />

        <p className={s.pCard}>
          By clicking on the button below, a list of the
          <span className={s.aqua}> best HTML courses</span> will appear. These
          are the ones I <span className={s.aqua}>recommend you start </span>
          with.
        </p>
        <button className={s.btnCard}>
          <a href="#" target="_blank" className={s.triggerOption}>
            Corse Link
          </a>
        </button>
      </div>
      <div className={s.card}>
        <img className={s.imgCard} alt="htmlIMG" />

        <p className={s.pCard}>
          By clicking on the button below, a list of the
          <span className={s.aqua}> best HTML courses</span> will appear. These
          are the ones I <span className={s.aqua}>recommend you start </span>
          with.
        </p>
        <button className={s.btnCard}>
          <a href="#" target="_blank" className={s.triggerOption}>
            Corse Link
          </a>
        </button>
      </div>
      <div className={s.card}>
        <img className={s.imgCard} alt="htmlIMG" />

        <p className={s.pCard}>
          By clicking on the button below, a list of the
          <span className={s.aqua}> best HTML courses</span> will appear. These
          are the ones I <span className={s.aqua}>recommend you start </span>
          with.
        </p>
        <button className={s.btnCard}>
          <a href="#" target="_blank" className={s.triggerOption}>
            Corse Link
          </a>
        </button>
      </div>
    </div>
  );
};

export default JsPage;

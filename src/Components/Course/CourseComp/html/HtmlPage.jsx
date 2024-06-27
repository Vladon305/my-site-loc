import { React, useState } from "react";
import htmlIMG from "./htmlImg/htmlMG.jpg";
import s from "./htmlPage.module.css";
import { PlusCircleOutlined } from "@ant-design/icons";

const HtmlPage = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorite = (id) => {
    setFavorites((prevFavorites) => [...prevFavorites, id]);
  };

  return (
    <div className={s.container}>
      <div id="html1" className={s.card}>
        <img className={s.imgCard} src={htmlIMG} alt="htmlIMG" />
        <p className={s.pCard}>
          By clicking on the button below, a list of the
          <span className={s.aqua}> best HTML courses</span> will appear. These
          are the ones I <span className={s.aqua}>recommend you start </span>
          with.
        </p>
        <div>
          <PlusCircleOutlined className={s.btnHeart} />
        </div>
        <button className={s.btnCard}>
          <a href="#" target="_blank" className={s.triggerOption}>
            Corse Link
          </a>
        </button>
      </div>

      <div id="html2" className={s.card}>
        <img className={s.imgCard} src={htmlIMG} alt="htmlIMG" />
        <p className={s.pCard}>
          By clicking on the button below, a list of the
          <span className={s.aqua}> best HTML courses</span> will appear. These
          are the ones I <span className={s.aqua}>recommend you start </span>
          with.
        </p>
        <div>
          <PlusCircleOutlined className={s.btnHeart} />
        </div>
        <button className={s.btnCard}>
          <a href="#" target="_blank" className={s.triggerOption}>
            Corse Link
          </a>
        </button>
      </div>

      <div id="html3" className={s.card}>
        <img className={s.imgCard} src={htmlIMG} alt="htmlIMG" />
        <p className={s.pCard}>
          By clicking on the button below, a list of the
          <span className={s.aqua}> best HTML courses</span> will appear. These
          are the ones I <span className={s.aqua}>recommend you start </span>
          with.
        </p>
        <div>
          <PlusCircleOutlined className={s.btnHeart} />
        </div>
        <button className={s.btnCard}>
          <a href="#" target="_blank" className={s.triggerOption}>
            Corse Link
          </a>
        </button>
      </div>

      <div id="html4" className={s.card}>
        <img className={s.imgCard} src={htmlIMG} alt="htmlIMG" />
        <p className={s.pCard}>
          By clicking on the button below, a list of the
          <span className={s.aqua}> best HTML courses</span> will appear. These
          are the ones I <span className={s.aqua}>recommend you start </span>
          with.
        </p>
        <div>
          <PlusCircleOutlined className={s.btnHeart} />
        </div>
        <button className={s.btnCard}>
          <a href="#" target="_blank" className={s.triggerOption}>
            Corse Link
          </a>
        </button>
      </div>
    </div>
  );
};

export default HtmlPage;

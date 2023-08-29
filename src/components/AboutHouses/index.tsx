import img from "assets/img/img2.png";
import style from "./About.module.scss";

const AboutHouses = () => {
  return (
    <section className={style.design_about}>
      <div className={style.centralizar}>
        <div className={style.container__room}>
          <img src={img} alt="Design de quarto" className={style.room} />
        </div>
        <div className={style.container}>
          <div className={style.container__info}>
            <h2 className={style.container__info__title}>Design Minimalista</h2>
            <p className={style.container__info__text}>
              Móveis apenas essenciais e com design moderno, além de
              revestimentos bonitos e em cores neutras para manter a casa sempre
              com um estilo clean e suave.
            </p>
          </div>
          <button className={style.container__about}>
            Quero saber mais sobre os designs
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHouses;

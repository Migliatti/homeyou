import style from "./gallery.module.scss";
import img1 from "assets/img/img3.png";
import img2 from "assets/img/img4.png";
import img3 from "assets/img/img5.png";
import classNames from "classnames";

const Gallery = () => {
  return (
    <section className={style.gallery} id="gallery">
      <div className={style.gallery__container}>
        <h2 className={style.gallery__container__title}>Galeria</h2>
        <p className={style.gallery__container__text}>
          Se você está entediado com a aparência da decoração de interiores da
          casa comuns, trabalhamos com designs diferentes e inovadores.
        </p>
      </div>
      <ul className={style.gallery__list}>
        <li className={style.gallery__list__item}>
          <img
            src={img1}
            alt="Sala de estar"
            className={classNames(
              style.gallery__list__item__img,
              style.gallery__list__item__img__first
            )}
          />
        </li>
        <li className={style.gallery__list__item}>
          <img
            src={img2}
            alt="Sala de lazer"
            className={classNames(style.gallery__list__item__img)}
          />
        </li>
        <li className={style.gallery__list__item}>
          <img
            src={img3}
            alt="Banheiro"
            className={classNames(
              style.gallery__list__item__img,
              style.gallery__list__item__img__last
            )}
          />
        </li>
      </ul>
    </section>
  );
};

export default Gallery;

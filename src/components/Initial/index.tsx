import style from "./Initial.module.scss";
import img from "assets/img/img1.png";

const Initial = () => {
  return (
    <section className={style.principal} id="inicial">
      <div className={style.container}>
        <h2 className={style.container__title}>
          Ajudar você a encontrar o melhor conforto, é nossa prioridade.
        </h2>
        <p className={style.container__text}>
          Encontre uma variedade de propriedades que combinam com você. Esqueça
          todas as dificuldades em encontrar uma residência
        </p>
        <div className={style.container__button}>
          <button className={style.button__contact}>Entre em contato</button>
          <button className={style.button__about}>Mais sobre nós</button>
        </div>
      </div>
      <img
        src={img}
        alt="Casa mais visitada"
        className={style.principal__img}
      />
    </section>
  );
};

export default Initial;

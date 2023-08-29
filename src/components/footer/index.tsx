import icon from "assets/icon/home.svg";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <img src={icon} alt="logo da homeyou" className={style.footer__icon} />
      <div className={style.footer__container}>
        <ul className={style.footer__container__list}>
          <h3 className={style.footer__container__list__title}>Produtos</h3>
          <li className={style.footer__container__list__item}>Mobilia</li>
          <li className={style.footer__container__list__item}>Segurança</li>
          <li className={style.footer__container__list__item}>
            Design Interior
          </li>
        </ul>
        <ul className={style.footer__container__list}>
          <h3 className={style.footer__container__list__title}>
            Mais Informações
          </h3>
          <li className={style.footer__container__list__item}>Contrato</li>
          <li className={style.footer__container__list__item}>Sobre nós</li>
          <li className={style.footer__container__list__item}>
            Termos e Condições
          </li>
        </ul>
        <ul className={style.footer__container__list}>
          <h3 className={style.footer__container__list__title}>
            Redes Sociais
          </h3>
          <li className={style.footer__container__list__item}>Pinterest</li>
          <li className={style.footer__container__list__item}>Facebook</li>
          <li className={style.footer__container__list__item}>Instagram</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

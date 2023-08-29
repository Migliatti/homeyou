import home from "assets/icon/home.svg";
import user from "assets/icon/user.svg";
import heart from "assets/icon/heart.svg";
import search from "assets/icon/search.svg";
import HamburgerMenu from "./HamburgerMenu";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.centralizar}>
        <div className={style.header__logo}>
          <img src={home} alt="logo da HOMEYOU" className={style.logo__img} />
          <h1 className={style.logo__text}>HOMEYOU</h1>
        </div>
        <div className={style.header__menu}>
          <HamburgerMenu />
        </div>
        <nav className={style.header__navigate}>
          <div className={style.nav__container}>
            <a href="#inicial" className={style.navigate__link}>
              Inicio
            </a>
            <a href="#gallery" className={style.navigate__link}>
              Galeria
            </a>
            <a href="#contact" className={style.navigate__link}>
              Contato
            </a>
          </div>
          <div className={style.button__container}>
            <button className={style.navigate__button}>
              <img
                src={user}
                alt="ícone de usuário"
                className={style.button__img}
              />
            </button>
            <button className={style.navigate__button}>
              <img
                src={heart}
                alt="lista de favoritados"
                className={style.button__img}
              />
            </button>
            <button className={style.navigate__button}>
              <img src={search} alt="pesquisa" className={style.button__img} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

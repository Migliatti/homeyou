import style from "./Header.module.scss";
import home from "assets/icon/home.svg";
import user from "assets/icon/user.svg";
import heart from "assets/icon/heart.svg";
import search from "assets/icon/search.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={home} alt="logo da HOMEYOU" className={style.logo__img} />
        <h1 className={style.logo__text}>HOMEYOU</h1>
      </div>
      <nav>
        <a href="">Inicio</a>
        <a href=""> Galeria</a>
        <a href="">Contato</a>
        <button>
          <img src={user} alt="ícone de usuário" />
        </button>
        <button>
          <img src={heart} alt="lista de favoritados" />
        </button>
        <button>
          <img src={search} alt="pesquisa" />
        </button>
      </nav>
    </header>
  );
};

export default Header;

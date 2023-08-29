import { useState } from "react";
import user from "assets/icon/user.svg";
import heart from "assets/icon/heart.svg";
import search from "assets/icon/search.svg";
import classNames from "classnames";
import style from "./MenuHamburger.module.scss";

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={classNames(style.hamburger__menu, {
        [style.hamburger__menu_open]: isOpen,
      })}
    >
      <div className={style.hamburger__menu__icon} onClick={toggleMenu}>
        <div className={style.hamburger__menu__icon__bar}></div>
        <div className={style.hamburger__menu__icon__bar}></div>
        <div className={style.hamburger__menu__icon__bar}></div>
      </div>
      <div
        className={classNames(style.menu__items, {
          [style.menu__items_open]: isOpen,
        })}
      >
        <div className={style.menu__items__personal}>
          <button className={style.menu__items__personal__button}>
            <img
              src={user}
              alt="ícone de usuário"
              className={style.menu__items__personal__button__image}
              onClick={toggleMenu}
            />
          </button>
          <button className={style.menu__items__personal__button}>
            <img
              src={heart}
              alt="lista de favoritados"
              className={style.menu__items__personal__button__image}
              onClick={toggleMenu}
            />
          </button>
          <button className={style.menu__items__personal__button}>
            <img
              src={search}
              alt="pesquisa"
              className={style.menu__items__personal__button__image}
              onClick={toggleMenu}
            />
          </button>
        </div>
        <div className={style.menu__items__nav}>
          <a
            href="#inicial"
            className={style.menu__items__nav__link}
            onClick={toggleMenu}
          >
            Inicio
          </a>
          <a
            href="#gallery"
            className={style.menu__items__nav__link}
            onClick={toggleMenu}
          >
            Galeria
          </a>
          <a
            href="#contact"
            className={style.menu__items__nav__link}
            onClick={toggleMenu}
          >
            Contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuHamburger;

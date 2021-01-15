import { signOut } from "ducks/auth/actions";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "styles/Header.scss";
import Search from "icons/Search";
import UserNav from "views/UserNav";

const Header = () => {
  const dispatch = useDispatch();

  const [openUserNav, setOpenUserNav] = useState(false);

  const { auth } = useSelector((store) => store.auth);

  return (
    <header className="header">
      <div className="header__tools">
        <NavLink to="/" className="link site-logo">
          Exprts
        </NavLink>

        <div className="header__search">
          <Search className="search-icon" />
          <input type="text" placeholder="Поиск экспертов, навыки" />
        </div>
      </div>

      <div className="header__nav">
        <NavLink to="/" className="link header__link">
          Эксперты
        </NavLink>
        <NavLink to="/" className="link header__link">
          Вопросы
        </NavLink>
        <NavLink to="/" className="link header__link link_about">
          О нас
        </NavLink>
        <NavLink to="/" className="link header__link link_create">
          Создать проект
        </NavLink>
        {!auth && (
          <NavLink to="/sign-in" className="link header__link">
            Войти
          </NavLink>
        )}

        <UserNav openUserNav={openUserNav} setOpenUserNav={setOpenUserNav} />
      </div>
    </header>
  );
};

export default Header;

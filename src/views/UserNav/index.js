import { signOut } from "ducks/auth/actions";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "styles/Header.scss";
import User from "icons/User";

const UserNav = ({ openUserNav, setOpenUserNav }) => {
  const dispatch = useDispatch();
  const { token, auth } = useSelector((store) => store.auth);

  const onHandleSignOut = () => {
    setOpenUserNav(false);
    dispatch(signOut(token));
  };

  return (
    auth && (
      <div className="header__user">
        <span onClick={() => setOpenUserNav(!openUserNav)} className="user-btn">
          <User />
        </span>
        {openUserNav && (
          <div className="user-nav">
            <NavLink
              to="/personal-area"
              className="link user-area"
              onClick={() => setOpenUserNav(false)}
            >
              Персональный кабинет
            </NavLink>
            <NavLink to="/log-out" className="link" onClick={onHandleSignOut}>
              Выйти
            </NavLink>
          </div>
        )}
      </div>
    )
  );
};

export default UserNav;

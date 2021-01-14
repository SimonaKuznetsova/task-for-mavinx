import { signOut } from "ducks/auth/actions";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "styles/Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);

  const [openUserNav, setOpenUserNav] = useState(false);

  const { auth } = useSelector((store) => store.auth);

  const onHandleSignOut = () => {
    setOpenUserNav(false);
    dispatch(signOut(token));
  };

  return (
    <header className="header">
      <NavLink to="/" className="link site-logo">
        Site logo
      </NavLink>

      <div className="header__nav">
        {!auth && (
          <NavLink to="/sign-in" className="link header__sign">
            Sign In
          </NavLink>
        )}

        {auth && (
          <div className="header__user">
            <span onClick={() => setOpenUserNav(!openUserNav)}>User Icon</span>
            {openUserNav && (
              <div className="user-nav">
                <NavLink
                  to="personal-area"
                  className="link user-area"
                  onClick={() => setOpenUserNav(false)}
                >
                  Personal area
                </NavLink>
                <NavLink
                  to="log-out"
                  className="link"
                  onClick={onHandleSignOut}
                >
                  Log Out
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

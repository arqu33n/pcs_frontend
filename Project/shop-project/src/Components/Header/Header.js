import { Link } from "react-router-dom";
import React from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__content container">
          <Link to="/" className="header__logo">
            <img
              src="/header-logo.svg"
              alt="logo"
              className="header__logo-image"
            />
          </Link>
          <a href="/" className="header__search">
            <img
              src="/header-search.svg"
              alt="search-icon"
              className="header__search-icon"
            />
          </a>
          <nav className="header__nav">
            <div className="header__menu">
              <HeaderMenu />
            </div>
            <div className="header__user">
              <img
                className="header__user-icon"
                src="/header-user-icon.svg"
                alt="user-icon"
              />
            </div>
            <div className="header__shopping-cart">
              <Link to="/Cart">
                <img
                  className="header__shopping-cart-icon"
                  src="/header-shopping-cart-icon.svg"
                  alt="shopping-cart-icon"
                />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

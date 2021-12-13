import React from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__content container">
          <a href="/" className="header__logo">
            <img
              src="./header-logo.svg"
              alt="logo"
              className="header__logo-image"
            />
          </a>
          <a href="/" className="header__search">
            <img
              src="./header-search.svg"
              alt="search-icon"
              class="header__search-icon"
            />
          </a>
          <nav className="header__nav">
            <div className="header__menu">
              {/* <a href="#" className="header__menu-link"> */}
              {/* <img
                className="header__menu-icon"
                src="./header-menu-icon.svg"
                alt="menu-icon"
              /> */}
              <HeaderMenu />
              {/* </a> */}
            </div>
            <div className="header__user">
              <img
                className="header__user-icon"
                src="./header-user-icon.svg"
                alt="user-icon"
              />
            </div>
            <div className="header__shopping-cart">
              <img
                className="header__shopping-cart-icon"
                src="./header-shopping-cart-icon.svg"
                alt="shopping-cart-icon"
              />
            </div>
            <div className="header__menu_dropdown">
              <ul className="menu_dropdown__list">
                <li>
                  <a className="menu_dropdown__title" href="#">
                    MAN
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Accessories
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Bags
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Denim
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    T-shirts
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__title" href="#">
                    WONAN
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Accessories
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Jackets&Coats
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Polos
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    T-shirts
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Shirts
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__title" href="#">
                    KIDS
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Accessories
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Jackets&Coats
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Polos
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    T-shirts
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Shirts
                  </a>
                </li>
                <li>
                  <a className="menu_dropdown__desc" href="#">
                    Bags
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

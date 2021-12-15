import React from "react";
import { Link } from "react-router-dom";
import Advantages from "../Advantages/Advantages";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";
export default class MainPage extends React.Component {
  render() {
    return (
      <div className="mainpage">
        <Header />

        <div className="banner">
          <img src="/banner-image.png" alt="banner" className="banner__image" />
          <div className="banner__content">
            <div className="banner__content-title">
              <div className="banner__title-decor"></div>
              <h1 className="banner__content-title_large">THE BRAND</h1>
              <h2>
                OF LUXERIOUS
                <span className="banner__content-title_red">FASHION</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="menu">
            <section className="menu__item_1">
              <h3 className="menu__item-title">
                <span className="menu__item-description">30% OFF</span>
                FOR WOMEN
              </h3>
            </section>
            <section className="menu__item_2">
              <h3 className="menu__item-title">
                <span className="menu__item-description">HOT DEAL</span>FOR MEN
              </h3>
            </section>

            <section className="menu__item_3">
              <h3 className="menu__item-title">
                <span className="menu__item-description">NEW ARRIVALS</span>
                FOR KIDS
              </h3>
            </section>

            <section className="menu__item_large">
              <h3 className="menu__item-title">
                <span className="menu__item-description">
                  LUXIROUS & TRENDY
                </span>
                ACCESORIES
              </h3>
            </section>
          </div>
          <h2 className="main__title">
            Fetured Items
            <span className="main__description">
              Shop for items based on what we featured in this week
            </span>
          </h2>
          <div className="page">
            <section className="page__item">
              <img
                src="/page-item-image-1.svg"
                alt="Картинка товара №1"
                className="page__item-image"
              />
              <h3 className="page__item-title">
                ELLERY X M'O CAPSULE
                <span className="page__item-description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </span>
                <span className="page__item-price">$52.00</span>
              </h3>
            </section>
            <section className="page__item">
              <img
                src="/page-item-image-2.svg"
                alt="Картинка товара №2"
                className="page__item-image"
              />
              <h3 className="page__item-title">
                ELLERY X M'O CAPSULE
                <span className="page__item-description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </span>
                <span className="page__item-price">$52.00</span>
              </h3>
            </section>
            <section className="page__item">
              <img
                src="/page-item-image-3.svg"
                alt="Картинка товара №3"
                className="page__item-image"
              />
              <h3 className="page__item-title">
                ELLERY X M'O CAPSULE
                <span className="page__item-description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </span>
                <span className="page__item-price">$52.00</span>
              </h3>
            </section>
            <section className="page__item">
              <img
                src="/page-item-image-4.svg"
                alt="Картинка товара №4"
                className="page__item-image"
              />
              <h3 className="page__item-title">
                ELLERY X M'O CAPSULE
                <span className="page__item-description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </span>
                <span className="page__item-price">$52.00</span>
              </h3>
            </section>
            <section className="page__item">
              <img
                src="/page-item-image-5.svg"
                alt="Картинка товара №5"
                className="page__item-image"
              />
              <h3 className="page__item-title">
                ELLERY X M'O CAPSULE
                <span className="page__item-description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </span>
                <span className="page__item-price">$52.00</span>
              </h3>
            </section>
            <section className="page__item">
              <img
                src="/page-item-image-6.svg"
                alt="Картинка товара №6"
                className="page__item-image"
              />
              <h3 className="page__item-title">
                ELLERY X M'O CAPSULE
                <span className="page__item-description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </span>
                <span className="page__item-price">$52.00</span>
              </h3>
            </section>
          </div>
          <Link to="/Page" className="main__button">
            Browse All Product
          </Link>
        </div>
        <Advantages />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

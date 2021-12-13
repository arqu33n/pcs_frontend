import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";
export default class Cart extends React.Component {
  render() {
    return (
      <div className="сart">
        <Header />
        <div className="category">
          <div className="container">
            <div className="cart__title">
              <div className="category__title">NEW ARRIVALS</div>
            </div>
          </div>
        </div>
        <div className="cart__content container">
          <div className="cart__items">
            <div className="cart__items_one"></div>
            <div className="cart__items_one"></div>
          </div>
          <div className="cart__form">
            <span className="cart__form-title">SHIPPING ADRESS</span>
            <form action="GET A QUOTE" className="cart__form">
              <div className="form__adress">
                <input
                  type="text"
                  placeholder="Bangladesh"
                  id="adress-input"
                  class="form__input"
                />
              </div>
              <div className="form__state">
                <input
                  type="text"
                  placeholder="State"
                  id="state-input"
                  class="form__input"
                />
              </div>
              <div className="form__postcode">
                <input
                  type="text"
                  placeholder="Postcode/Zip"
                  id="postcode-input"
                  class="form__input"
                />
              </div>
              <button
                type="submit"
                name="form__submit-button"
                value="submit__button"
                class="form__submit-button"
              >
                GET A QUOTE
              </button>
            </form>
          </div>
        </div>
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.price * item.qty;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  return (
    <div className="сart">
      <Header />
      <div className="category">
        <div className="container">
          <div className="cart__title">
            <div className="category__title">SHOPPING CART</div>
          </div>
        </div>
      </div>
      <div className="cart__content container">
        <div className="cart__items">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart__form">
          <span className="cart__form-title">SHIPPING ADRESS</span>
          <form action="GET A QUOTE" className="form">
            <div className="form__adress">
              <input
                type="text"
                placeholder="Bangladesh"
                id="adress-input"
                className="form__input"
              />
            </div>
            <div className="form__state">
              <input
                type="text"
                placeholder="State"
                id="state-input"
                className="form__input"
              />
            </div>
            <div className="form__postcode">
              <input
                type="text"
                placeholder="Postcode/Zip"
                id="postcode-input"
                className="form__input"
              />
            </div>
            <button
              type="submit"
              name="form__submit-button"
              value="submit__button"
              className="form__submit-button"
            >
              GET A QUOTE
            </button>
          </form>
          <div className="cart__total-price">
            <div className="price__count">
              <span className="price__count_grand">
                TOTAL ITEMS
                <span className="price__count_grand-red">{totalItems}</span>
              </span>
              <span className="price__count_grand">
                GRAND TOTAL
                <span className="price__count_grand-red">{totalPrice}</span>
              </span>
            </div>
            <button
              type="submit"
              name="price-checkout-button"
              value="checkout-button"
              className="price__checkout-button"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};
export default connect(mapStateToProps)(Cart);

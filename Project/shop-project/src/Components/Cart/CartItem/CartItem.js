import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../../redux/Shopping/shopping-actions";
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};
const CartItem = ({ item, removeFromCart }) => {
  const { title, qty, id, image, price } = item;

  return (
    <div>
      <div className="cart__item">
        <img src={image} alt="item" className="cart__item-image" />
        <div className="cart__item-content">
          <div className="cart__item-title">{title}</div>
          <div className="cart__item-qty">Quantity: {qty}</div>
          <div className="cart__item-price">Price: {price}</div>
          <button
            className="cart__item-button"
            onClick={() => removeFromCart(id)}
          >
            DELETE ITEM
          </button>
        </div>
      </div>
    </div>
  );
};
export default connect(null, mapDispatchToProps)(CartItem);

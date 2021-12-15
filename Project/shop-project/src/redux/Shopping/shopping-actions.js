import * as actionTypes from "./shopping-types";
export const addToCart = (id) => {
  return { type: actionTypes.ADD_TO_CART, payload: { id } };
};
export const removeFromCart = (id) => {
  return { type: actionTypes.REMOVE_FROM_CART, payload: { id } };
};

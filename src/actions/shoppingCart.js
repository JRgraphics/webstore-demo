import { ADD_TO_CART, DELETE_FROM_CART } from "./types";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const deleteFromCart = (item, index) => {
  return {
    type: DELETE_FROM_CART,
    item: item,
    index: index,
  };
};

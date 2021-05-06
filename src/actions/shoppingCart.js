import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  EMPTY_CART,
  MODIFY_CART,
} from "./types";

// Adds item to the cart
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

// Deletes all the instances of an item from the cart
export const deleteFromCart = (item, index) => {
  return {
    type: DELETE_FROM_CART,
    item: item,
    index: index,
  };
};

// Removes all the items and their instances from the cart
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

// Modifies the amount of a specific item in the cart
export const modifyCart = (item, amount) => {
  return {
    type: MODIFY_CART,
    item: item,
    amount: amount,
  };
};

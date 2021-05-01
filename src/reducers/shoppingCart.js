import { ADD_TO_CART, DELETE_FROM_CART, MODIFY_CART } from "../actions";

const initialState = {
  shoppingCart: [],
  amounts: {},
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const amounts = { ...state.amounts };
      let amount = 1;
      if (!!state.amounts[item.id]) {
        amount = ++state.amounts[item.id];
      }
      amounts[item.id] = amount;
      return {
        ...state,
        shoppingCart: !!state.shoppingCart.find((el) => el === item)
          ? [...state.shoppingCart]
          : [...state.shoppingCart, item],
        amounts: amounts,
      };
    case MODIFY_CART:
      return {
        ...state,
        favourites: action.payload,
      };
    case DELETE_FROM_CART:
      const amountObject = { ...state.amounts };
      delete amountObject[action.item.id];
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (item, index) => action.index !== index
        ),
        amounts: amountObject,
      };
    default:
      return state;
  }
};

export const favouriteSelectors = {
  getShoppingCart: (state = initialState) => state.shoppingCart,
};

export default favouriteReducer;

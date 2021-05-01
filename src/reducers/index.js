import { combineReducers } from "redux";

// Reducers
import catalogueReducer from "./catalogue";
import shoppingCartReducer from "./shoppingCart";

const rootReducer = combineReducers({
  catalogue: catalogueReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;

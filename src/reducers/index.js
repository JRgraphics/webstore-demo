import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Reducers
import catalogueReducer from "./catalogue";
import shoppingCartReducer from "./shoppingCart";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["shoppingCart"],
};

const rootReducer = combineReducers({
  catalogue: catalogueReducer,
  shoppingCart: shoppingCartReducer,
});

export default persistReducer(persistConfig, rootReducer);

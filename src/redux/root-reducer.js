import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  // No need to persist user since it is being persisted by firebase
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);

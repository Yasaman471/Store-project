import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Feature/Product/ProductSlice";
import CartReducer from "../Feature/Cart/CartSlice";

const store = configureStore({
  reducer: { product: ProductReducer, cart: CartReducer },
});

export default store;

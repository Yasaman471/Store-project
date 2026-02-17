import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Feature/Product/ProductSlice";

const store = configureStore({
  reducer: { product: ProductReducer },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../Helpers/helper";

const initialState = {
  selectedItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  checkOut: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_ITEM: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.totalPrice = sumPrice(state.selectedItems);
        state.totalQuantity = sumQuantity(state.selectedItems);
        state.checkOut = false;
      }
    },
    REMOVE_ITEM: (state, action) => {
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id,
      );
      state.selectedItems = newSelectedItem;
      state.totalPrice = sumPrice(state.selectedItems);
      state.totalQuantity = sumQuantity(state.selectedItems);
    },
    UPDATE_INCREASE_QUANTITY: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[increaseIndex].quantity++;
      state.totalPrice = sumPrice(state.selectedItems);
      state.totalQuantity = sumQuantity(state.selectedItems);
    },
    UPDATE_DECREASE_QUANTITY: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.totalPrice = sumPrice(state.selectedItems);
      state.totalQuantity = sumQuantity(state.selectedItems);
    },
    CHECKOUT: (state) => {
      state.selectedItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.checkOut = true;
    },
  },
});

export default cartSlice.reducer;
export const {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_DECREASE_QUANTITY,
  UPDATE_INCREASE_QUANTITY,
  CHECKOUT,
} = cartSlice.actions;

import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../Helpers/helper";

const initialState = {
  selectedItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  checkOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkOut: false,
      };
    case "UPDATE_INCREASE_QUANTITY":
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[increaseIndex].quantity++;

      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    case "UPDATE_DECREASE_QUANTITY":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems(decreaseIndex).quantity--;

      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        totalQuantity: 0,
        totalPrice: 0,
        checkOut: true,
      };
    default:
      throw new Error("Invalid Action!");
  }
};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const contextValue = useContext(CartContext);
  return [contextValue.state, contextValue.dispatch];
};

export default CartProvider;
export { useCart };

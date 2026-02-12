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
    case "ADD_ITEM": {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        const newSelectedItems = [
          ...state.selectedItems,
          { ...action.payload, quantity: 1 },
        ];
        return {
          ...state,
          selectedItems: newSelectedItems,
          ...sumProducts(newSelectedItems),
          checkOut: false,
        };
      }
      return state;
    }
    case "UPDATE_INCREASE_QUANTITY": {
      const newSelectedItemsIncrease = state.selectedItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      return {
        ...state,
        selectedItems: newSelectedItemsIncrease,
        ...sumProducts(newSelectedItemsIncrease),
      };
    }
    case "REMOVE_ITEM": {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    }
    case "UPDATE_DECREASE_QUANTITY": {
      const newSelectedItemsDecrease = state.selectedItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
      return {
        ...state,
        selectedItems: newSelectedItemsDecrease,
        ...sumProducts(newSelectedItemsDecrease),
      };
    }
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

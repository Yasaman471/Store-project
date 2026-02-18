import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import { useDispatch } from "react-redux";

import { CHECKOUT } from "../Feature/Cart/CartSlice";

import styles from "./BasketSidebar.module.css";

function BasketSidebar({ state }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.totalPrice} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.totalQuantity}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => dispatch(CHECKOUT(state))}>CheckOut</button>
    </div>
  );
}

export default BasketSidebar;

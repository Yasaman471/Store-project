import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

import { calculateItemTotalPrice, shortenText } from "../Helpers/helper";
import {
  REMOVE_ITEM,
  UPDATE_DECREASE_QUANTITY,
  UPDATE_INCREASE_QUANTITY,
} from "../Feature/Cart/CartSlice";

import styles from "./BasketCard.module.css";

function BasketCard({ data }) {
  const { image, title, quantity, price } = data;
  const dispatch = useDispatch();

  const itemTotalPrice = calculateItemTotalPrice(price, quantity);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      {itemTotalPrice && <p>{itemTotalPrice}$</p>}

      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(REMOVE_ITEM(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(UPDATE_DECREASE_QUANTITY(data))}>
            -
          </button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(UPDATE_INCREASE_QUANTITY(data))}>
          +
        </button>
      </div>
    </div>
  );
}

export default BasketCard;

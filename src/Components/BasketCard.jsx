import { MdDeleteOutline } from "react-icons/md";

import { calculateItemTotalPrice, shortenText } from "../Helpers/helper";

import styles from "./BasketCard.module.css";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity, price } = data;

  const itemTotalPrice = calculateItemTotalPrice(price, quantity);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      {itemTotalPrice && <p>{itemTotalPrice}$</p>}

      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() => clickHandler("UPDATE_DECREASE_QUANTITY", data)}
          >
            -
          </button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("UPDATE_INCREASE_QUANTITY", data)}>
          +
        </button>
      </div>
    </div>
  );
}

export default BasketCard;

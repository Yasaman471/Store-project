import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import { productQuantity, shortenText } from "../Helpers/helper";
// import { useCart } from "../Context/CartContext";

import styles from "./Card.module.css";

function Card({ data }) {
  const { id, image, price, title } = data;

  // const [state, dispatch] = useCart();

  // const quantity = productQuantity(state, id);
  const quantity = 0;

  const clickHandler = (type) => {
    // dispatch({ type, payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandler("UPDATE_DECREASE_QUANTITY")}>
              -
            </button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("UPDATE_INCREASE_QUANTITY")}>
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { productQuantity, shortenText } from "../Helpers/helper";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_DECREASE_QUANTITY,
  UPDATE_INCREASE_QUANTITY,
} from "../Feature/Cart/CartSlice";

import styles from "./Card.module.css";

function Card({ data }) {
  const { id, image, price, title } = data;
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const quantity = productQuantity(state, id);

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
            <button onClick={() => dispatch(REMOVE_ITEM(data))}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => dispatch(UPDATE_DECREASE_QUANTITY(data))}>
              -
            </button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => dispatch(ADD_ITEM(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => dispatch(UPDATE_INCREASE_QUANTITY(data))}>
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

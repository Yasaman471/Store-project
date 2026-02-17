import { IoBagHandleOutline } from "react-icons/io5";

import BasketCard from "../Components/BasketCard";
// import { useCart } from "../Context/CartContext";

import styles from "./CheckOutPage.module.css";
import BasketSidebar from "../Components/BasketSidebar";

function CheckOutPage() {
  // const [state, dispatch] = useCart();

  // const clickHandler = (type, payload) => dispatch({ type, payload });

  return (
    <div>
      {/* {!state.totalQuantity ? (
        <div className={styles.emptyCartContainer}>
          <p>Your Card Is Empty!!</p>
          <IoBagHandleOutline />
        </div>
      ) : (
        <div className={styles.container}>
          <BasketSidebar state={state} clickHandler={clickHandler} />
          <div className={styles.products}>
            {state.selectedItems.map((product) => (
              <BasketCard
                key={product.id}
                data={product}
                clickHandler={clickHandler}
              />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
}

export default CheckOutPage;

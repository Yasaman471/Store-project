import { IoBagHandleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

import BasketCard from "../Components/BasketCard";
import BasketSidebar from "../Components/BasketSidebar";

import styles from "./CheckOutPage.module.css";

function CheckOutPage() {
  const state = useSelector((store) => store.cart);

  return (
    <div>
      {!state.totalQuantity ? (
        <div className={styles.emptyCartContainer}>
          <p>Your Card Is Empty!!</p>
          <IoBagHandleOutline />
        </div>
      ) : (
        <div className={styles.container}>
          <BasketSidebar state={state} />
          <div className={styles.products}>
            {state.selectedItems.map((product) => (
              <BasketCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckOutPage;

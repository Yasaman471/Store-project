import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

import { useCart } from "../Context/CartContext";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">BotoShop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.totalQuantity && <span>{state.totalQuantity}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Yasi With 💗</p>
      </footer>
    </>
  );
}

export default Layout;

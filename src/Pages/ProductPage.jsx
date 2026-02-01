import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductContext";
import styles from "./ProductPage.module.css";

function ProductPage() {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div>SideBar</div>
    </div>
  );
}

export default ProductPage;

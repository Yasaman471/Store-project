import { Link, useParams } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchProduct } from "../Feature/Product/ProductSlice";
import Loader from "../Components/Loader";

import styles from "./DetailesPage.module.css";

function DetailesPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const productDetailes = useSelector((store) =>
    store.product.products.find((item) => item.id === +id),
  );
  if (!productDetailes) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={productDetailes.image} alt={productDetailes.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetailes.title}</h3>
        <p className={styles.description}>{productDetailes.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productDetailes.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDetailes.price}$
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back To Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailesPage;

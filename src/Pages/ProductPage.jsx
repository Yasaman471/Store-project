import { useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductContext";
import styles from "./ProductPage.module.css";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

function ProductPage() {
  const [search, setSearch] = useState("");
  const products = useProducts();

  const SearchHandler = () => {
    console.log("Search");
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;

    console.log(category);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={SearchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Category</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's clothing</li>
            <li>Women's clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductPage;

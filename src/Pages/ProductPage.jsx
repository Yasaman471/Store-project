import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductContext";
import styles from "./ProductPage.module.css";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import {
  createObjectQuery,
  filterProducts,
  searchProducts,
} from "../Helpers/helper";
import { useSearchParams } from "react-router-dom";

function ProductPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query, products]);

  const SearchHandler = () => {
    setQuery((query) => createObjectQuery(query, { search }));
  };

  const categoryHandler = (event) => {
    if (event.target.tagName !== "LI") return;
    const category = event.target.innerText.toLowerCase();
    setQuery((query) => createObjectQuery(query, { category }));
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
          {!displayed.length && <Loader />}
          {displayed.map((item) => (
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

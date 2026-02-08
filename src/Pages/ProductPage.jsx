import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Card from "../Components/Card";
import Loader from "../Components/Loader";
import SearchBox from "../Components/SearchBox";
import SideBar from "../Components/SideBar";
import { useProducts } from "../Context/ProductContext";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../Helpers/helper";

import styles from "./ProductPage.module.css";

function ProductPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query, products]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductPage;

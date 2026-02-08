import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductContext";
import styles from "./ProductPage.module.css";
import { FaListUl } from "react-icons/fa";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../Helpers/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../Components/SearchBox";
import SideBar from "../Components/SideBar";

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
        <SideBar setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductPage;

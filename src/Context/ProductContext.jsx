import { createContext, useContext, useEffect, useState } from "react";
import api from "../Services/config";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    try {
      const fetchProduct = async () => {
        setProduct(await api.get("/products"));
      };
      fetchProduct();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

const useProductsDetailes = (id) => {
  const products = useContext(ProductContext);
  const result = products.find((item) => item.id === id);
  return result;
};

export default ProductProvider;
export { useProducts, useProductsDetailes };

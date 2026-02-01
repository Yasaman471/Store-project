import { createContext, useContext, useEffect, useState } from "react";
import api from "../Services/config";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);

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
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export default ProductProvider;
export { useProducts };

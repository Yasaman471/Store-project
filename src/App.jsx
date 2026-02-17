import { Navigate, Route, Routes } from "react-router-dom";

import ProductPage from "./Pages/ProductPage";
import DetailesPage from "./Pages/DetailesPage";
import CheckOutPage from "./Pages/CheckOutPage";
import PageNotFound from "./Pages/404";
// import ProductProvider from "./Context/ProductContext";
// import CartProvider from "./Context/CartContext";
import Layout from "./Layout/Layout";

function App() {
  return (
    // <CartProvider>
    //   <ProductProvider>
    <Layout>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<DetailesPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
    //   </ProductProvider>
    // </CartProvider>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import DetailesPage from "./Pages/DetailesPage";
import CheckOutPage from "./Pages/CheckOutPage";
import PageNotFound from "./Pages/404";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<DetailesPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

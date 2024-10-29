import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import UserPage from "../pages/users/UserPage";
import Layout from "../components/layout/Layout";
import NotFoundPage from "../components/NotFoundPage";
import CartPage from "../pages/cart/CartPage";
import ProductPage from "../pages/products/components/ProductPage";

const BasicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRoutes;

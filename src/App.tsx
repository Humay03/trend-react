import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import HomePage from "./pages/HomePage";
import ProductProvider from "./components/context/ProductContext";
import Cart from "./components/cartshop/Cart";
import Favorites from "./components/favorit/Favorites";
import Login from "./components/login/Login";
import AdminDashboard from "./components/admindashboard/AdminDashboard";
import ProductAdd from "./components/admindashboard/ProductAdd";


export default function App() {

  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="cartshop" element={<Cart />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="login" element={<Login />} />
            <Route path="admindashboard" element={<AdminDashboard />} />
            <Route path="productadd" element={<ProductAdd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}


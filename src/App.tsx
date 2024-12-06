import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import HomePage from "./pages/HomePage";
import ProductProvider from "./components/context/ProductContext";


export default function App() {

  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}


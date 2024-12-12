import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import HeaderTop from "../../components/layout/HeaderTop";
import HeaderBottom from "../../components/layout/HeaderBottom";
import CartContextProvider from "../../components/context/CartContext";

export default function Layout() {
    return (
        <CartContextProvider>
            <HeaderTop />
            <Header />
            <HeaderBottom />
            <Outlet />
        </CartContextProvider>
    )
}

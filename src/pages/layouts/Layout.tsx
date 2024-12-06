import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import HeaderTop from "../../components/layout/HeaderTop";
import HeaderBottom from "../../components/layout/HeaderBottom";

export default function Layout() {
    return (
        <>
            <HeaderTop />
            <Header />
            <HeaderBottom/>
            <Outlet />
        </>
    )
}

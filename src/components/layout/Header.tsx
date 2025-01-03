import { CircleUserRound, Heart, LogOut, Search, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useAuth } from "../context/AuthProvider";

export default function Header() {
    const { setSearchTerm, searchTerm } = useProducts();
    const [inputTerm, setInputTerm] = useState(searchTerm);
    const { token, logout } = useAuth();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTerm(e.target.value);
        setSearchTerm(e.target.value);
    };


    const handleSearchSubmit = () => {
        setSearchTerm(inputTerm);
    };
    return (
        <header className="h-[66px] container mx-auto flex justify-between items-center sticky z-1000">
            <div className="w-[146px]">
                <Link to={"/"}><img src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="" className="w-full" /></Link>
            </div>
            <div className="flex justify-between bg-[#f3f3f3] h-[42px] py-[10px] pl-[10px] pr-[20px]">
                <input
                    type="search"
                    placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-[598px] bg-[#f3f3f3]"
                />
                <button onClick={handleSearchSubmit}>
                    <Search className="h-[18px] w-[18px] text-[#f27a1a]" />
                </button>
            </div>
            <div className="flex justify-between w-[300px]">
                {!token ? (
                    <div className="flex items-center text-[13px]">
                        <Link to={"login"} className="flex items-center hover:text-[#ff6600]">
                            <UserRound className="w-[16px] h-[16px]" />
                            <p className="pr-[5px] mt-[2px]">Giriş Yap</p>
                        </Link>
                    </div>
                ) :
                    (<div className="flex items-center text-[13px]">
                        <Link to={"admindashboard"} className="flex items-center hover:text-[#ff6600]">
                            <CircleUserRound className="w-[16px] h-[16px]" />
                            <p className="pr-[5px] mt-[2px]">Admin</p>
                        </Link>
                    </div>)}

                <div className="flex items-center text-[13px]">
                    <Link to={"favorites"} className="flex items-center hover:text-[#ff6600]">
                        <Heart className="w-[16px] h-[16px]" />
                        <p className="pr-[5px] mt-[2px]">Favorilerim</p>
                    </Link>
                </div>
                <div className="flex items-center text-[13px]">
                    <Link to={"cartshop"} className="flex items-center hover:text-[#ff6600]">
                        <ShoppingCart className="w-[16px] h-[16px]" />
                        <p className="pr-[5px] mt-[2px]">Sepetim</p>
                    </Link>
                </div>
                {token ? (
                    <div className="flex items-center text-[13px]  hover:text-[#ff6600]">
                        <LogOut className="w-[16px] h-[16px]" />
                        <button onClick={logout} className="pr-[5px] mt-[2px]">Çıkış yap</button>
                    </div>
                ) : null}
            </div>
        </header>
    );
}

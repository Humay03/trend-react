import { Link } from "react-router-dom";
import { useCartState } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
    const { cart, remove } = useCartState();

    return (
        <div className="container mx-auto grid grid-cols-4 row-span-4 mt-[24px] justify-center">
            {cart.length === 0 ? (
                <div className="border-[1px] border-[#e2e2e2] rounded-[8px] flex justify-between text-center w-[1200px] px-[25px] py-[15px] h-[96px]">
                    <div className="flex justify-center text-center">
                        <div className="bg-[#fff1e6] rounded-[50%] w-[64px] h-[64px] flex justify-center text-center">
                            <ShoppingCart className="w-[24px] h-[25px] text-[#f27a1a] padding-[20px]" />
                        </div>
                        <p className="ml-[20px]">Səbətində məhsul yoxdur.</p>
                    </div>
                    <div>
                        <Link to={"/"}>
                            <button className="bg-[#f27a1a] text-white px-4 py-2 rounded-md">
                                Alış-verişə Başla
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="w-[230px] border border-[#ccc] rounded-md">
                        <div className="w-full h-[267px] object-cover">
                            <img src={item.image} alt={item.name} className="h-full rounded-md" />
                        </div>
                        <div className="p-[10px]">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.price} TL</p>
                            <button 
                                onClick={() => remove(item.id)} 
                                className="bg-[#f27a1a] text-white px-4 py-2 rounded-md mt-[10px]"
                            >
                                Sepetden sil.
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

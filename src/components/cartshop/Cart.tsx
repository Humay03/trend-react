import { Link } from "react-router-dom";
import { useCartState } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
    const { cart, remove } = useCartState();

    return (
        <div className="container mx-auto flex flex-wrap mt-[24px] h-[100dvh] ">
            {cart.length === 0 ? (
                <div className="border-[1px] border-[#e2e2e2] rounded-[8px] flex justify-between text-center w-[1200px] px-[25px] py-[15px] h-[96px] ">
                    <div className="flex justify-center text-center items-center">
                        <div className="bg-[#fff1e6] rounded-[50%] w-[64px] h-[64px] flex justify-center text-center items-center">
                            <ShoppingCart className="w-[24px] h-[25px] text-[#f27a1a] padding-[20px]" />
                        </div>
                        <p className="ml-[20px]">Səbətində məhsul yoxdur.</p>
                    </div>
                    <div className="flex justify-center text-center items-center">
                        <Link to={"/"}>
                            <button className="bg-[#f27a1a] text-white px-4 py-2 rounded-md">
                                Alış-verişə Başla
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="w-[230px] h-[460px] border border-[#ccc] rounded-md ml-[20px] mb-[19px] flex flex-col">
                        <div className=" h-[267px] ">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-[10px] flex-1">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.price} TL</p>
                        </div>
                        <div className="flex justify-center text-center pt-[10px] pb-[9px]">
                            <button
                                onClick={() => remove(item.id)}
                                className="w-[210px] border border-[#f27a1a] text-[#ff6600] pt-[1px] px-[6px] rounded-[3px] h-[32px] text-[14px] hover:bg-[#ff6600] hover:text-white transition-colors"
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

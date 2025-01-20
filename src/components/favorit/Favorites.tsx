
import { useCartState } from "../context/CartContext"
import { Link } from "react-router-dom";


export default function Favorites() {
    const { favorites, toggle } = useCartState();
    return (
        <div className="container mx-auto flex flex-wrap mt-[24px] h-[100dvh] ">
            {favorites.length === 0 ? (
                <div className="border-[1px] border-[#e2e2e2] rounded-[8px] flex justify-between text-center w-full px-[25px] py-[15px] h-[96px]">
                    <Link to={'/'} className="flex items-center text-center px-6 py-3 bg-orange-500 text-white font-semibold text-lg rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out transform">
                        Favori ekle
                    </Link>

                </div>
            ) : (
                favorites.map((item) => (
                    <div key={item.id} className="w-[230px] h-[460px] border border-[#ccc] rounded-md ml-[20px] mb-[19px] flex flex-col">
                        <div className="w-full h-[267px] object-cover">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-[10px] flex-1">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.price} TL</p>
                        </div>
                        <div className="flex justify-center text-center pt-[10px] pb-[9px]">
                            <button onClick={() =>
                                toggle?.({
                                    description: item.description,
                                    image: item.image,
                                    name: item.name,
                                    price: item.price,
                                    id: Number(item.id),
                                })} className="cursor-pointer w-[210px] border border-[#f27a1a] text-[#ff6600] pt-[1px] px-[6px] rounded-[3px] h-[32px] text-[14px] hover:bg-[#ff6600] hover:text-white transition-colors">
                                <p>Favoriden çıkar</p>
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

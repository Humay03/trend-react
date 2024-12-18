import { Heart } from "lucide-react";
import { useCartState } from "../context/CartContext"


export default function Favorites() {
    const { favorites, toggle } = useCartState();
    return (
        <div className="container mx-auto flex flex-wrap mt-[24px] ">
            {favorites.length === 0 ? (
                <div className="border-[1px] border-[#e2e2e2] rounded-[8px] flex justify-between text-center w-[1200px] px-[25px] py-[15px] h-[96px]">
                    <p>Favori ekle.</p>
                </div>
            ) : (
                favorites.map((item) => (
                    <div key={item.id} className="w-[230px] border border-[#ccc] rounded-md ml-[20px] mb-[19px]">
                        <div className="w-full h-[267px] object-cover relative">
                            <button onClick={() =>
                                toggle?.({
                                    description: item.description,
                                    image: item.image,
                                    name: item.name,
                                    price: item.price,
                                    id: Number(item.id),
                                })} className="absolute right-0 top-0 cursor-pointer m-[5px] drop-shadow-lg rounded-full flex items-center justify-center w-[40px] h-[40px] bg-[#fafafa]">
                                <Heart />
                            </button>
                            <img src={item.image} alt={item.name} className="h-full rounded-md" />
                        </div>
                        <div className="p-[10px]">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.price} TL</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

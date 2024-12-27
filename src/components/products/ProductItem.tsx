
import { Heart } from "lucide-react";
import { useCartState } from "../context/CartContext";

type Product = {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
};

type ProductItemProps = {
    product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
    const { add, toggle } = useCartState();


    return (
        <article key={product.id}
            id={`${product.id}`}
            className="w-[230px] border border-[#ccc] rounded-md ml-[20px] mb-[19px] flex flex-col">
            <div className="h-[267px] relative">

                <button onClick={() =>
                    toggle?.({
                        description: product.description,
                        image: product.image,
                        name: product.name,
                        price: product.price,
                        id: Number(product.id),
                    })}
                    className="absolute right-0 top-0 cursor-pointer m-[5px] drop-shadow-lg rounded-full flex items-center justify-center w-[40px] h-[40px] bg-[#fafafa]">
                    <Heart />
                </button>

                <img src={product.image} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="p-[10px] flex-1">
                <div className="text-[14px]">
                    <h3>{product.name}</h3>
                    <h4>{product.description}</h4>
                </div>
                <div>
                    <p>{product.price} TL</p>
                </div>
            </div>


            <div className="flex justify-center text-center pt-[10px] pb-[9px]">
                <button
                    onClick={() => add(product)}
                    className="w-[210px] border border-[#f27a1a] text-[#ff6600] pt-[1px] px-[6px] rounded-[3px] h-[32px] text-[14px] hover:bg-[#ff6600] hover:text-white transition-colors">
                    Sepete Ekle
                </button>
            </div>
        </article>

    );
}


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
    const { add } = useCartState();
    

    return (
        <article className="w-[230px] border border-[#ccc] rounded-md mb-[20px] ">
            <div className="h-[267px]">
                <img src={product.image} alt="" className=" w-full h-full object-cover" />
            </div>
            <div className="p-[10px]">
                <div className="text-[14px]">
                    <h3>{product.name}</h3>
                    <h4>{product.description}</h4>
                </div>
                <div>
                    <p>{product.price} TL</p> 
                </div>
            </div>
            <div className="flex flex-wrap justify-center text-center">
                <button
                    onClick={() => add(product)} 
                    className="w-[210px] border-2 border-[#f27a1a] pt-[1px] px-[6px] mb-[9px] rounded-[3px] h-[32px] text-[14px]"
                >
                    Sepete Ekle
                </button>
            </div>
        </article>
    );
}

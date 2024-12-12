import { useProducts } from "../context/ProductContext"
import ProductItem from "./ProductItem";


export default function ProductGrid() {
    const { products } = useProducts();
    return (
        <section className="grid grid-cols-4 row-span-4  mt-[24px]">
            {products.map((item) => (
                < ProductItem key={item.id} product={item} />
            ))}
        </section>
    )
}

import { useProducts } from "../context/ProductContext"
import ProductItem from "./ProductItem";


export default function ProductGrid() {
    const { products } = useProducts();
    return (
        <section className="container mx-auto grid grid-cols-4 row-span-2  justify-center">
            {products.map((item) = (
                < ProductItem key={item.id} product={item} />
            ))}
        </section>
    )
}

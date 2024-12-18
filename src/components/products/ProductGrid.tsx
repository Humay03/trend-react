import { useProducts } from "../context/ProductContext";
import ProductItem from "./ProductItem";

export default function ProductGrid() {
    const { filteredProducts } = useProducts();  

    return (
        <section className="flex flex-wrap mt-[24px]">
            {filteredProducts.map((item) => (
                <ProductItem key={item.id} product={item} />
            ))}
        </section>
    );
}

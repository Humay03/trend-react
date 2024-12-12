import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type ProductState = {
    products: Product[]
}

const ProductContext = createContext<ProductState | undefined>({
    products: [],
});

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (context == undefined) throw new Error("Contexte ehtiyac var!");

    return context;
}

export default function ProductProvider({ children }: PropsWithChildren) {

    const [products, setProducts] = useState<Product[]>([]);

    const getProducts = async () => {
        const request = await fetch('http://localhost:4000/datas');
        return await request.json();
    }
    useEffect(() => {
        getProducts().then(data => setProducts(data));
    }, []);
    if (!products.length) return <div>Loading..</div>
    return (
        <ProductContext.Provider value={{
            products
        }}>

            {children}
        </ProductContext.Provider>
    )
}

type Product = {

    id: number;
    image: string;
    name: string;
    description: string;
    price: number
}
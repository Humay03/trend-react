import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { Marka } from "../../pages/HomePage";
import { filterProductsByBrandName } from "./utils";

export type Product = {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
};

type ProductState = {
    products: Product[];
    filteredProducts: Product[];
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    setBrancheckList: React.Dispatch<React.SetStateAction<Marka[]>>;
    setMinPrice: React.Dispatch<React.SetStateAction<number>>;
    setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
};

const ProductContext = createContext<ProductState | undefined>(undefined);

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (context === undefined) throw new Error("ProductContext-lə bağlı problem var!");
    return context;
};

export default function ProductProvider({ children }: PropsWithChildren) {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [brandCheckList, setBrancheckList] = useState<Marka[]>([]);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(100000);

    const getProducts = async () => {
        const request = await fetch('http://localhost:4000/datas');
        return await request.json();
    };

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        let filtered = products;

        if (brandCheckList.length) {
            filtered = filterProductsByBrandName(brandCheckList, filtered, minPrice, maxPrice);
        }


        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [products, brandCheckList, searchTerm, minPrice, maxPrice]);

    if (!products.length) return <div>Loading...</div>;

    return (
        <ProductContext.Provider value={{
            products,
            filteredProducts,
            searchTerm,
            setSearchTerm,
            setBrancheckList,
            setMinPrice,
            setMaxPrice
        }}>
            {children}
        </ProductContext.Provider>
    );
}

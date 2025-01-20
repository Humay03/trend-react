import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { Marka, Price } from "../../pages/HomePage";
import { filterProductsByBrandName, filterProductsbyPrice } from "./utils";

export type Product = {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
};

export type ProductState = {
    products: Product[];
    filteredProducts: Product[];
    searchTerm: string;
    priceCheckList: Price[];
    setSearchTerm: (term: string) => void;
    setBrancheckList: React.Dispatch<React.SetStateAction<Marka[]>>;
    setPriceCheckList: React.Dispatch<React.SetStateAction<Price[]>>;
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
    const [priceCheckList, setPriceCheckList] = useState<Price[]>([]);

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
            filtered = filterProductsByBrandName(brandCheckList, filtered);
        }

        
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        
        if (priceCheckList.length) {
            filtered = filterProductsbyPrice(priceCheckList, filtered);
        }

        setFilteredProducts(filtered);
    }, [products, brandCheckList, searchTerm, priceCheckList]); 



    if (!products.length) return <div>Loading...</div>;

    return (
        <ProductContext.Provider value={{
            products,
            filteredProducts,
            searchTerm,
            setSearchTerm,
            setPriceCheckList,
            priceCheckList,
            setBrancheckList,
        }}>
            {children}
        </ProductContext.Provider>
    );
}

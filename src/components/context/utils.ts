import { Marka } from "../../pages/HomePage";
import { Product } from "./ProductContext";

export const filterProductsByBrandName = (
    checkedBrands: Marka[],
    products: Product[],
    minPrice?: number,
    maxPrice?: number
) => {
    const results: Product[] = [];

    for (const { marka } of checkedBrands) {
        for (const product of products) {

            if (product.name === marka) {

                if (
                    (minPrice === undefined || product.price >= minPrice) &&
                    (maxPrice === undefined || product.price <= maxPrice)
                ) {
                    results.push(product);
                }
            }
        }
    }

    return results;
};

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


export function randomString(len: number, charSet?: string) {
    charSet =
        charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var randomString = "";
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

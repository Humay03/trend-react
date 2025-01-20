import { Marka, Price } from "../../pages/HomePage";
import { Product } from "./ProductContext";

export const filterProductsByBrandName = (
    checkedBrands: Marka[],
    products: Product[],
) => {
    const results: Product[] = [];

    for (const { marka } of checkedBrands) {
        for (const product of products) {

            if (product.name === marka) {
                {
                    results.push(product);
                }
            }
        }
    }

    return results;
};

const priceToNumber = (price: string) => {
    const min = price.split("-")[0];
    const minPrice = min.slice(0, min.length - 3)
    const max = price.split("-")[1];
    const maxPrice = max.slice(0, max.length - 2)
    const result = [minPrice, maxPrice]

    return result;
};

export const filterProductsbyPrice = (
    checkedPrice: Price[],
    products: Product[],
) => {
    let results: Product[] = [];

    for (const { price } of checkedPrice) {
        let minPrice = priceToNumber(price)[0];
        let maxPrice = priceToNumber(price)[1];

        for (const product of products) {
            if ((product.price >= Number(minPrice)) || ((product.price <= Number(maxPrice)))) { results = []; results.push(product) };
        }
    }
    return results;
};

export const takeValueOfPrice = (checkedPrice: Price[]) => {
    for (const { price } of checkedPrice) {
        let minPrice = priceToNumber(price)[0]
        let maxPrice = priceToNumber(price)[1]
        const result = [minPrice, maxPrice]
        return result;
    }

}


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

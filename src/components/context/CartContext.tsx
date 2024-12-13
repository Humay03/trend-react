import { createContext, useContext, useState, ReactNode, useEffect } from "react";


type CartItem = {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;

};


type CartContextType = {
    cart: CartItem[];
    add: (item: CartItem, quantity?: number) => void;
    remove: (id: number) => void;
};


const CartContext = createContext<CartContextType | undefined>(undefined);


export const useCartState = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("Context lazimdir!");
    }
    return context;
};


export default function CartContextProvider({ children }: { children: ReactNode }) {

    const cartLs = localStorage.getItem('bookstore_cart');
    const cartData = cartLs ? JSON.parse(cartLs) : [];
    const [cart, setCart] = useState<CartItem[]>(cartData);


    const addToCart = (item: CartItem) => {
        if (!item) return;

        const existItem = cart.findIndex((ci) => ci.id === item.id);
        if (!cart.length || existItem < 0) {
            setCart((oldState) => [...oldState, { ...item }]);
        }
    };



    const removeFromCart = (id: number) => {
        setCart((oldState) => oldState.filter((item) => item.id !== id));
    };


    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('bookstore_cart', JSON.stringify(cart));
        }
    }, [cart]);

    return (
        <CartContext.Provider value={{
            cart,
            add: addToCart,
            remove: removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

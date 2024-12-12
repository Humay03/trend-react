import { createContext, useContext, useState, ReactNode, useEffect } from "react";


type CartItem = {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    quantity: number;  
};


type CartContextType = {
    cart: CartItem[];
    add: (item: CartItem, quantity?: number) => void;
    count: number;
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

    const cartLs = JSON.parse(localStorage.getItem('bookstore_cart') || '[]') as CartItem[];
    const [cart, setCart] = useState<CartItem[]>(cartLs);


    const addToCart = (item: CartItem, quantity: number = 1) => {
        if (!item) return;

        const existItem = cart.findIndex(ci => ci.id === item.id);
        if (existItem < 0) {
  
            setCart(oldState => [
                ...oldState,
                { ...item, quantity }
            ]);
        } else {
 
            setCart(oldState =>
                oldState.map((ci) =>
                    ci.id === item.id ? { ...ci, quantity: ci.quantity + quantity } : ci
                )
            );
        }
    };

    const removeFromCart = (id: number) => {
        setCart(oldState => oldState.filter(item => item.id !== id));
    };

    useEffect(() => {
        localStorage.setItem('bookstore_cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{
            cart,
            add: addToCart,
            count: cart.length,
            remove: removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

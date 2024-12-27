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
    favorites: CartItem[];
    toggle: (favorite: CartItem) => void;
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

    const cartLs = localStorage.getItem('productstore_cart');
    const cartData = cartLs ? JSON.parse(cartLs) : [];
    const [cart, setCart] = useState<CartItem[]>(cartData);
    const [favorites, setFavorites] = useState<CartContextType["favorites"]>([]);


    const addToCart = (item: CartItem) => {
        if (!item) return;

        const existItem = cart.findIndex((ci) => ci.id === item.id);
        console.log(existItem);

        if (!cart.length || existItem < 0) {
            setCart((oldState) => [...oldState, { ...item, quantity: 1 }]);
        }
    };

    const toggleFavoriteItem = (favorite: CartItem) => {
        setFavorites((state) => {
            const foundIndex = state.findIndex(
                (item) => item.id === favorite.id
            );
            if (foundIndex < 0) {
                return [...state, favorite];
            } else {
                return state.filter((item) => item.id !== favorite.id);
            }
        });
    };



    const removeFromCart = (id: number) => {
        setCart((oldState) => oldState.filter((item) => item.id !== id));
    };


    useEffect(() => {
        localStorage.setItem('productstore_cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{
            cart,
            add: addToCart,
            remove: removeFromCart,
            favorites: favorites,
            toggle: toggleFavoriteItem,
        }}>
            {children}
        </CartContext.Provider>
    );
}

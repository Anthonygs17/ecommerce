import { useState, createContext } from "react";

const ShopContext = createContext();

const ShopComponentContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem));
        } else {
            setCart([...cart, { ...item }]);
        }
        setTotal(total + item.price);
        setQuantity(quantity + 1);
    }

    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setQuantity(0);
    }

    const getTotalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    return (
        <ShopContext.Provider value={{ addToCart, clearCart, getTotalItems, getTotalPrice, cart }}>
            {children}
        </ShopContext.Provider>
    );
}

export { ShopComponentContext, ShopContext };
import {createContext} from "react";
import {useLocalStorage} from "../hooks/ususeLocalStorage";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems]= useLocalStorage(
        "Shopping cart",
        []);

    const removeFromCart = (item) => {

        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id)
        setCartItems(updatedCartItems)

    }

    const increaseQuantity = (item) => {

        const updatedCartItems = cartItems.map(cartItem =>
            cartItem.id === item.id? {...cartItem, quantity:cartItem.quantity + 1} : cartItem )
        setCartItems(updatedCartItems)

    }

    const decreaseQuantity = (item) => {

        const updatedCartItems = cartItems.map(cartItem =>
            cartItem.id === item.id? {...cartItem, quantity:cartItem.quantity - 1} : cartItem )
            .filter(cartItem=> cartItem.quantity !== 0)
        setCartItems(updatedCartItems)

    }






    return  (

        <CartContext.Provider value={{cartItems, setCartItems, removeFromCart, increaseQuantity, decreaseQuantity}}>

            {children}

        </CartContext.Provider>
    )
}
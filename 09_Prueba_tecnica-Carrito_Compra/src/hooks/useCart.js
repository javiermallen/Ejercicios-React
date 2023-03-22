import { useContext } from "react"
import { CartContext } from "../context/cart"


export function useCart() {
    const { cart, addToCart, removeProductsFromCart, removeItemFromCart } = useContext( CartContext )

    if ( cart === undefined ) {
        throw new Error( 'You cant use the Provider' )
    }
    return { cart, addToCart, removeProductsFromCart, removeItemFromCart } 
}

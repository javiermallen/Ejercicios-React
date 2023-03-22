import { createContext, useReducer } from "react"
import { initialState, cartReducer } from "../reducers/cartReducer"

// 1- Creamos el contexto
export const CartContext  = createContext()

function useCartReduce () {
    const [ state, dispatch ] = useReducer(cartReducer, initialState)
    
    const addToCart = (product) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })
    const removeProductsFromCart = () => dispatch({
        type: 'REMOVE_PRODUCTS_FROM_CART'
    })
    const removeItemFromCart = (product) => dispatch({
        type: 'REMOVE_ITEM_FROM_CART',
        payload: product
    })
    return ({ state, addToCart, removeProductsFromCart, removeItemFromCart })
}


// 2- Creamos el provider, para proveer el contexto
export function CartProvider ({ children }) {
    const { state, addToCart, removeProductsFromCart, removeItemFromCart } = useCartReduce()


    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeProductsFromCart,
            removeItemFromCart
        }}>
            {children}
        </CartContext.Provider>            
    )
}
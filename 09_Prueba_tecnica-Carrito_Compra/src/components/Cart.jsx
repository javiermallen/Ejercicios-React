import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import { useCart } from "../hooks/useCart"

import './Cart.css'

function RenderCart ({ thumbnail, title, prize, quantity, addToCart }) {
    return(
        <li>
            <img src={thumbnail} alt={title}/>
            <div>
                <strong>{title}</strong> -{prize} €
            </div>
            <div className="footer">
                <small>Cant: {quantity}</small>
                <button onClick={addToCart}>+</button>
            </div>
        </li>
    )
}

export function Cart () {
    const cartCheckBoxId = useId()
    const { cart, removeProductsFromCart, addToCart } = useCart()
    
    return (
        <>
            <label htmlFor={cartCheckBoxId} className="cart-button">
                <CartIcon />
            </label>
            <input type="checkbox" name="" id={cartCheckBoxId} hidden/>

            <aside className="cart">
                <ul>
                    { cart.map( item => (
                        <RenderCart
                            key={item.id}
                            addToCart={() => addToCart( item )} 
                            {...item}
                            />
                    ))}                    
                </ul>
                <button onClick={ () => removeProductsFromCart() }>
                    <ClearCartIcon />
                </button>
            </aside>        
        </>
    )
}
import './products.css'
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import { useCart } from '../hooks/useCart'

export function Products ( { products } ) {
    const { addToCart, removeItemFromCart, cart } = useCart()

    const checkProductInCart = ( product ) => {
        return cart.some( item => item.id === product.id )
    }

    return (
        <main>
            <ul className="products">
                {products.map( product => {
                    const isInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> 
                                <p>{product.price} €</p>
                            </div>
                            <div>
                                <button onClick={ () => {
                                    isInCart 
                                        ? removeItemFromCart(product)
                                        : addToCart(product)                                         
                                    }}>                                  
                                    { isInCart 
                                        ? <RemoveFromCartIcon />
                                        : <AddToCartIcon />
                                    }                                    
                                </button>
                            </div>
                        </li>
                    )
                }
                )}
            </ul>
        </main>
    )
}
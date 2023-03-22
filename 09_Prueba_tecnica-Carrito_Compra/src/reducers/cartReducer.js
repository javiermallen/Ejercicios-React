export const initialState = JSON.parse( window.localStorage.getItem( 'cart' ) ) || []

export function updateLocalStorage (state) {
    window.localStorage.setItem( 'cart', JSON.stringify(state) )
}

export function cartReducer (state, action) {
    const { type: actionType, payload: actionPayload } = action
    switch( actionType ) {
        case 'ADD_TO_CART': {
            const productIndex = state.findIndex( cartItem => cartItem.id === actionPayload.id )
            if( productIndex>= 0 ) {
                //Creamos una copia del carrito para poder modificarlo
                const newState = structuredClone( state )
                newState[ productIndex ].quantity += 1
                updateLocalStorage(newState)
                return newState
            } else { //En caso de que no exista, cogemos el vector del carro y la añadimo el producto añadiendole la propiedad quantity
                const newState = [
                    ...state,
                        {
                            ...actionPayload,
                            quantity: 1
                        }
                ]       
                updateLocalStorage(newState)
                return newState                             
            }
        }
        case 'REMOVE_PRODUCTS_FROM_CART': {
            updateLocalStorage([])
            return initialState
        }
        case 'REMOVE_ITEM_FROM_CART': {
            const newState = state.filter( item.id !== actionPayload.id )
            updateLocalStorage(newstate)
            return newState
        }

    }
    return state
}
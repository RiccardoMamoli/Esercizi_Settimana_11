const initalState = {

    cart: {
        content: [] // array di libri nel carrello
    }


}


const mainReducer = (state = initalState, action) => {
    // PARAMETRO 1  => state è lo stato corrente di redux
    // PARAMETRO 2  => action è l'azione che è stata inviata
    switch (action.type) {
        case 'ADD_TO_CART': {
            return {
                ...state,
                cart: {
                    ...state.cart,
                    content: [...state.cart.content, action.payload]
                }
            }
        }

        case 'REMOVE_FROM_CART': {
            return {
                ...state,
                cart: {
                    ...state.cart,
                    content: [
                        ...state.cart.content.slice(0, action.payload),
                        ...state.cart.content.slice(action.payload + 1)
                    ]
                }
            }
        }
        default: {
            // Tutti gli switch case hanno il solo scopo di ritornare il nuovo stato di redux
            return state; // worst case scenario, ritorniamo lo stato che mi è arrivato
        }
    }


}

export default mainReducer;
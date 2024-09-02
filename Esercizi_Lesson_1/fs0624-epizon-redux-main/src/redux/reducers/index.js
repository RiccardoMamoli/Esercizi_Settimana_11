const initalState = {

    cart: {
        content: [] // array di libri nel carrello
    }


}


const mainReducer = (state = initalState, action) => {
    // PARAMETRO 1  => state è lo stato corrente di redux
    // PARAMETRO 2  => action è l'azione che è stata inviata
    switch (action.type) {
        default: {
            // Tutti gli switch case hanno il solo scopo di ritornare il nuovo stato di redux
            return state; // worst case scenario, ritorniamo lo stato che mi è arrivato
        }
    }


}

export default mainReducer;
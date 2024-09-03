const initalState = {
    name: ''
}


const userReducer = (state = initalState, action) => {
    // PARAMETRO 1  => state è lo stato corrente di redux
    // PARAMETRO 2  => action è l'azione che è stata inviata
    switch (action.type) {
        case 'SET_USERNAME': 
            return {
                ...state, // non ci perdiamo il corrente stato dell'applicativo
                name: action.payload,
            }


        default: {
            // Tutti gli switch case hanno il solo scopo di ritornare il nuovo stato di redux
            return state; // worst case scenario, ritorniamo lo stato che mi è arrivato
        }
    }


}

export default userReducer;
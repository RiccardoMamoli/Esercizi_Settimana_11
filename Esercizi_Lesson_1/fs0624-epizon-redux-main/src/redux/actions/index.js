// si salvano degli action creator => una funzione che ritorna un oggwtto


export const addToCartAction = (bookSelected) => {
    return {
        type: 'ADD_TO_CART',
        payload: bookSelected
    }
}


export const removeFromCartAction = (i) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: i
    }
}


export const setUserName = (name) => {
    return {
        type: 'SET_USERNAME',
        payload: name
    }
}

export const getBookAction = () => {
    return (dispatch, getState) => {

        fetch('https://striveschool-api.herokuapp.com/food-books')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('errore')
                }
            })
            .then(arrayOfBooks => {

                dispatch({
                    type: 'GET_BOOKS',
                    payload: arrayOfBooks
                })

            })
            .catch((err) => {
                console.log(err)
            })

    }
}


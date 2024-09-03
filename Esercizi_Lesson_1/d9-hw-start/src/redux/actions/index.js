export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE'
export const GET_LIST = 'GET_LIST'

export const addToFavAction = (data) => {
    return {
        type: ADD_TO_FAVORITE,
        payload: data
    }
}

export const removeFromFavAction = (data) => {
    return {
        type: REMOVE_FROM_FAVORITE,
        payload: data
    }
}

export const getListAction = (query) => {
    return (dispatch) => {
        fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Errore')
                }
            })
            .then((arrayOfFav) => {
                dispatch({
                    type: GET_LIST,
                    payload: arrayOfFav.data
                })
            })
            .catch((err) => {
                console.log('NON CI SIAMO')
            })
    }
}


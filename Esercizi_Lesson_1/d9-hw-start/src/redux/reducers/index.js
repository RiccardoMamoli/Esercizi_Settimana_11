const initialState = {
    favourites: {
        content: [],
    }
}



const mainReducer = (state = initialState, action) => {
    switch (action.type) {


        case 'ADD_TO_FAVORITE': {
            return {
                ...state,
                favourites: {
                    ...state.favourites,
                    content: [...state.favourites.content, action.payload]   
                }
            }

        }

        case 'REMOVE_FROM_FAVORITE': {
            return {
                ...state,
                favourites: {
                    ...state.favourites,
                    content: state.favourites.content.filter((item) => item._id !== action.payload._id)
                }
            };
        }
        

        default: {
            return state;
        }
    }
}

export default mainReducer;
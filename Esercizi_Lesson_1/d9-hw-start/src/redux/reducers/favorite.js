const initialState = {
    content: [],
}



const favoriteRedux = (state = initialState, action) => {
    switch (action.type) {


        case 'ADD_TO_FAVORITE': {
            return {
                ...state,
                content: [...state.content, action.payload]
            }
        }

        case 'REMOVE_FROM_FAVORITE': {
            return {
                ...state,
                    content: state.content.filter((item) => item._id !== action.payload._id)
            };
        }


        default: {
            return state;
        }
    }
}

export default favoriteRedux;
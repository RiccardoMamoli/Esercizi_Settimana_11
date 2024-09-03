const initialState = {
    available: []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_BOOK': {
            return {
                ...state,
                available: action.payload
            }
        }

        default:
            return state
    }
}

export default bookReducer
import { GET_LIST } from "../actions"


const initialState = {
    arrayFav: [],
}

const listRedux = (state = initialState, action) => {

    switch (action.type) {

        case GET_LIST: {
            return {
                ...state,
                arrayFav: action.payload

            }
        }


        default: {
            return state
        }
    }

}

export default listRedux;
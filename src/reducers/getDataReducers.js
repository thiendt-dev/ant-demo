import {
    GET_DATA_EPLOYEES,
    // GET_DATA_EPLOYEES_SUCCESS,
    // GET_DATA_EPLOYEES_ERROR
} from '../constants/index'

const nameInitialState = []
export const getDataReducers = (state = nameInitialState, action) => {
    switch (action.type) {
        case GET_DATA_EPLOYEES:
            return state
        // case GET_DATA_EPLOYEES_SUCCESS:
        //     return state
        // case GET_DATA_EPLOYEES_ERROR:
        //     return state
        default:
            return state
    }
}
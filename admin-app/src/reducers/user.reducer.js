import { userConstants } from "../actions/constants"

const initState = {
    error: '',
    message: '',
    loading: false
}

export default(state= initState, action ) => {
    switch(action.type) {
        case userConstants.REGISTER_REQUEST :
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
            case userConstants.REGISTER_SUCCESS:
                state = {
                    ...state,
                    loading: false,
                    error: action.payload.error
                }
                break;
    }
    return state;
}
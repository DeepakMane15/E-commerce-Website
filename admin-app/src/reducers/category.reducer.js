import { categoryConstants } from "../actions/constants";

const initState = {
    categories: [],
    loading: false,
    error: null
};

export default (state=initState, action) => {
    switch(action.type) {
        case categoryConstants.CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
    }
    return state;
}
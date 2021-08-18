import axios from "../helpers/axios"
import { categoryConstants } from "./constants";

export const getCategories = () => {
    return async dispatch => {

        dispatch({ type: categoryConstants.CATEGORIES_REQUEST});
        const res = await axios.get('/categories');
        console.log(res);
        if(res.status === 200) {
            const { categoryList} = res.data;
            dispatch({
                type: categoryConstants.CATEGORIES_SUCCESS,
                payload:  {categories: categoryList}
            })
        } else {
            dispatch({
                type: categoryConstants.CATEGORIES_FAILURE,
                payload:  {error: res.data.error}
            })
        }
    }
}
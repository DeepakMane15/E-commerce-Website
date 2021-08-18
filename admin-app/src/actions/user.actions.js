import { authConstants, userConstants } from "./constants"
import axios from '../helpers/axios';

export const signup = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({ type: userConstants.REGISTER_REQUEST });
        const res = await axios.post('/admin/signup', {
            ...user
        });

        if (res.status == 200) {
            const { message } = res.data;
            dispatch({
                type: userConstants.REGISTER_SUCCESS,
                payload: {
                    message
                }
            });
        } else {
            if (res.status == 400) {
                dispatch({
                    type: userConstants.REGISTER_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }

    }
}
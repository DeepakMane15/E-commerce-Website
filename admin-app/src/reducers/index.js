import  useReducer  from "./user.reducer";
import { combineReducers } from "redux";
import authReducer from './auth.reducers';
import categoryReducer from './category.reducer';
import orderReducer from './order.reducer';
import productReducer from './product.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: useReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer
});
export default rootReducer;
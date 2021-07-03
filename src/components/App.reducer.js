import {combineReducers} from "redux";

export const product = (state = [], action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return action.product
        default:
            return state;
    }
}

export const rootReducer = combineReducers({product})
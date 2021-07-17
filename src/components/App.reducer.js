import {combineReducers} from "redux";

const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({productReducer})
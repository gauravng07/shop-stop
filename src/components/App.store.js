import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./App.reducer";
import thunk from "redux-thunk";

export function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}

export const store = configureStore();
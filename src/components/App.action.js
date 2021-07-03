
import {product} from "./App.reducer";

export const products = product => ({
    type: 'GET_PRODUCT',
    product,
});

export const getProduct = listing => async dispatch => {
    const url = `https://jsonplaceholder.typicode.com/todos/1`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(products(responseBody))
}
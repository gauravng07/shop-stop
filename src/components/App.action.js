export const getProduct = () => async dispatch => {
    try {
        const url = `http://localhost:8080/product/search?page_size=50&page_num=2`;
        const response = await fetch(url);
        const responseBody = await response.json();
        if (responseBody) {
            dispatch({
                type: 'GET_PRODUCT',
                payload: responseBody,
            });
        }
    } catch (e) {
        return null
    }
};
import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const getProducts = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/api/products`)
            .then((json) => {
                return dispatch({
                    type: GET_PRODUCTS,
                    payload: json.data
                })
            })
    }
}
export const getProductById = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then((json) => {
                return dispatch({
                    type: GET_PRODUCT,
                    payload: json.data
                })
            })
    }
}
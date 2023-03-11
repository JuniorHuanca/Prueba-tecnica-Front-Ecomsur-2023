export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_ALL_CART = 'REMOVE_ALL_CART';
export const MINUS_ONE_PRODUCT = 'MINUS_ONE_PRODUCT';
export const PLUS_ONE_PRODUCT = 'PLUS_ONE_PRODUCT';
export const SET_SUBTOTAL = 'SET_SUBTOTAL';

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}
export const removeAllCart = () => {
    return {
        type: REMOVE_ALL_CART,
    }
}
export const minusOneProduct = (payload) => {
    return {
        type: MINUS_ONE_PRODUCT,
        payload
    }
}

export const plusOneProduct = (payload) => {
    return {
        type: PLUS_ONE_PRODUCT,
        payload
    }
}

export const setSubtotalArray = (payload) => {
    return {
        type: SET_SUBTOTAL,
        payload
    }
}

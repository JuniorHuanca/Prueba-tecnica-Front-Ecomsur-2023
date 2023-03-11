import { GET_PRODUCT, GET_PRODUCTS } from './actionsProducts'

export const initialState = {
    allProducts: [],
    product: {},
}

function Products(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
            }
        default:
            return state
    }
}
export default Products;
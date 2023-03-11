import { ADD_TO_CART, MINUS_ONE_PRODUCT, PLUS_ONE_PRODUCT, REMOVE_ALL_CART, REMOVE_FROM_CART, SET_SUBTOTAL } from "./actionsCart";

const initialState = {
    items: [],
    total: 0,
    subTotal: []
};
const Cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const product = action.payload
            const productExists = !!state.items.find(e => e._id === product._id)
            if (productExists) {
                const itemsCart = state.items.map(e => {
                    if (e._id === action.payload._id && e.quantity < e.countInStock) {
                        return {
                            ...e,
                            quantity: e.quantity + 1
                        }
                    }
                    else return e
                })
                return {
                    ...state,
                    items: itemsCart
                }
            }
            else {
                return {
                    ...state,
                    items: state.items.concat({ _id: product._id, ...product, quantity: 1 })
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case PLUS_ONE_PRODUCT:
            const array = state.items.map(e => {
                if (e._id === action.payload && e.quantity < e.countInStock) {
                    return {
                        ...e,
                        quantity: e.quantity + 1
                    }
                }
                else return e
            })
            return {
                ...state,
                items: array
            }
        case MINUS_ONE_PRODUCT:
            const arrayMap = state.items.map(e => {
                if (e._id === action.payload && e.quantity > 0) {
                    return {
                        ...e,
                        quantity: e.quantity - 1
                    }
                }
                else return e
            })
            return {
                ...state,
                items: arrayMap
            }
        case REMOVE_ALL_CART:
            return {
                ...state,
                items: []
            };
        case SET_SUBTOTAL:
            return {
                ...state,
                subTotal: state.subTotal.concat(action.payload)
            }
        default:
            return state;
    }
};

export default Cart;

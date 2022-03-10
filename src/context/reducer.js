import {
    LOADING_DATA,
    DELETE_ITEM,
    EMPTY_CART,
    ADD_ITEM,
    REMOVE_ITEM,
    TOTAL_PRICE,
    COUNTER
 } from './actions'

const reducer = (state, {type, payload}) => {
    if(type === LOADING_DATA) {
        return {...state, products: payload.map(el => {
            return {...el, qty: el.qty}
        })}
    }

    if(type === DELETE_ITEM) {
        return {
            ...state, 
            products: state.products.filter((el) => el._id !== payload)}
    }
    if(type === EMPTY_CART) {
        return {
            ...state, 
            products: []}
    }
    if(type === ADD_ITEM) {
        return {
            ...state,
            products: state.products.map(el => {
                if(payload === el._id) {
                    return {...el, qty: el.qty + 1}
                }
                return {...el}
            })
        }
    }
    if(type === REMOVE_ITEM) {
        return {
            ...state,
            products: state.products.map(el => {
                if(payload === el._id) {
                    return {...el, qty: el.qty - 1}
                }
                return {...el}
            })
        }
    }
    if(type === TOTAL_PRICE) {
        return {
            ...state,
            total: state.products.reduce((total, item) => {
                return total + item.qty * item.price
            }, 0)
        }
    }
    if(type === COUNTER) {
        return {
            ...state,
            itemCounter: state.products.reduce((total, item) => {
                return total + item.qty
            }, 0)
        }
    }

    return state;
};

export default reducer;
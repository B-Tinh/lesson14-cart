import * as Types from '../constants/ActionType';


export const addToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}
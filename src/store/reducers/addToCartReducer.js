import * as actionTypes from '../actions/actionTypes';
import { phonedata } from '../../data/phonedata';

let initialState = {
    products: phonedata,
    cart: []
}
const addToCartReducer = (state = initialState, action) => {

    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(product => product.id == action.payload.id);
            console.log(updatedItemIndex);

            if(updatedItemIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1});
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                updatedItem.quantity++;
                console.log(updatedItem.quantity);
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state, cart: updatedCart};
    
        default:
            return state;
    }
}
export default addToCartReducer;
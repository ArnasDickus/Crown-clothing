import {CartActionTypes} from './cart.types';

// Payload is optional. Don't needed here.
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

import { useReducer, useEffect } from "react";
import CartContext from "./CartContext";
import CartReducer from './CartReducer';
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, CLEAR_CART } from '../Types';

const CartState = ({children}) => {

    const getInitialState = () => {
        try {
            const savedCart = localStorage.getItem('cartState');
            if (savedCart) {
                return JSON.parse(savedCart);
            }
        } catch (error) {
            console.error('Error reading from localStorage:', error);
        }
        return {
            showCart: false,
            cartItems: []
        };
    };

    const [state, dispatch] = useReducer(CartReducer, undefined, getInitialState);

    const addToCart = item => {
        dispatch({type: ADD_TO_CART, payload: item})
    };

    const showHideCart = () =>{
        dispatch({type: SHOW_HIDE_CART})
    };

    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: id})
    };

    const clearCart = () => {
        dispatch({type: CLEAR_CART, payload: []})
    }

    useEffect(() => {
        try {
            localStorage.setItem('cartState', JSON.stringify(state));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }, [state]);

    return (
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            addToCart,
            showHideCart,
            removeItem,
            clearCart,
        }}>{children}</CartContext.Provider>
    )
}

export default CartState;
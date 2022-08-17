import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from './CartReducer';
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, CLEAR_CART } from '../Types';

const CartState = ({children}) => {

    // const localStorageCart = JSON.parse(localStorage.getItem("cart"));

    // if (localStorageCart===null){
    //     window.localStorage.clear();
    // }

    const initialState = {
        showCart: false,
        cartItems: []
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);

    // useEffect(()=>{
    //     localStorage.setItem("cart", JSON.stringify(state.cartItems))
    // }, [state.cartItems])


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
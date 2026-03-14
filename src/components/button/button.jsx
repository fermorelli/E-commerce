import styles from './button.module.css';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';

export const Button = ({ handleClick, children, type = 'button' })=>{
    const { cartItems } = useContext(CartContext);
    const location = useLocation();

    const isProductOrCategoryPage =
        location.pathname !== '/' ||
        cartItems.length > 0;

    return(
        <button
            type={type}
            className={isProductOrCategoryPage ? styles.button : styles.none}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}
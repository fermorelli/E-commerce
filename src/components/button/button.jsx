import styles from './button.module.css';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';

export const Button = ({ handleClick, children })=>{
    const { cartItems } = useContext(CartContext);
    const location = useLocation();
    const does = location.pathname.includes('shop');

    return(
        <button className={cartItems.length > 0 || does ? styles.button : styles.none} onClick={handleClick}>
            {children}
        </button>
    )
}
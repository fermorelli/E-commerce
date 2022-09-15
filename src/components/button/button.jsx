import styles from './button.module.css';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';

export const Button = ({ handleClick, children, action })=>{
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const { cartItems } = useContext(CartContext);
    const location = useLocation();
    const does = numbers.some((i)=>{return(location.pathname.includes(i))});
    console.log(does);

    return(
        <button className={cartItems.length > 0 || does ? styles.button : styles.none} onClick={handleClick} action={action}>
            {children}
        </button>
    )
}
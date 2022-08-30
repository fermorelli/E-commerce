import styles from './cartItem.module.css';
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';


const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);
    return (
        <li className={styles.cartItem}>
            <img src={item.image} alt="" />
            <div>
                {item.title}${item.price}
            </div>
            <button onClick={()=>removeItem(item.id)}>
                <i className="fa-solid fa-x" ></i>
            </button>
        </li>
    )
}

export default CartItem;
import styles from './cartItem.module.css';
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <li className={styles.cartItem}>
      <div className={styles.imageWrap}>
        <img src={item.image} alt={item.title} />
      </div>

      <div className={styles.itemDescription}>
        <span className={styles.title}>{item.title.substring(0, 40)}...</span>
        <span className={styles.price}>${item.price}</span>
      </div>

      <button type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.title} from cart`}>
        <i className="fa-solid fa-x" />
      </button>
    </li>
  );
};

export default CartItem;

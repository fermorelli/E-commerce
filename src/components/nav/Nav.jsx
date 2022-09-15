import styles from '../nav/nav.module.css';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';
import { useContext } from 'react';

function Nav() {

  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <nav>
        <div className={styles.logo}>
            <i class="fa-brands fa-shopify fa-4x"></i>
            <Link to='/'>
              <span>MARKETPALACE</span>
            </Link>
        </div>
        <div className={styles.cart}>
          <i className="fa-solid fa-shopping-cart" id={styles.cart} onClick={showHideCart}></i>
          { cartItems.length > 0 && <div className={styles.itemCount}>
            <div className={styles.cartCounter}>
              <span>{cartItems.length}</span>
            </div>
            </div>}
        </div>
    </nav>
  );
}

export default Nav;

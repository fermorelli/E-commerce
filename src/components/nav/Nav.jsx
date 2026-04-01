import styles from '../nav/nav.module.css';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';
import { useContext } from 'react';

function Nav() {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <div className={styles.announcement}>Free shipping over $100. New arrivals updated weekly.</div>
      <nav className={styles.nav}>
        <div className={styles.brandBlock}>
          <Link to="/" className={styles.brand}>
            <div>
              <span className={styles.brandName}>MarketPalace</span>
              <span className={styles.brandTag}>Modern essentials for home, style and gifting</span>
            </div>
          </Link>
        </div>

        <div className={styles.links}>
          <Link to="/electronics">Electronics</Link>
          <Link to="/jewelry">Jewelry</Link>
          <Link to="/clothing">Clothing</Link>
        </div>

        <button type="button" className={styles.cartButton} onClick={showHideCart}>
          <span>Bag</span>
          <span className={styles.cartCount}>{cartItems.length}</span>
        </button>
      </nav>
    </header>
  );
}

export default Nav;

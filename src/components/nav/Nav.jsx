import styles from '../nav/nav.module.css';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';
import { useContext } from 'react';

function Nav() {

  const { cartItems } = useContext(CartContext);

  return (
    <nav>
        <h3>Logo</h3>
        <ul className={styles.navLinks}>
            <Link to='/about'>
            <li>About</li>
            </Link>
            <Link to='/shop'>
            <li>Shop</li>
            </Link>
        </ul>
        <i className="fa-solid fa-shopping-cart"></i>
        { cartItems.length > 0 && <div className={styles.itemCount}>
          <span>{cartItems.length}</span>
          </div>}
    </nav>
  );
}

export default Nav;

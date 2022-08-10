import styles from '../nav/nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
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
    </nav>
  );
}

export default Nav;

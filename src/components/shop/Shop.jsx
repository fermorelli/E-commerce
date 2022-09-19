import styles from './shop.module.css';
import { Link } from 'react-router-dom';

const Shop = () => {

    return (
        <div className={styles.all}>
            <Link className={styles.electronicsContainer} to={'/electronics'}>
                <div className={styles.blur}>
                    <h2>Electronics</h2>
                </div>
            </Link>
            <Link className={styles.jewelryContainer} to={'/jewelry'}>
                <div className={styles.blur}>
                    <h2>Jewelry</h2>
                </div>
            </Link>
            <Link className={styles.clothContainer} to={'/clothing'}>
                <div className={styles.blur}>
                    <h2>Clothing</h2>
                </div>
            </Link>
        </div>
    );
}

export default Shop;

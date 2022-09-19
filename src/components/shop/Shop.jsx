import styles from './shop.module.css';
import { Link } from 'react-router-dom';

function Shop() {

    return (
        <>
            <Link to={'/electronics'}>
                <div className={styles.asd}>
                    <h2>Electronics</h2>
                </div>
            </Link>
            <Link to={'/clothing'}>
                <div className={styles.asd}>
                    <h2>Clothing</h2>
                </div>
            </Link>
        </>
    );
}

export default Shop;

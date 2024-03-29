import styles from './shopItems.module.css';
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
import { Link } from 'react-router-dom';

const ShopItem = ({ item, category}) => {
    const { addToCart } = useContext(CartContext);
    console.log(category)
    return (
    <div className={styles.all}>
        <Link className={styles.routes} to={`/${item.id}`}>
            <div className={styles.shopItem}>
                <img src={item.image} alt="product" />
                <div className={styles.itemDescription}>
                    <h3>{item.title}</h3>
                    <span>${item.price}</span>
                    <p>{item.description.substring(0, 150)}...</p>
                </div>
            </div>
        </Link>
        <div className={styles.addCart}>
            <i id={styles.add}className='fa-solid fa-shopping-cart' onClick={()=> addToCart(item)} />
        </div>
    </div>
    )
}

export default ShopItem;

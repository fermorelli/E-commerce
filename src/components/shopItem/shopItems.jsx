import styles from './shopItems.module.css';
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
import { Link } from 'react-router-dom';

const getExcerpt = (text, maxWords = 50) => {
    if (!text) return '';
    const words = text.split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
};

const ShopItem = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className={styles.all}>
            <Link className={styles.routes} to={`/${item.id}`}>
                <div className={styles.shopItem}>
                    <div className={styles.itemDescription}>
                        <h3>{item.title}</h3>
                    </div>
                    <img src={item.image} alt="product" className={styles.image} />
                    <div className={styles.itemMeta}>
                        <span className={styles.price}>${item.price}</span>
                        <p className={styles.text}>{getExcerpt(item.description, 50)}</p>
                    </div>
                </div>
            </Link>
            <button
                type="button"
                className={styles.addCart}
                onClick={() => addToCart(item)}
            >
                <i className="fa-solid fa-shopping-cart" />
                <span>Add to cart</span>
            </button>
        </div>
    )
}

export default ShopItem;

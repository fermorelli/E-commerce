import styles from './shopItems.module.css';
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
import { Link } from 'react-router-dom';

const getExcerpt = (text, maxWords = 26) => {
  if (!text) return '';
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(' ')}...`;
};

const ShopItem = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <article className={styles.card}>
      <Link className={styles.routes} to={`/${item.id}`}>
        <div className={styles.media}>
          <img src={item.image} alt={item.title} className={styles.image} />
        </div>
        <div className={styles.content}>
          <span className={styles.category}>{item.category}</span>
          <h3>{item.title}</h3>
          <p>{getExcerpt(item.description, 26)}</p>
        </div>
      </Link>

      <div className={styles.footer}>
        <span className={styles.price}>${item.price}</span>
        <button type="button" className={styles.addCart} onClick={() => addToCart(item)}>
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ShopItem;

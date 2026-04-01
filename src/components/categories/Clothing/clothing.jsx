import { useState, useEffect } from 'react';
import styles from '../categories.module.css';
import { Loader } from '../../loader/loader';
import ShopItem from '../../shopItem/shopItems';
import { Button } from '../../button/button';
import { Link } from 'react-router-dom';
import { getProducts } from '../../../utils/productsApi';

const Clothing = () => {
  const [items, setItems] = useState([]);
  const [fetching, isFetching] = useState(false);

  const fetchItems = async () => {
    isFetching(true);
    const items1 = await getProducts();
    setItems(items1);
    isFetching(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      {fetching ? (
        <Loader />
      ) : (
        <section className={styles.page}>
          <div className={styles.header}>
            <div>
              <span className={styles.eyebrow}>Clothing collection</span>
              <h1>Relaxed layers, clean silhouettes and easy daily staples.</h1>
            </div>
            <p>
              Move through essentials for warmer days, smarter basics and versatile fits that keep
              a wardrobe functional without feeling ordinary.
            </p>
          </div>

          <div className={styles.shop}>
            {items.map((item) => {
              return item.collection === 'clothing' ? (
                <ShopItem key={item.id} item={item} />
              ) : null;
            })}
          </div>

          <Link to="/">
            <Button>Back to home</Button>
          </Link>
        </section>
      )}
    </>
  );
};

export default Clothing;

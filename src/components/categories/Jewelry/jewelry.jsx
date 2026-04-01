import { useState, useEffect } from 'react';
import styles from '../categories.module.css';
import { Loader } from '../../loader/loader';
import ShopItem from '../../shopItem/shopItems';
import { Button } from '../../button/button';
import { Link } from 'react-router-dom';
import { getProducts } from '../../../utils/productsApi';

const Jewelry = () => {
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
              <span className={styles.eyebrow}>Jewelry collection</span>
              <h1>Refined metallic accents with a bold, gift-ready finish.</h1>
            </div>
            <p>
              Discover polished pieces that add contrast, warmth and instant presence to everyday
              outfits or special occasions.
            </p>
          </div>

          <div className={styles.shop}>
            {items.map((item) => {
              return item.collection === 'jewelry' ? <ShopItem key={item.id} item={item} /> : null;
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

export default Jewelry;

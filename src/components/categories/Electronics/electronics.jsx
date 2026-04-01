import { useState, useEffect } from 'react';
import styles from '../categories.module.css';
import { Loader } from '../../loader/loader';
import ShopItem from '../../shopItem/shopItems';
import { Button } from '../../button/button';
import { Link } from 'react-router-dom';

const Electronics = () => {
  const [items, setItems] = useState([]);
  const [fetching, isFetching] = useState(false);

  const fetchItems = async () => {
    isFetching(true);
    const data = await fetch('https://fakestoreapi.com/products');
    const items1 = await data.json();
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
              <span className={styles.eyebrow}>Electronics collection</span>
              <h1>Sharper tools for sound, work and downtime.</h1>
            </div>
            <p>
              Browse practical devices and polished upgrades selected to make every desk, room and
              travel setup feel more considered.
            </p>
          </div>

          <div className={styles.shop}>
            {items.map((item) => {
              return item.category === 'electronics' ? <ShopItem key={item.id} item={item} /> : null;
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

export default Electronics;

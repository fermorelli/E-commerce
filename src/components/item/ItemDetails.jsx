import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './item.module.css';
import { Loader } from '../loader/loader';
import CartContext from '../../context/cart/CartContext';
import { Button } from '../button/button';
import { getProductById } from '../../utils/productsApi';

const ItemDetail = () => {
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState([]);
  const [fetching, isFetching] = useState(false);

  const { id } = useParams();
  const itemID = id;

  const value = item?.rating?.rate;

  useEffect(() => {
    const fetchItem = async () => {
      isFetching(true);
      const item = await getProductById(itemID);
      setItem(item);
      isFetching(false);
    };

    fetchItem();
  }, [itemID]);

  const navigate = useNavigate();

  const prev = () => {
    navigate(-1);
  };

  return (
    <>
      {fetching ? (
        <Loader />
      ) : (
        <section className={styles.page}>
          <article className={styles.itemCard}>
            <div className={styles.mediaPanel}>
              <div className={styles.mediaFrame}>
                <img src={item.image} alt={item.title} />
              </div>
            </div>

            <div className={styles.description}>
              <span className={styles.category}>{item.category}</span>
              <h1>{item.title}</h1>
              <p className={styles.itemDescription}>{item.description}</p>

              <div className={styles.meta}>
                <div className={styles.priceBlock}>
                  <span className={styles.metaLabel}>Price</span>
                  <strong>${item.price}</strong>
                </div>

                <div className={styles.rating}>
                  <span className={styles.metaLabel}>Rating</span>
                  <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map((rate) => (
                      <span key={rate}>
                        <i
                          className={
                            value + 1 === rate + 0.5
                              ? 'fa-regular fa-star-half-stroke'
                              : value >= rate
                                ? 'fa-solid fa-star'
                                : 'fa-regular fa-star'
                          }
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.buttonContainer}>
                <Button handleClick={() => addToCart(item)}>Add to cart</Button>
                <Button handleClick={prev}>Back</Button>
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default ItemDetail;

import { useContext, useState } from 'react';
import styles from './checkout.module.css';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../context/cart/CartContext';
import { Modal } from '../modal/modal';
import { Button } from '../button/button';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const total = cartItems.reduce((amount, item) => item.price + amount, 0);
  const totalFormatted = total.toFixed(2);

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Secure checkout</span>
          <h1>Review your order before payment.</h1>
        </div>
        <p>Everything in your cart is listed below, with the same purchase flow and validation you already had.</p>
      </div>

      <div className={styles.layout}>
        <div className={styles.itemsPanel}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyState}>
              <h2>Your cart is empty</h2>
              <p>Head back to the catalog to add products before starting the payment step.</p>
              <Link to="/">
                <button className={styles.backButton}>Back to home</button>
              </Link>
            </div>
          ) : (
            <ul className={styles.list}>
              {cartItems.map((item) => (
                <CartItem key={item._id ?? item.id} item={item} />
              ))}
            </ul>
          )}
        </div>

        <aside className={styles.summary}>
          <span className={styles.summaryLabel}>Order total</span>
          <strong>${totalFormatted}</strong>
          <p>{cartItems.length} item(s) ready for payment.</p>
          <div className={styles.actions}>
            <Button handleClick={() => (cartItems.length > 0 ? clearCart() : null)}>Clear cart</Button>
            <Button handleClick={() => (cartItems.length > 0 ? setIsOpen(true) : null)}>Proceed to payment</Button>
          </div>
        </aside>
      </div>

      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  );
};

export default Checkout;

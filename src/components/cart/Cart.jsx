import { useContext } from 'react';
import styles from './cart.module.css';
import CartContext from '../../context/cart/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { Button } from '../button/button';

const Cart = () => {
  const { showCart, cartItems, showHideCart, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((amount, item) => item.price + amount, 0);
  const totalFormatted = total.toFixed(2);

  return (
    <>
      {showCart && (
        <>
          <button type="button" className={styles.backdrop} aria-label="Close cart" onClick={showHideCart} />
          <aside className={styles.cartWrapper}>
            <div className={styles.header}>
              <div>
                <span className={styles.eyebrow}>Your bag</span>
                <h2>Cart</h2>
              </div>
              <button type="button" className={styles.closeButton} onClick={showHideCart}>
                <i className="fa-solid fa-x" aria-hidden="true" />
              </button>
            </div>

            <div className={styles.cartInnerWrapper}>
              {cartItems.length === 0 ? (
                <div className={styles.emptyState}>
                  <h4>Your cart is empty</h4>
                  <p>Add something you love and come back when you are ready to check out.</p>
                </div>
              ) : (
                <ul className={styles.cartList}>
                  {cartItems.map((item) => (
                    <CartItem key={item._id ?? item.id} item={item} />
                  ))}
                </ul>
              )}
            </div>

            <div className={styles.cartFooter}>
              <div className={styles.cartTotal}>
                <span>Total</span>
                <strong>${totalFormatted}</strong>
              </div>

              {cartItems.length > 0 ? (
                <div className={styles.actions}>
                  <Button handleClick={clearCart}>Clear cart</Button>
                  <Link to="/checkout" className={styles.checkoutLink}>
                    <Button handleClick={showHideCart}>Checkout</Button>
                  </Link>
                </div>
              ) : null}
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default Cart;

import { useContext } from 'react';
import styles from './checkout.module.css';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../context/cart/CartContext';

const Checkout = ()=>{
    const { cartItems, clearCart } = useContext(CartContext);

    return (
        <div>
            <h1>Checkout</h1>
            <div>
                <ul>
                {cartItems.map((item)=> (
                    <CartItem key={item._id} item={item} />
                ))}
                </ul>
            </div>
            <div className={styles.cartTotal}>
                <h3>
                    Cart Total
                </h3>
                <p>
                    ${cartItems.reduce((amount, item) => item.price + amount, 0)}
                </p>
            </div>
            <button className={styles.button} onClick={()=>clearCart()}>clear cart</button>
            <button className={styles.button}>Proceed to payment</button>
        </div>
    )
}

export default Checkout;
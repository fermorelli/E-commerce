import { useContext, useState } from 'react';
import styles from './checkout.module.css';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../context/cart/CartContext';
import { Modal } from '../modal/modal';

const Checkout = ()=>{
    const { cartItems, clearCart } = useContext(CartContext);
    const [ isOpen, setIsOpen ] = useState(false);

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
            <button className={cartItems.length > 0 ? styles.button : styles.none} onClick={()=> cartItems.length > 0 ? clearCart():null}>clear cart</button>
            <button className={cartItems.length > 0 ? styles.button : styles.none} onClick={()=> cartItems.length > 0 ? setIsOpen(true):null} >Proceed to payment</button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
    )
}

export default Checkout;
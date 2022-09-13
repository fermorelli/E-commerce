import { useContext, useState } from 'react';
import styles from './checkout.module.css';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../context/cart/CartContext';
import { Modal } from '../modal/modal';
import { BillingModal } from '../billingModal/billingModal';

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
                <span>Add billing and shipping info</span>
                <button className={styles.billingButton} onClick={()=> cartItems.length > 0 ? setIsOpen(true):null}>
                    <i className="fa-solid fa-plus"></i>
                    <i className="fa-solid fa-house"></i>
                </button>
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
            {isOpen && <BillingModal setIsOpen={setIsOpen} />}
        </div>
    )
}

export default Checkout;
import { useContext, useState } from 'react';
import styles from './checkout.module.css';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../context/cart/CartContext';
import { Modal } from '../modal/modal';
import { Button } from '../button/button';
import { Link } from 'react-router-dom';

const Checkout = ()=>{
    const { cartItems, clearCart } = useContext(CartContext);
    const [ isOpen, setIsOpen ] = useState(false);
    const total = cartItems.reduce((amount, item) => item.price + amount, 0);
    const totalFormatted = total.toFixed(2);

    return (
        <div>
            <h1 id={styles.h1}>Checkout</h1>
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
                    ${totalFormatted}
                </p>
            </div>
            <Link to={cartItems.length===0 && '/'}>
                <button className={cartItems.length===0 ? styles.button : styles.none}>Back</button>
            </Link>
            <Button handleClick={()=> cartItems.length > 0 ? clearCart():null}>clear cart</Button>
            <Button handleClick={()=> cartItems.length > 0 ? setIsOpen(true):null} >Proceed to payment</Button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
    )
}

export default Checkout;
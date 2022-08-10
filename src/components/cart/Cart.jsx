import { useContext } from "react";
import styles from './nav.module.css';
import CartContext from "../../context/cart/CartContext";

const Cart = () => {
    const { showCart, CartItems, showHideCart } = useContext(CartContext);



    return (
        <>
            {showCart && (
                <div className={styles.cartWrapper}>
                    <div></div>
                </div>
            )}
        </>
    )
}

export default Cart;
import { useContext } from "react";
import styles from './cart.module.css';
import CartContext from "../../context/cart/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { showCart, cartItems, showHideCart } = useContext(CartContext);



    return (
        <>
            {showCart && (
                <>
                <div className={styles.cartWrapper}>

                </div>
                <div>{cartItems.length === 0 ? <h4>Cart is empty</h4> : (
                    <ul>
                        {cartItems.map((item)=> (
                            <CartItem key={item._id} item={item} />
                        ))}
                    </ul>
                ) }</div>
                <div className={styles.cartTotal}>
                    <div></div>
                    <div></div>
                </div>
                </>
            )}
        </>
    )
}

export default Cart;
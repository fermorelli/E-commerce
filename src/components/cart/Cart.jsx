import { useContext } from "react";
import styles from './cart.module.css';
import CartContext from "../../context/cart/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { showCart, cartItems, showHideCart, clearCart } = useContext(CartContext);
    return (
        <>
            {showCart && (
                <>
                <div className={styles.cartWrapper}>
                    <div style={{ textAlign: "right" }}>
                        <i
                            style={{ cursor: "pointer" }}
                            className='fa-solid fa-x'
                            aria-hidden='true'
                            onClick={showHideCart}
                            ></i>
                    </div>
                    <div className={styles.cartInnerWrapper}>
                        {cartItems.length === 0 ? <h4>Cart is empty</h4> : (
                        <ul>
                            {cartItems.map((item)=> (
                                <CartItem key={item._id} item={item} />
                            ))}
                        </ul>
                        ) }
                    </div>
                    <div className={styles.cartTotal}>
                        <div>Cart Total</div>
                        <div></div>
                        <div style={{ marginLeft: 5 }}>
                            ${cartItems.reduce((amount, item) => item.price + amount, 0)}
                        </div>
                    </div>
                    <button id={styles.button} onClick={()=>{
                        clearCart();
                    }}>Clear</button>
                </div>
                </>
            )}
        </>
    )
}

export default Cart;
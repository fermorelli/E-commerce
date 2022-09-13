import { useContext } from "react";
import styles from './cart.module.css';
import CartContext from "../../context/cart/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Button } from "../button/button";

const Cart = () => {
    const { showCart, cartItems, showHideCart, clearCart } = useContext(CartContext);
    const total = cartItems.reduce((amount, item) => item.price + amount, 0);
    const totalFormatted = total.toFixed(2);
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
                            ${totalFormatted}
                        </div>
                    </div>
                    {cartItems.length > 0 ?
                        <Button handleClick={clearCart}>
                            Clear
                        </Button> : null}
                    {cartItems.length > 0 ?
                        <Link to={"/checkout"}>
                            <Button handleClick={showHideCart}>
                                Checkout
                            </Button>
                        </Link> : null}
                    </div>
                </>
            )}
        </>
    )
}

export default Cart;
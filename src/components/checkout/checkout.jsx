import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './checkout.module.css';
import { Loader } from '../loader/loader';
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
        </div>
    )
}

export default Checkout;
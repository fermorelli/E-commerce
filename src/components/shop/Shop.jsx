import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styles from './shop.module.css';
import { Loader } from '../loader/loader';
import CartContext from '../../context/cart/CartContext';
import { useContext } from 'react';

function Shop() {
    const { addToCart } = useContext(CartContext);
    const [items, setItems] = useState([]);
    const [fetching, isFetching] = useState(false);

    const fetchItems = async () => {
        isFetching(true);
        const data = await fetch('https://fakestoreapi.com/products');
        const items1 = await data.json();
        setItems(items1);
        isFetching(false);
    };

    useEffect(()=>{
        fetchItems();
    }, []);

    return (
       <>
        {fetching ? <Loader /> : <div className={styles.all}>
                <h1>SHOP</h1>
                <div className={styles.shopGrid}>
                    {items.map((item)=>{
                        return (
                            <div className={styles.itemLink}>
                                <Link className={styles.routes} to={`/shop/${item.id}`}>
                                    <h3>{item.title}</h3>
                                    <img src={item.image} alt="item" />
                                    <p>${item.price}</p>
                                </Link>
                                <div className={styles.addCart}>
                                    <i id={styles.add}className='fa-solid fa-shopping-cart' onClick={()=> addToCart(item)} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
        </>
    );
}

export default Shop;

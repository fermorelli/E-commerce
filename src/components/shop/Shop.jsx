import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styles from './shop.module.css';
import { Loader } from '../loader/loader';
import CartContext from '../../context/cart/CartContext';
import { useContext } from 'react';
import ShopItem from '../shopItem/shopItems';

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
        console.log(items1);
    };


    useEffect(()=>{
        fetchItems();
    }, []);

    return (
    <>
        {fetching ? <Loader /> : <div className={styles.all}>
                <h1>SHOP</h1>
                <div className={styles.shop}>
                    {items.map((item)=>{
                        return (
                            <ShopItem key={item._id} item={item}/>
                        )
                    })}
                </div>
            </div>}
        </>
    );
}

export default Shop;

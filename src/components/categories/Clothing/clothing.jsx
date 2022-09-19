import { useState, useEffect } from 'react';
import styles from '../Electronics/electronics.module.css';
import { Loader } from '../../loader/loader';
import ShopItem from '../../shopItem/shopItems';

const Clothing = ()=> {
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
                <div>{items.map((item)=>{
                    return item.category===`women's clothing` || item.category=== `men's clothing`? <ShopItem key={item._id} item={item} /> : null
                    })}
                </div>
            </div>}
        </>
    );
}

export default Clothing;
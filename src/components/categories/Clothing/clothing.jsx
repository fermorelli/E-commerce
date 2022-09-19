import { useState, useEffect } from 'react';
import styles from '../categories.module.css';
import { Loader } from '../../loader/loader';
import ShopItem from '../../shopItem/shopItems';
import { Button } from '../../button/button';
import { Link } from 'react-router-dom';

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
                <div className={styles.shop}>{items.map((item)=>{
                    return item.category===`women's clothing` || item.category=== `men's clothing`? <ShopItem key={item._id} item={item} /> : null
                    })}
                </div>
                <Link to={'/'}>
                    <Button>Back</Button>
                </Link>
            </div>}
        </>
    );
}

export default Clothing;
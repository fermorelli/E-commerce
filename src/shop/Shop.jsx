import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styles from './shop.module.css';


function Shop() {

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
        {fetching && (<p>...loading</p>)}
            <div className={styles.all}>
                <h1>SHOP</h1>
                <div className={styles.shopGrid}>
                    {items.map((item)=>{
                        return (
                                <Link className={styles.itemLink} to={`/shop/${item.id}`}>
                                    <h3>{item.title}</h3>
                                    <img src={item.image} alt="item" />
                                    <p>${item.price}</p>
                                </Link>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Shop;

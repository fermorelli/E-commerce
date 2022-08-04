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
                <div>
                    {items.map((item)=>{
                        return (
                            <ul className={styles.itemList}>
                                <li key={item.id} className={styles.item}>
                                    <Link className={styles.itemLink} to={`/shop/${item.id}`}>{item.title}</Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Shop;

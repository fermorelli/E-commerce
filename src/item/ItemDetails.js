import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './item.module.css';


function ItemDetail() {

    const [item, setItem] = useState([]);
    const [fetching, isFetching] = useState(false);

    const { id } = useParams();
    const itemID = id;
    console.log(itemID);

    const fetchItem = async () => {
        isFetching(true);
        const getItem = await fetch(`https://fakestoreapi.com/products/${itemID}`);
        const item = await getItem.json();
        setItem(item);
        isFetching(false);
        console.log(item);
    };

    useEffect(()=>{
        fetchItem();
    }, []);

    return (
        <>
        {fetching ? (<p>...loading</p>) : <div className={styles.itemCard}>
                <h1>{item.title}</h1>
                <img src={item.image} alt="item"></img>
                <p>{item.description}</p>
                <span>price ${item.price}</span>
            </div>}
        </>
    );
}

export { ItemDetail };
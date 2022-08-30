import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './item.module.css';
import { Loader } from '../loader/loader';
import CartContext from '../../context/cart/CartContext';



const ItemDetail = ()=> {
    const { addToCart } = useContext(CartContext);
    const [item, setItem] = useState([]);
    const [fetching, isFetching] = useState(false);

    const { id } = useParams();
    const itemID = id;

    const fetchItem = async () => {
        isFetching(true);
        const getItem = await fetch(`https://fakestoreapi.com/products/${itemID}`);
        const item = await getItem.json();
        setItem(item);
        isFetching(false);
    };

    const value = item?.rating?.rate;

    useEffect(()=>{
        fetchItem();
    }, []);

    return (
        <>
        {fetching ? <Loader /> :
        <div className={styles.itemCard}>
            <h1>{item.title}</h1>
            <div className={styles.rest}>
                <img src={item.image} alt="item"></img>
                <div className={styles.description}>
                    <p>{item.description}</p>
                    <span>price ${item.price}</span>
                    <div className={styles.rating}>{[1,2,3,4,5].map((rate)=>(
                        <span>
                            <i style={{ color: "black"}} className={
                                value + 1 === rate + 0.5
                                ? "fa-regular fa-star-half-stroke"
                                : value >= rate
                                ? "fa-solid fa-star"
                                : "fa-regular fa-star"}/>
                        </span>))}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button id={styles.button} onClick={() => {
                            addToCart(item);
                            }}>ADD TO CART</button>
                        <Link to={'/shop'}>
                            <button type="button" id={styles.button}>BACK</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>}
        </>
    );
}

export default ItemDetail;
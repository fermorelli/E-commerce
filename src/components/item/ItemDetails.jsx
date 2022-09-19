import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './item.module.css';
import { Loader } from '../loader/loader';
import CartContext from '../../context/cart/CartContext';
import { Button } from '../button/button';



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

    const navigate = useNavigate();

    const prev = () =>{
        navigate(-1);
    }

    return (
        <>
        {fetching ? <Loader /> :
        <div className={styles.itemCard}>
            <h2 id={styles.h2}>{item.title}</h2>
            <div className={styles.rest}>
                <img src={item.image} alt="item"></img>
                <div className={styles.description}>
                    <p className={styles.itemDescription}>{item.description}</p>
                    <span>price ${item.price}</span>
                    <div className={styles.rating}>
                        <span>RATING</span>
                        <div>{[1,2,3,4,5].map((rate)=>(
                        <span>
                            <i style={{ color: "blueviolet"}} className={
                                value + 1 === rate + 0.5
                                ? "fa-regular fa-star-half-stroke"
                                : value >= rate
                                ? "fa-solid fa-star"
                                : "fa-regular fa-star"}/>
                        </span>))}</div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button handleClick={() => {
                            addToCart(item);
                            }}>ADD TO CART</Button>
                        <Button handleClick={prev}>BACK</Button>
                    </div>
                </div>
            </div>
        </div>}
        </>
    );
}

export default ItemDetail;
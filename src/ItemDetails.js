import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ItemDetail() {

    const [item, setItem] = useState([]);

    const { id } = useParams();
    const itemID = id;
    console.log(itemID);

    const fetchItem = async () => {
        const getItem = await fetch(`https://fakestoreapi.com/products/${itemID}`);
        const item = await getItem.json();
        setItem(item);
        console.log(item);
    };

    useEffect(()=>{
        fetchItem();
    }, []);

    

    return (
        <div className="App">
            <h1>{item.title}</h1>
            <img src={item.image} alt="item"></img>
        </div>
    );
}

export { ItemDetail };
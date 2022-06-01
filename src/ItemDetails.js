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

        console.log(item);
    };

    useEffect(()=>{
        fetchItem();
    }, []);

    

    return (
        <div className="App">
            <h1>Item</h1>
        </div>
    );
}

export { ItemDetail };
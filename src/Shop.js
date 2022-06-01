import './App.css';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Shop() {

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const items1 = await data.json();
        setItems(items1);
        console.log(items1);
    };

    useEffect(()=>{
        fetchItems();
    }, []);

    return (
        <div className="App">
            <h1>SHOP</h1>
            <div className="item-list">
                {items.map((item)=>{
                    return (
                    <li key={item.id} className="li">
                        <Link to={`/shop/${item.id}`}>{item.title}</Link>
                    </li>
                    //<div key={item.id}>{item.image}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default Shop;

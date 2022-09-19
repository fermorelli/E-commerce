import './App.css';
import Nav from './components/nav/Nav';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import ItemDetail from './components/item/ItemDetails'
import Checkout from "./components/checkout/checkout";
import Electronics from './components/categories/Electronics/electronics';
import Clothing from './components/categories/Clothing/clothing';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Nav />
        <Cart />
          <Routes>
            <Route path="/" exact element={<Shop />} />
            <Route path="/:id" element={<ItemDetail />} />
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/electronics" element={<Electronics />}/>
            <Route path="/clothing" element={<Clothing />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;

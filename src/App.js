import './App.css';
import Nav from './components/nav/Nav';
import Shop from './components/shop/Shop';
import About from './About';
import Cart from './components/cart/Cart';
import ItemDetail from './components/item/ItemDetails'
import Checkout from "./components/checkout/checkout";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Cart />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/shop" exact element={<Shop />} />
            <Route path="/shop/:id" element={<ItemDetail />} />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;

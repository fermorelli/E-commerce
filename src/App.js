import './App.css';
import Nav from './Nav';
import Shop from './shop/Shop';
import About from './About';
import { ItemDetail } from './item/ItemDetails';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            {/* [//<Route path="/" exact element={<Home />}></Route>] */}
            <Route path="/about" element={<About />} />
            <Route path="/shop" exact element={<Shop />} />
            <Route path="/shop/:id" element={<ItemDetail />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;

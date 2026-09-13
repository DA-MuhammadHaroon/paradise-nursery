import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <Router>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart 🛒 ({totalCount})</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={
          <div className="landing">
            <h1>Welcome To Paradise Nursery</h1>
            <p>Bring nature home with our beautiful houseplants.</p>
            <Link to="/plants">
              <button onClick={handleGetStartedClick}>Get Started</button>
            </Link>
          </div>
        } />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
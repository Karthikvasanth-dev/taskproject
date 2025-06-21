// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';        // ✅ Corrected path
import Shop from './pages/Shop';        // ✅ Corrected path
import ProductDetails from './ProductDetails';
import { CartProvider } from './CartContext';
import CartSidebar from './CartSidebar';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
        <CartSidebar />
      </Router>
    </CartProvider>
  );
}

export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';  // ✅ in pages folder
import Shop from './pages/Shop';  // ✅ in pages folder
import ProductDetails from './ProductDetails';
import Pages from './Pages';         // ✅ in src
import OurMenu from './OurMenu';     // ✅ in src
import Blog from './Blog';           // ✅ in src
import ContactUs from './ContactUs'; // ✅ in src
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
          <Route path="/pages" element={<Pages />} />
          <Route path="/our-menu" element={<OurMenu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
        <CartSidebar />
      </Router>
    </CartProvider>
  );
}

export default App;

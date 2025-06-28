import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {
  FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram,
  FaYoutube, FaLinkedinIn, FaSearch, FaShoppingBag
} from 'react-icons/fa';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { cartItems, toggleCart } = useContext(CartContext);

  return (
    <>
      <header>
        <div className="top-bar">
          <div className="left-info">
            <FaPhone /> <span>+304 555 8473</span>
            <FaMapMarkerAlt className="icon" /> <span>Choose your location</span>
          </div>
          <div className="right-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="main-navbar">
          <img src='\foodizologo.png' alt="Logo" className="logo" />
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/pages">Pages</Link>
            <Link to="/our-menu">Our Menu</Link> {/* ✅ Corrected path */}
            <Link to="/shop">Shop</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact-us">Contact Us</Link>
          </nav>

          <div className="nav-icons">
            <FaSearch className="icon" />
            <FaShoppingBag className="icon cart-icon" onClick={toggleCart} />
            <span className="cart-text" onClick={toggleCart}>Cart({cartItems.length})</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

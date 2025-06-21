// src/pages/Shop.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FoodList from '../FoodList';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-page">
      <div
        className="shop-banner"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          color: 'white',
        }}
      >
        <div className="overlay">
          <h1>Products</h1>
          <div className="breadcrumb">
            <span className="home-icon">🏠</span>
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="separator">›</span>
            <span>Product</span>
          </div>
        </div>
      </div>

      <FoodList />
    </div>
  );
};

export default Shop;

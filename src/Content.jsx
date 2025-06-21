import React from 'react';
import './Content.css';
import { useNavigate } from 'react-router-dom';

const Content = () => {
  const navigate = useNavigate(); 

  const handlePurchaseClick = () => {
    navigate('/shop');
  };

  return (
    <div className="content">
      {/* Hero Section */}
      <section className="hero">
        <img src="Screenshot 2025-06-07 125016.png" alt="Foodizo Logo" className="hero-logo" />
        <h1 className="hero-title">Fast Food Restaurant<br />WordPress Theme</h1>
        <button className="hero-button" onClick={handlePurchaseClick}>
          PURCHASE NOW
        </button>
      </section>

      {/* Showcase Section */}
      <section className="showcase">
        <div className="side-image left">
          <img src="left.jpg" alt="Side Preview Left" />
        </div>
        <div className="center-image">
          <img src="1-10.png" alt="Main Preview" />
        </div>
        <div className="side-image right">
          <img src="right.jpg" alt="Side Preview Right" />
        </div>
      </section>
    </div>
  );
};

export default Content;

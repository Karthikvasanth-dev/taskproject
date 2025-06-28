// src/ContactUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const ContactUs = () => {
  return (
    <div className="contactus-page">
      <div
        className="pages-banner"
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
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <h1>Contact Us</h1>
        <div className="breadcrumb">
          <span className="home-icon">🏠</span>
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="separator">›</span>
          <span>Contact Us</span>
        </div>
      </div>

      <div className="pages-content">
        <p></p>
      </div>
    </div>
  );
};

export default ContactUs;

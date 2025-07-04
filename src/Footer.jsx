import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Linkedin, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section overlapped">
        <div className="newsletter-container">
          <div className="newsletter-title">
            <h2 className="newsletter-heading">
              Welcome Treat First <br /> Order Offer
            </h2>
          </div>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="main-footer">
        <div className="footer-grid layout-three-columns">

          {/* Column 1: Logo and Description */}
          <div className="company-info">
            <div className="company-header">
              <img src="\Screenshot 2025-06-24 211710.png" alt="Foodizo logo" className="footer-logo-image" />
              <h3 className="company-name">Foodizo</h3>
            </div>
            <p className="company-description">
              Welcome to Foodizo, where passion meets plate symphony of flavors. Nestled in the heart, our restaurant invites you on a culinary journey.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Youtube size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Column 2: Our Company Links */}
          <div className="footer-section company-links">
            <h4>Our Company</h4>
            <div className="footer-link-columns">
              <ul className="footer-links">
                <li><a href="#" className="footer-link"><span className="footer-link-arrow">›</span> About Us</a></li>
                <li><a href="#" className="footer-link"><span className="footer-link-arrow">›</span> Restaurant</a></li>
                <li><a href="#" className="footer-link"><span className="footer-link-arrow">›</span> Report A Bug</a></li>
                <li><a href="#" className="footer-link"><span className="footer-link-arrow">›</span> FAQ</a></li>
              </ul>
              <ul className="footer-links">
                <li><a href="#" className="footer-link"><span className="footer-link-arrow">›</span> Blog</a></li>
                <li><a href="#" className="footer-link"><span className="footer-link-arrow">›</span> Reservation</a></li>
                <li><a href="#" className="footer-link"><span className="footer-link-arrow">›</span> Food Delivery</a></li>
                <li><a href="#" className="footer-link"><span className="footer-link-arrow">›</span> Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Opening Hours */}
          <div className="footer-section">
            <h4>Opening Hours</h4>
            <div className="opening-hours">
              <div className="hours-row"><span className="hours-day">Mon - Tue</span><span className="hours-time">09.00 am - 10.00 pm</span></div>
              <div className="hours-row"><span className="hours-day">Wed - Thu</span><span className="hours-time">10.00am - 11.00pm</span></div>
              <div className="hours-row"><span className="hours-day">Sunday</span><span className="hours-time">Closed</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p>Copyright 2023 Foodizo Theme by Peacefulqode | All Rights Reserved</p>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="scroll-to-top"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './HomeCard.css';

const HomeCard = ({ image, title }) => {
  return (
    <div className="home-card">
      <img src={image} alt={title} className="home-card-image" />
      <h3 className="home-card-title">{title}</h3>
    </div>
  );
};

export default HomeCard;

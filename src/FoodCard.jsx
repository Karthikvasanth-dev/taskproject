import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { FaShoppingBasket, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import './FoodCard.css';

const FoodCard = ({ title, image, price, slug }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ title, image, price, slug });
    setAdded(true);
  };

  return (
    <div className="food-card">
      <div className="food-image-container">
        <img src={image} alt={title} className="food-image" />
      </div>

      <div className="price-tag">${price}</div>

      {/* ✅ Make title clickable */}
      <Link to={`/product/${slug}`} className="food-title-link">
        <h3 className="food-title">{title}</h3>
      </Link>

      <p className="food-description">lorem ipsum is simply dummy text.</p>

      <button onClick={handleAddToCart} className="basket-button">
        {added ? <FaCheck className="tick-icon" /> : <FaShoppingBasket className="basket-icon" />}
      </button>
    </div>
  );
};

export default FoodCard;

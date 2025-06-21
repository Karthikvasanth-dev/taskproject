import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import './ProductDetails.css';
import { foodItems } from './pages/sampleData';

// const foodItems = [
//   { title: "Cheese Burger", image: "/burger1.png", price: 5.99, slug: "cheese-burger" },
//   { title: "Veggie Wrap", image: "/food2.png", price: 4.49, slug: "veggie-wrap" },
//   { title: "Chicken Nuggets", image: "/food3.png", price: 3.99, slug: "chicken-nuggets" },
//   { title: "Pasta Alfredo", image: "/food4.png", price: 6.50, slug: "pasta-alfredo" },
//   { title: "Grilled Sandwich", image: "/food5.png", price: 4.99, slug: "grilled-sandwich" },
//   { title: "Tandoori Pizza", image: "/food6.png", price: 7.00, slug: "tandoori-pizza" },
//   { title: "Fried Rice", image: "/fririce.png", price: 5.50, slug: "fried-rice" },
//   { title: "Spring Rolls", image: "/food8.png", price: 3.49, slug: "spring-rolls" },
//   { title: "Chicken Biryani", image: "/food9.jpeg", price: 6.99, slug: "chicken-biryani" },
//   { title: "Ice Cream", image: "/food10.jpeg", price: 2.50, slug: "ice-cream" },
// ];

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  
  const product = foodItems.find(item => item.slug === productId);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product not found</div>;

  const increaseQty = () => setQuantity(qty => qty + 1);
  const decreaseQty = () => setQuantity(qty => (qty > 1 ? qty - 1 : 1));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="product-details-page">
      <div
        className="product-banner"
        style={{
          backgroundImage: `url('/bg - Copy.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
          textShadow: '1px 1px 6px rgba(0,0,0,0.8)', 
        }}
      >
        <h1>{product.title}</h1>
      </div>

      <div className="product-details-content">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="price">${product.price.toFixed(2)}</p>
          <div className="quantity-controls">
            <button onClick={decreaseQty}>−</button>
            <span>{quantity}</span>
            <button onClick={increaseQty}>+</button>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

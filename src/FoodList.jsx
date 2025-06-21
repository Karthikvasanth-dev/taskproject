import React from 'react';
import FoodCard from './FoodCard';
import './FoodList.css';
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

const FoodList = () => {
  return (
    <div className="food-list">
      {foodItems.map((item, index) => (
        <FoodCard
          key={index}
          title={item.title}
          image={item.image}
          price={item.price}
          slug={item.slug} // ✅ Pass slug for routing
        />
      ))}
    </div>
  );
};

export default FoodList;

import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartSidebar.css';

const CartSidebar = () => {
  const { cartItems, isCartOpen, toggleCart } = useContext(CartContext);

  console.log(cartItems);
  

 const totalPrice = Math.round(
  cartItems.reduce((total, item) => total + Number(item.price), 0)
);

  return (
    <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleCart}>×</button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.quantity} × ₹{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="subtotal">
            <p>Subtotal: ₹{totalPrice}</p>
            <button className="view-cart">View Cart</button>
            <button className="checkout">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;

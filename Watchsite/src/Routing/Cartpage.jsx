
import React, { useContext } from "react";
import { CartContext } from "./Cartcontext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cartpage = () => {
  const { cart, removeFromCart, decreaseQty, increaseQty, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">No items in cart.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.imgages} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ₹{item.price * item.quantity}</p>
                </div>
                <div className="cart-item-controls">
                  <div className="quantity-control">
                    <button className="quantity-btn" onClick={() => decreaseQty(item.id)}>-</button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-summary">
          <div className="cart-total">Grand Total: ₹{totalPrice}</div>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="checkout-btn" onClick={() => alert('Checkout functionality would be implemented here!')}>Place Order</button>
            <button className="continue-shopping-btn" onClick={() => navigate('/shop')}>Continue Shopping</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;

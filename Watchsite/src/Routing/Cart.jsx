import React, { useContext } from "react";
import { CartContext } from "./Cartcontext";
import "./Cart.css";
const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice } =
    useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-header" >
        <h2>🛒 Your Cart</h2>
      </div>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>🛒 Your cart is empty.</p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <p className="cart-item-price">₹{item.price}</p>
                </div>
                <div className="cart-item-controls">
                  <div className="quantity-control">
                    <button className="quantity-btn" onClick={() => decreaseQty(item.id)}>➖</button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => increaseQty(item.id)}>➕</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    🗑️ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-summary">
          <div className="cart-total">Total: ₹{totalPrice}</div>
          <button className="checkout-btn">💳 Checkout</button>
          <button className="continue-shopping-btn">🛍️ Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
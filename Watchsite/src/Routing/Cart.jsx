import React, { useContext } from "react";
import { CartContext } from "../Routing/Home/CartContext";
const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  return (
    <div style={{ margin: 20 }}>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>No items in cart.</p>}
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            borderBottom: "1px solid gray",
            padding: 10,
          }}
        >
          <img src={item.image} alt={item.title} width={100} />
          <div>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <p>Quantity: {item.qty}</p>
            <button onClick={() => increaseQty(item.id)}>+</button>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
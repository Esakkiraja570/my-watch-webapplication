
import React, { useContext } from "react";
import { CartContext } from "./Cartcontext";
const Cartpage = () => {
  const { cart, removeFromCart,decreaseQty,increaseQty,totalPrice } = useContext(CartContext);
  
  return (
    <div style={{ margin: "20px",textAlign:"center" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
             backgroundColor:"grey",
              display: "inline-block",
              alignItems: "start",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              marginBottom: "15px",
              color:"white "

            }}
          >   
            <img
              src={item.imgages}
              alt={item.name}/>
           <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ₹{item.price*item.quantity}</p>

            <button onClick={() => decreaseQty(item.id)} style={{backgroundColor:"lightblue", padding:"9px",borderRadius:"10px", margin:"5px"}}>-</button>
            <button onClick={() => increaseQty(item.id)}style={{backgroundColor:"lightblue", padding:"9px",borderRadius:"10px",margin:"5px"}}>+</button>
            <button onClick={() => removeFromCart(item.id)}style={{backgroundColor:"lightblue", padding:"9px",borderRadius:"10px",margin:"5px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg><i class="bi bi-trash"></i></button>
          </div>
        
        ))
      )}

      {cart.length > 0 && (
        <h3 style={{ marginTop: "20px",}}>Grand Total: ₹{totalPrice}</h3>
      )}
      <button style={{borderRadius:"20px",backgroundColor:"lightgreen"}}>Place Order</button>
    </div>
  );
};

export default Cartpage;

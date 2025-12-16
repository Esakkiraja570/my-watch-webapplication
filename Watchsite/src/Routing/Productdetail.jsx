
// import React, { useContext } from "react";
// import { CartContext } from "./Cartcontext";

// const Cartpage = () => {
//   const { cart, removeFromCart,decreaseQty,increaseQty,totalPrice } = useContext(CartContext);
  
//   return (
//     <div style={{ margin: "20px",textAlign:"center" }}>
//       <h2>Your Cart</h2>

//       {cart.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         cart.map((item) => (
//           <div
//             key={item.id}
//             style={{
//              backgroundColor:"grey",
//               display: "inline-block",
//               alignItems: "center",
//               justifyContent: "space-between",
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               padding: "10px",
//               marginBottom: "15px",
//               color:"white "

//             }}
//           >
//             <img
//               src={item.imgages}
//               alt={item.name}/>
//            <h3>{item.name}</h3>
//             <p>Price: ₹{item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Total: ₹{item.price*item.quantity}</p>

//             <button onClick={() => decreaseQty(item.id)} style={{backgroundColor:"lightblue", padding:"9px",borderRadius:"10px", margin:"5px"}}>-</button>
//             <button onClick={() => increaseQty(item.id)}style={{backgroundColor:"lightblue", padding:"9px",borderRadius:"10px",margin:"5px"}}>+</button>
//             <button onClick={() => removeFromCart(item.id)}style={{backgroundColor:"lightblue", padding:"9px",borderRadius:"10px",margin:"5px"}}>Remove</button>
//           </div>
        
//         ))
//       )}

//       {cart.length > 0 && (
//         <h3 style={{ marginTop: "20px",}}>Grand Total: ₹{totalPrice}</h3>
//       )}
//       <button style={{borderRadius:"20px",backgroundColor:"lightgreen"}}>Place Order</button>
//     </div>
//   );
// };

// export default Cartpage;
// import React from 'react'

// const Productdetail = () => {
// //   return (
//     <div style={{ margin: "20px",textAlign:"center" }}>       
//     <h2>Your Cart</h2>

//       {cart.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         cart.map((item) => (
//           <div
//             key={item.id}
//             style={{
//              backgroundColor:"grey",
//               display: "inline-block",
//               alignItems: "center",
//               justifyContent: "space-between",
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               padding: "10px",
//               marginBottom: "15px",
//               color:"white "

//             }}
//           >
//             <img
//               src={item.imgages}
//               alt={item.name}/>
//            <h3>{item.name}</h3>
//             <p>Price: ₹{item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Total: ₹{item.price*item.quantity}</p>

//             <button onClick={() => decreaseQty(item.id)} style={{backgroundColor:"lightblue", padding:"9px",borderRadius:"10px", margin:"5px"}}>-</button>
//             <button onClick={() => increaseQty(item.id)}style={{backgroundColor:"lightblue", padding:"9px",borderRadius:"10px",margin:"5px"}}>+</button>
//             <button onClick={() => removeFromCart(item.id)}style={{backgroundColor:"lightblue", padding:"9px",borderRadius:"10px",margin:"5px"}}>Remove</button>
//           </div>
        
        
//   )
// }

// export default Productdetail

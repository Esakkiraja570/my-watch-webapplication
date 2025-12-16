import React, { useContext, useState } from "react";
import { CartContext } from "./Cartcontext";
import { useNavigate } from "react-router-dom";
import img1 from "./Shop cards/2222222.avif";
import img2 from "./Shop cards/333333f.avif";
import img3 from "./Shop cards/4444444441.avif";
import img4 from "./Shop cards/5555555550e.avif";
import img5 from "./Shop cards/5555555550e.avif";
import img6 from "./Shop cards/a9ff3b_9ef56661e3354b10821ac0d339bef2a4.avif";
import img7 from "./Shop cards/88888888d.avif";
import img8 from "./Shop cards/777777779.avif";
import img9 from "./Shop cards/66666666.avif";

const Shop = () => {
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // product detail popup
  const { cart, addToCart, removeFromCart, decreaseQty, increaseQty, totalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();

  const products = [
    { id: 1, img: img1, name: "Titan", price: 200, desc: "Classic elegant watch." },
    { id: 2, img: img2, name: "G-Smart", price: 400, desc: "Smartwatch with fitness tracking." },
    { id: 3, img: img3, name: "Rolex", price: 500, desc: "Luxury Swiss-made watch." },
    { id: 4, img: img4, name: "Intex", price: 600, desc: "Durable water-resistant design." },
    { id: 5, img: img5, name: "Patek Philips", price: 700, desc: "Premium classic style." },
    { id: 6, img: img6, name: "Piguel", price: 800, desc: "Sleek design with leather strap." },
    { id: 7, img: img7, name: "Cartiler", price: 900, desc: "Bold and iconic luxury brand." },
    { id: 8, img: img8, name: "Casino", price: 700, desc: "Stylish watch for daily wear." },
    { id: 9, img: img9, name: "Omega", price: 900, desc: "Precision performance watch." },
  ];


  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };


  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      setSelectedProduct(null);
      setShowCart(true);
    }
  };

  return (
    <div className="shopcard">
      <h4>Shop</h4>

      {}
      <div className="card-containers">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.img} alt={product.name} />
            <h4  id="content">{product.name}</h4>
            <p  id="content">₹{product.price}</p>
            <button
              className="view-btn"
              onClick={() => handleProductClick(product)}
              style={{ fontSize: "13px",backgroundColor:"gold",marginBottom:"20px" }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {}
      {selectedProduct && (
        <div
          style={{
            display:"flex",
            position: "fixed",
            top: "0",
            left: "0",
            width:"100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "60px",
              width: "850px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <div>
            <img
              src={selectedProduct.img}
               alt={selectedProduct.name}
              width="200"
              style={{ borderRadius: "10px",display:"inline-block",width:"200px" }}
            
            /></div>
            <div>
             
              </div>
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.desc}</p>
            <h4>₹{selectedProduct.price}</h4>

            <div style={{ marginTop: "15px" }}>
              <button
                onClick={handleAddToCart}
                style={{
                  backgroundColor: "lightgreen",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  backgroundColor: "lightcoral",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      {showCart && (
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            width: "350px",
            height: "100%",
            backgroundColor: "#f9f9f9",
            boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Your Cart</h2>
            <button
              onClick={() => setShowCart(false)}
              style={{
                backgroundColor: "lightcoral",
                border: "none",
                borderRadius: "8px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>

          <hr />

          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "#444",
                  color: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                <img src={item.img} alt={item.name} width="100" />
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Qty: {item.quantity}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <button onClick={() => increaseQty(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>🗑</button>
              </div>
            ))
          )}

          {cart.length > 0 && (
            <>
              <hr />
              <h5>Grand Total: ₹{totalPrice}</h5>
              <button
                onClick={() => navigate("/cart")}
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
              >
                Go to Cart
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Shop;

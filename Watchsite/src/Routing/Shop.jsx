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
import "./Shop.css";

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

      <div className="card-containers">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button
              className="view-btn"
              onClick={() => handleProductClick(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
            />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.desc}</p>
            <h4>₹{selectedProduct.price}</h4>
            <div className="modal-buttons">
              <button onClick={handleAddToCart}>Add to Cart</button>
              <button onClick={() => setSelectedProduct(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {}
      {showCart && (
        <div className="cart-sidebar">
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button className="cart-close" onClick={() => setShowCart(false)}>✖</button>
          </div>
          <hr />
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} width="100" />
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Qty: {item.quantity}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
                <button className="view-detail-btn" onClick={() => handleProductClick(item)}>View Details</button>
                <div className="cart-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>🗑</button>
                </div>
              </div>
            ))
          )}
          {cart.length > 0 && (
            <>
              <hr />
              <div className="cart-total">Grand Total: ₹{totalPrice}</div>
              <button className="checkout-btn" onClick={() => navigate("/cart")}>
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

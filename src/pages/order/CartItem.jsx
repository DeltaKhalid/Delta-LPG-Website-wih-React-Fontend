import React from "react";

const CartItem = ({ product, onQtyChange }) => {
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} />
      <div className="cart-details">
        <h4>{product.title}</h4>
        <p className="price">{product.price} ৳</p>
        <div className="quantity-controls">
          <button onClick={() => onQtyChange(-1)}>-</button>
          <input type="text" readOnly value={product.quantity} />
          <button onClick={() => onQtyChange(1)}>+</button>
        </div>
        <p className="subtotal">{product.subtotal} ৳</p>
        <p className="stock">{product.stock}</p>
      </div>
    </div>
  );
};

export default CartItem;

import React from "react";

const CartSummary = ({ total }) => {
  return (
    <div className="cart-summary">
      <h3>Order Total</h3>
      <div className="summary-item">
        <span>Subtotal:</span>
        <span>{total} ৳</span>
      </div>
      <div className="summary-total">
        <strong>Total:</strong>
        <strong>{total} ৳</strong>
      </div>
      <input type="text" placeholder="Discount code or gift card" />
    </div>
  );
};

export default CartSummary;

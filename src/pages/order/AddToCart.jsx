import React, { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
// import "./cart.css";

const CartPage = () => {
  const [product, setProduct] = useState({
    title: "25 kg 22 mm LPG Refilled cylinder",
    image: "/images/product_25_kg.png", // adjust path as needed
    price: 2653,
    quantity: 1,
    subtotal: 2653,
    stock: "Available",
  });

  const handleQtyChange = (change) => {
    const newQty = product.quantity + change;
    if (newQty > 0) {
      const newSubtotal = newQty * product.price;
      setProduct({ ...product, quantity: newQty, subtotal: newSubtotal });
    }
  };

  return (


<div className="cart-page-container">
  <div className="cart-wrapper">
    {/* your cart-left and cart-right code */}


            {/* ---- Cart Left --- */}
      <div className="cart-left">
        <div className="cart-header">
          <h2>Cart</h2>
          <button className="clear-cart">🗑️ Clear Cart</button>
        </div>
        <CartItem product={product} onQtyChange={handleQtyChange} />
        <div className="cart-actions">
          <button className="continue-btn">← Continue Shopping</button>
          <button className="sign-in-btn">Sign In 🔐</button>
        </div>
      </div>
      {/* ---- Cart Left --- */}
      <div className="cart-right">
        <CartSummary total={product.subtotal} />
      </div>



  </div>
</div>







    
    // <div className="cart-container">

    //     {/* ---- Cart Left --- */}
    //   <div className="cart-left">
    //     <div className="cart-header">
    //       <h2>Cart</h2>
    //       <button className="clear-cart">🗑️ Clear Cart</button>
    //     </div>
    //     <CartItem product={product} onQtyChange={handleQtyChange} />
    //     <div className="cart-actions">
    //       <button className="continue-btn">← Continue Shopping</button>
    //       <button className="sign-in-btn">Sign In 🔐</button>
    //     </div>
    //   </div>
    //   {/* ---- Cart Left --- */}
    //   <div className="cart-right">
    //     <CartSummary total={product.subtotal} />
    //   </div>



    // </div>





  );
};

export default CartPage;













// import React from 'react';

// const AddToCart = () => {
//     return (
//         <div>
//             <h1>Add to Cart Page</h1>
//         </div>
//     );
// };

// export default AddToCart;
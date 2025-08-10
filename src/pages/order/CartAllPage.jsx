import React, { useState } from "react";
// import "./CartAllPage.css";
import { FaTrashAlt, FaSignInAlt } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom'

const CartAllPage = () => {
  const [quantity, setQuantity] = useState(7);

  const price = 2653;
  const subtotal = price * quantity;

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => quantity > 1 && setQuantity(quantity - 1);

  return (

    <div className="cart-page-container">
        <div className="cart-wrapper">


     <div className="">
      {/* Top Progress Bar */}
      {/* <div className="cart-steps">
        <span>Review Order</span>
        <span className="active">Address</span>
        <span>Confirm Order</span>
      </div> */}

      <div className="cart-container">
        {/* Left Side */}
        <div className="cart-left">
          <div className="cart-header-row">
            <h6 className="product_name_field_min">Product</h6>
            <h6 className="price_field_min">Price</h6>
            <h6 className="quantity_field_min">Quantity</h6>
            <h6>Subtotal</h6>
            <h6>Stock Availability</h6>
          </div>

          {/* Product Row */}
          <div className="cart-item">
            <div className="cart-product-info product_name_field_min">
              <img
                src="../../src/assets/images/product_img/product_12_kg.jpg"
                alt="LPG Cylinder"
                className="product-image"
              />
              <span className="product_name" >25 kg 22 mm LPG Refilled cylinder</span>
            </div>
            <div className="cart-price price_field_max">{price.toLocaleString()} ৳</div>

            <div className="cart-qty quantity_field_max">
              <button onClick={decreaseQty}>-</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={increaseQty}>+</button>
            </div>

            <div className="cart-subtotal">{subtotal.toLocaleString()} ৳</div>
            <div className="cart-stock">Available</div>
            <div className="cart-delete">
              <FaTrashAlt />
            </div>
          </div>

          {/* Buttons */}
          <div className="">
            {/* <button className="continue-btn">← Continue Shopping</button> */}
            {/* <button className="signin-btn">
              Sign In <FaSignInAlt />
            </button> */}
            {/* <button className="thm-btn main-menu__btn fa fa-arrow-right">Buy Now</button> */}

                
            
            <button className="thm-btn main-menu__btn fa fa-arrow-right">
                <Link to="/buy-now" className="">
                    <i className="fa fa-arrow-right"></i> Buy Now
                  </Link>
            </button>




          </div>
          




        </div>

        {/* Right Side - Order Summary */}
        <div className="cart-right">
          <h3>Order Total</h3>
          <div className="summary-line">
            <span>Subtotal:</span>
            <span>{subtotal.toLocaleString()} ৳</span>
          </div>
          <div className="summary-total">
            <span>Total:</span>
            <strong>{subtotal.toLocaleString()} ৳</strong>
          </div>
          <p className="discount-text">Discount code or gift card</p>
        </div>
      </div>
     </div>



        </div>
    </div>






    






  );
};

export default CartAllPage;















// import React from 'react';

// const CartAllPage = () => {
//     return (
//         <div>
//             <h1> All Cart Show page. </h1>
//         </div>
//     );
// };

// export default CartAllPage;
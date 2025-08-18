import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function BuyNow() {
  const location = useLocation();
  const productData = location.state?.product;

  // Fallback if user visits /buy-now directly
  const initialQuantity = productData?.quantity || 1;
  const [quantity, setQuantity] = useState(initialQuantity);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const price = productData?.price || 0;
  const subtotal = price * quantity;

  const increaseQty = () => setQuantity(qty => qty + 1);
  const decreaseQty = () => setQuantity(qty => (qty > 1 ? qty - 1 : 1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", { ...formData, productData, quantity, subtotal });
    alert("Order submitted successfully!");
    setFormData({ name: "", phone: "", address: "" });
  };

  if (!productData) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No product selected</h2>
        <Link to="/shop-now">Go back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <div className="cart-wrapper">
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
                  src={productData.image}
                  alt={productData.title}
                  className="product-image"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <span className="product_name">{productData.title}</span>
              </div>
              <div className="cart-price price_field_max">
                {price.toLocaleString()} ৳
              </div>

              <div className="cart-qty quantity_field_max">
                <button onClick={decreaseQty}>-</button>
                <input type="text" value={quantity} readOnly />
                <button onClick={increaseQty}>+</button>
              </div>

              <div className="cart-subtotal">
                {subtotal.toLocaleString()} ৳
              </div>
              <div className="cart-stock">Available</div>
              <div className="cart-delete">
                <FaTrashAlt />
              </div>
            </div>

            {/* Order Now Form */}
            <form className="order-form" onSubmit={handleSubmit}>
              <h3>Order Now</h3>

              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label>Address</label>
              <textarea
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </form>
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
  );
}































// import React, { useState } from "react";
// import { FaTrashAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// // import "./OrderNow.css"; // Form styles

// export default function BuyNow() {
//   const [quantity, setQuantity] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//   });

//   const price = 2653;
//   const subtotal = price * quantity;

//   const increaseQty = () => setQuantity(quantity + 1);
//   const decreaseQty = () => quantity > 1 && setQuantity(quantity - 1);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Order Submitted:", { ...formData, quantity, subtotal });
//     alert("Order submitted successfully!");
//     setFormData({ name: "", phone: "", address: "" });
//   };

//   return (
//     <div className="cart-page-container">
//       <div className="cart-wrapper">
//         <div className="cart-container">
//           {/* Left Side */}
//           <div className="cart-left">
//             <div className="cart-header-row">
//               <h6 className="product_name_field_min">Product</h6>
//               <h6 className="price_field_min">Price</h6>
//               <h6 className="quantity_field_min">Quantity</h6>
//               <h6>Subtotal</h6>
//               <h6>Stock Availability</h6>
//             </div>

//             {/* Product Row */}
//             <div className="cart-item">
//               <div className="cart-product-info product_name_field_min">
//                 <img
//                   src="../../src/assets/images/product_img/product_12_kg.jpg"
//                   alt="LPG Cylinder"
//                   className="product-image"
//                 />
//                 <span className="product_name">
//                   25 kg 22 mm LPG Refilled Cylinder
//                 </span>
//               </div>
//               <div className="cart-price price_field_max">
//                 {price.toLocaleString()} ৳
//               </div>

//               <div className="cart-qty quantity_field_max">
//                 <button onClick={decreaseQty}>-</button>
//                 <input type="text" value={quantity} readOnly />
//                 <button onClick={increaseQty}>+</button>
//               </div>

//               <div className="cart-subtotal">
//                 {subtotal.toLocaleString()} ৳
//               </div>
//               <div className="cart-stock">Available</div>
//               <div className="cart-delete">
//                 <FaTrashAlt />
//               </div>
//             </div>

//             {/* Buy Now Button */}
//             {/* <div>
//               <Link to="/cart-all-show" className="thm-btn main-menu__btn">
//                 <i className="fa fa-arrow-right"></i> Buy Now
//               </Link>
//             </div> */}

//             {/* Order Now Form */}
//             <form className="order-form" onSubmit={handleSubmit}>
//               <h3>Order Now</h3>

//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />

//               <label>Phone Number</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />

//               <label>Address</label>
//               <textarea
//                 name="address"
//                 placeholder="Enter your address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               ></textarea>

//               <button type="submit" className="submit-btn">
//                 SUBMIT
//               </button>
//             </form>
//           </div>

//           {/* Right Side - Order Summary */}
//           <div className="cart-right">
//             <h3>Order Total</h3>
//             <div className="summary-line">
//               <span>Subtotal:</span>
//               <span>{subtotal.toLocaleString()} ৳</span>
//             </div>
//             <div className="summary-total">
//               <span>Total:</span>
//               <strong>{subtotal.toLocaleString()} ৳</strong>
//             </div>
//             <p className="discount-text">Discount code or gift card</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }























// import React, { useState } from "react";
// import { FaTrashAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// // import "./BuyNow.css"; // Optional: Your custom styles

// export default function BuyNow() {
//   const [quantity, setQuantity] = useState(1);
//   const price = 2653;
//   const subtotal = price * quantity;

//   const increaseQty = () => setQuantity(quantity + 1);
//   const decreaseQty = () => quantity > 1 && setQuantity(quantity - 1);

//   return (
//     <div className="cart-page-container">
//       <div className="cart-wrapper">
//         <div className="cart-container">
//           {/* Left Side */}
//           <div className="cart-left">
//             <div className="cart-header-row">
//               <h6 className="product_name_field_min">Product</h6>
//               <h6 className="price_field_min">Price</h6>
//               <h6 className="quantity_field_min">Quantity</h6>
//               <h6>Subtotal</h6>
//               <h6>Stock Availability</h6>
//             </div>

//             {/* Product Row */}
//             <div className="cart-item">
//               <div className="cart-product-info product_name_field_min">
//                 <img
//                   src="../../src/assets/images/product_img/product_12_kg.jpg"
//                   alt="LPG Cylinder"
//                   className="product-image"
//                 />
//                 <span className="product_name">
//                   25 kg 22 mm LPG Refilled Cylinder
//                 </span>
//               </div>
//               <div className="cart-price price_field_max">
//                 {price.toLocaleString()} ৳
//               </div>

//               <div className="cart-qty quantity_field_max">
//                 <button onClick={decreaseQty}>-</button>
//                 <input type="text" value={quantity} readOnly />
//                 <button onClick={increaseQty}>+</button>
//               </div>

//               <div className="cart-subtotal">
//                 {subtotal.toLocaleString()} ৳
//               </div>
//               <div className="cart-stock">Available</div>
//               <div className="cart-delete">
//                 <FaTrashAlt />
//               </div>
//             </div>

//             {/* Buy Now Button */}
//             <div>
//               <Link to="/cart-all-show" className="thm-btn main-menu__btn">
//                 <i className="fa fa-arrow-right"></i> Buy Now
//               </Link>
//             </div>

            





//           </div>

//           {/* Right Side - Order Summary */}
//           <div className="cart-right">
//             <h3>Order Total</h3>
//             <div className="summary-line">
//               <span>Subtotal:</span>
//               <span>{subtotal.toLocaleString()} ৳</span>
//             </div>
//             <div className="summary-total">
//               <span>Total:</span>
//               <strong>{subtotal.toLocaleString()} ৳</strong>
//             </div>
//             <p className="discount-text">Discount code or gift card</p>
//           </div>
//         </div>
//       </div>

      







//     </div>





//   );
// }






































// import React from "react";
// import { Link } from "react-router-dom";
// // import "./BuyNow.css"; // for styling

// export default function BuyNow() {






//   return (

//     <div className="buy-now-page">
//       <h1>Buy Now Page</h1>
//       <p>This is where your product details will go.</p>

//       {/* Add to Cart Button */}
//       {/* <Link to="/cart-all-show" className="add-to-cart">
//         <i className="fa fa-arrow-right"></i> Add to Cart
//       </Link> */}

//     </div>
    




//   );
// }

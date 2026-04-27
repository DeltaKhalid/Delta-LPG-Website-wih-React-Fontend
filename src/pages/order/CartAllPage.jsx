import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import emptyCartImg from "../../assets/images/backgrounds/empty_cart.png";
import { createOrder } from "../../api/apiCall"; // ✅ import API function

export default function CartPage() {
  const { cartItems, setCartItems, removeFromCart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
``
  const [loading, setLoading] = useState(false);
  const [orderResponse, setOrderResponse] = useState(null);

  // Update quantity
  const handleQtyChange = (index, delta) => {
    const updatedCart = [...cartItems];
    const item = updatedCart[index];
    const newQty = item.quantity + delta;

    if (newQty > 0) {
      item.quantity = newQty;
      item.subtotal = item.price * newQty;
      setCartItems(updatedCart); // update context
    }
  };

  // Calculate totals
  const grandTotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare payload for API
    const orderPayload = {
      customer_name: formData.name,
      customer_phn: formData.phone,
      customer_add: formData.address,
      products: cartItems.map((item) => ({
        product_name: item.title, // cart uses "title"
        product_price: item.price.toString(), // ensure string like your API
        quantity: item.quantity,
      })),
    };

    try {
      const response = await createOrder(orderPayload); // ✅ API Call
      setOrderResponse(response);

      alert("Order submitted successfully!");
      clearCart(); // clear cart after success
      setFormData({ name: "", phone: "", address: "" });
    } catch (error) {
      console.error("Order creation failed:", error);
      alert("Failed to submit order!");
    } finally {
      setLoading(false);
    }
  };

  ///====================================== cart empty text with image ===================================== ///
  if (cartItems.length === 0) {
    return (
      <div
        className="cart-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <img
          src={emptyCartImg}
          alt="Empty Cart"
          style={{ width: "150px", marginBottom: "20px" }}
        />
        <h2>
          Your Cart is <span style={{ color: "red" }}>Empty!</span>
        </h2>
        <p>Must add items on the cart before you proceed to check out.</p>
        <Link
          to="/shop-now"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Go back to Shop
        </Link>
      </div>
    );
  }

  /// ===================================================== Return Area 
  return (
    <div className="cart-page-container">
      <div className="cart-wrapper">
        <div className="cart-wrapper_two">

          {/* -------------------------------------- Cart Left ------------------ */}
          <div className="cart-left">
            <div className="cart-header-row">
              <h6>Product</h6>
              <h6>Price</h6>
              <h6>Quantity</h6>
              <h6>Subtotal</h6>
              <h6>Stock</h6>
            </div>

            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-product-info">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <span>{item.title}</span>
                </div>
                <div>{item.price.toLocaleString()} ৳</div>

                <div className="cart-qty">
                  <button onClick={() => handleQtyChange(index, -1)}>-</button>
                  <input type="text" value={item.quantity} readOnly />
                  <button onClick={() => handleQtyChange(index, 1)}>+</button>
                </div>

                <div>{item.subtotal.toLocaleString()} ৳</div>
                <div>{item.stock || "Available"}</div>
                <div onClick={() => removeFromCart(item.title, item.price)}>
                  <FaTrashAlt />
                </div>
              </div>
            ))}

            {/* ---------------------------------- Submit Button -------------------------------------- */}
            <div className="">
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

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Submitting..." : "SUBMIT"}
                </button>
              </form>
            </div>

            {/* ✅ Show API Response (Optional) */}
            {orderResponse && (
              <div style={{ marginTop: "20px", padding: "10px", background: "#e0ffe0" }}>
                <h4>Server Response:</h4>
                <pre>{JSON.stringify(orderResponse, null, 2)}</pre>
              </div>
            )}
          </div>

          {/* ---------------------------------- Cart Right ----------------------------------------- */}
          <div className="cart-right">
            <h3>Order Summary</h3>
            <div>
              <span>Subtotal:</span>
              <span>{grandTotal.toLocaleString()} ৳</span>
            </div>
            <div>
              <strong>Total:</strong>
              <span>{grandTotal.toLocaleString()} ৳</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}



































// import React, { useState } from "react";
// import { useCart } from "../../context/CartContext";
// import { FaTrashAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import emptyCartImg from '../../assets/images/backgrounds/empty_cart.png'; // your uploaded image


// export default function CartPage() {
//   const { cartItems, setCartItems, removeFromCart, clearCart } = useCart();

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//   });

//   // Update quantity
//   const handleQtyChange = (index, delta) => {
//     const updatedCart = [...cartItems];
//     const item = updatedCart[index];
//     const newQty = item.quantity + delta;

//     if (newQty > 0) {
//       item.quantity = newQty;
//       item.subtotal = item.price * newQty;
//       setCartItems(updatedCart); // update context
//     }
//   };

//   // Calculate totals
//   const grandTotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Submit form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Order Submitted:", { ...formData, cartItems, grandTotal });
//     alert("Order submitted successfully!");
//     setFormData({ name: "", phone: "", address: "" });
//     clearCart(); // Optional: clear cart after submit
//   };

//   ///====================================== cart empty text with image ===================================== ///
//   if (cartItems.length === 0) {
//   return (

//     <div
//       className="cart-wrapper"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center", // vertical center
//         alignItems: "center",     // horizontal center
//         minHeight: "70vh",       // full height of screen
//         textAlign: "center",
//         padding: "20px",
//       }}
//     >
//       <img
//         src={emptyCartImg}
//         alt="Empty Cart"
//         style={{ width: "150px", marginBottom: "20px" }}
//       />
//       <h2>
//         Your Cart is <span style={{ color: "red" }}>Empty!</span>
//       </h2>
//       <p>Must add items on the cart before you proceed to check out.</p>
//       <Link
//         to="/shop-now"
//         style={{
//           display: "inline-block",
//           marginTop: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#007bff",
//           color: "#fff",
//           borderRadius: "5px",
//           textDecoration: "none",
//         }}
//       >
//         Go back to Shop
//       </Link>
//     </div>


//     // <div className="cart-wrapper" style={{ textAlign: "center", padding: "50px 20px" }}>
//     //   <img 
//     //     src={emptyCartImg} 
//     //     alt="Empty Cart" 
//     //     style={{ width: "150px", marginBottom: "20px" }} 
//     //   />
//     //   <h2>
//     //     Your Cart is <span style={{ color: "red" }}>Empty!</span>
//     //   </h2>
//     //   <p>Must add items on the cart before you proceed to check out.</p>
//     //   <Link 
//     //     to="/shop-now" 
//     //     style={{ 
//     //       display: "inline-block",
//     //       marginTop: "20px",
//     //       padding: "10px 20px",
//     //       backgroundColor: "#007bff",
//     //       color: "#fff",
//     //       borderRadius: "5px",
//     //       textDecoration: "none"
//     //     }}
//     //   >
//     //     Go back to Shop
//     //   </Link>
//     // </div>


//   );
// }

//   // if (cartItems.length === 0) {
//   //   return (
//   //     <div className="cart-wrapper ">
//   //       <div style={{ padding: "20px" }}>
//   //         <h2>Your cart is empty</h2>
//   //         <Link to="/shop-now">Go back to Shop</Link>
//   //       </div>
        
//   //     </div>

//   //   );
//   // }

//   /// ===================================================== Return Area 
//   return (
//     <div className="cart-page-container">
//       <div className="cart-wrapper">
//         <div className="cart-wrapper_two">

//           {/* -------------------------------------- Cart Left ------------------ */}
//           <div className="cart-left">
            
//             <div className="cart-header-row">
//               <h6>Product</h6>
//               <h6>Price</h6>
//               <h6>Quantity</h6>
//               <h6>Subtotal</h6>
//               <h6>Stock</h6>
//             </div>

//             {cartItems.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <div className="cart-product-info">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     style={{ width: "80px", height: "80px", objectFit: "cover" }}
//                   />
//                   <span>{item.title}</span>
//                 </div>
//                 <div>{item.price.toLocaleString()} ৳</div>

//                 <div className="cart-qty">
//                   <button onClick={() => handleQtyChange(index, -1)}>-</button>
//                   <input type="text" value={item.quantity} readOnly />
//                   <button onClick={() => handleQtyChange(index, 1)}>+</button>
//                 </div>

//                 <div>{item.subtotal.toLocaleString()} ৳</div>
//                 <div>{item.stock || "Available"}</div>
//                 <div onClick={() => removeFromCart(item.title, item.price)}>
//                   <FaTrashAlt />
//                 </div>
//               </div>
//             ))}





//             {/* ---------------------------------- Submit Button -------------------------------------- */}
//             <div className="">
//               {/* <h1> Submit Form. </h1> */}

//               {/* ✅ Order Form from BuyNow */}
//               <form className="order-form" onSubmit={handleSubmit}>
//                 <h3>Order Now</h3>

//                 <label>Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />

//                 <label>Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Enter your phone number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />

//                 <label>Address</label>
//                 <textarea
//                   name="address"
//                   placeholder="Enter your address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 ></textarea>

//                 <button type="submit" className="submit-btn">
//                   SUBMIT
//                 </button>
//               </form>
//             </div>
//           </div>

//             {/* ---------------------------------- Cart Right ----------------------------------------- */}
//             <div className="cart-right">
//               <h3>Order Summary</h3>
//               <div>
//                 <span>Subtotal:</span>
//                 <span>{grandTotal.toLocaleString()} ৳</span>
//               </div>
//               <div>
//                 <strong>Total:</strong>
//                 <span>{grandTotal.toLocaleString()} ৳</span>
//               </div>
//            </div>


//         </div>
//       </div>
//     </div>
//   );
// }


































// File: src/pages/cart/CartAllPage.jsx
// import React from "react";
// import { useCart } from "../../context/CartContext";
// import { FaTrashAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function CartPage() {
//   const { cartItems, setCartItems, removeFromCart, clearCart } = useCart();

//   // Update quantity
//   const handleQtyChange = (index, delta) => {
//     const updatedCart = [...cartItems];
//     const item = updatedCart[index];
//     const newQty = item.quantity + delta;

//     if (newQty > 0) {
//       item.quantity = newQty;
//       item.subtotal = item.price * newQty;
//       setCartItems(updatedCart); // update context
//     }
//   };

//   const grandTotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

//   if (cartItems.length === 0) {
//     return (
//       <div style={{ padding: "20px" }}>
//         <h2>Your cart is empty</h2>
//         <Link to="/shop-now">Go back to Shop</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-page-container">
//       <div className="cart-wrapper">
//         <div className="cart-container">
//           <div className="cart-left">
//             <div className="cart-header-row">
//               <h6>Product</h6>
//               <h6>Price</h6>
//               <h6>Quantity</h6>
//               <h6>Subtotal</h6>
//               <h6>Stock</h6>
//             </div>

//             {cartItems.map((item, index) => (
            
              

//               <div key={index} className="cart-item">
//                 {
//                   console.log('item quantity total 2:', cartItems.quantity)
//                 }
//                 <div className="cart-product-info">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     style={{ width: "80px", height: "80px", objectFit: "cover" }}
//                   />
//                   <span>{item.title}</span>
//                 </div>
//                 <div>{item.price.toLocaleString()} ৳</div>

//                 <div className="cart-qty">
//                   <button onClick={() => handleQtyChange(index, -1)}>-</button>
//                   {
//                   console.log('item quantity total 2:', item.quantity)
//                 }
//                   <input type="text" value={item.quantity} readOnly />

//                   <button onClick={() => handleQtyChange(index, 1)}>+</button>
//                 </div>

//                 <div>{item.subtotal.toLocaleString()} ৳</div>
//                 <div>{item.stock || "Available"}</div>
//                 <div onClick={() => removeFromCart(item.title, item.price)}>
//                   <FaTrashAlt />
//                 </div>
//               </div>
//             ))}

//             <div className="cart-actions">
//               {/* <button onClick={clearCart}>🗑️ Clear Cart</button>
//               <Link to="/shop-now">
//                 <button>← Continue Shopping</button>
//               </Link> */}

//               <h1> Submit Form. </h1>


//             </div>

//           </div>

//           <div className="cart-right">
//             <h3>Order Summary</h3>
//             <div>
//               <span>Subtotal:</span>
//               <span>{grandTotal.toLocaleString()} ৳</span>
//             </div>
//             <div>
//               <strong>Total:</strong>
//               <span>{grandTotal.toLocaleString()} ৳</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



































// import React, { useState, useEffect } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { FaTrashAlt } from "react-icons/fa";

// // import { useCart } from '../../context/CartContext';
// import { useCart } from "../../context/CartContext";



// export default function CartPage() {


//   // ---------------- code for Context API 
//   const { cartItems, setCartItems, removeFromCart, clearCart } = useCart();

//   const handleQtyChange = (index, change) => {
//     const updatedCart = [...cartItems];
//     const item = updatedCart[index];
//     const newQty = item.quantity + change;

//     if (newQty > 0) {
//       updatedCart[index] = {
//         ...item,
//         quantity: newQty,
//         subtotal: newQty * item.price,
//       };
//       setCartItems(updatedCart);
//     }
//   };

//   const handleDelete = (index) => {
//     removeFromCart(cartItems[index].title);
//   };

//   const grandTotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

//   if (cartItems.length === 0) {
//     return (
//       <div style={{ padding: "20px" }}>
//         <h2>Your cart is empty</h2>
//         <Link to="/shop-now">Go back to Shop</Link>
//       </div>
//     );
//   }





  

//   // const location = useLocation();
//   // const productFromState = location.state?.product;

//   // const [cartItems, setCartItems] = useState([]);

//   // useEffect(() => {
//   //   if (productFromState) {
//   //     setCartItems([productFromState]); // support multiple products later
//   //   }
//   // }, [productFromState]);

//   // const handleQtyChange = (index, change) => {
//   //   const updatedCart = [...cartItems];
//   //   const item = updatedCart[index];
//   //   const newQty = item.quantity + change;

//   //   if (newQty > 0) {
//   //     updatedCart[index] = {
//   //       ...item,
//   //       quantity: newQty,
//   //       subtotal: newQty * item.price,
//   //     };
//   //     setCartItems(updatedCart);
//   //   }
//   // };

//   // const handleDelete = (index) => {
//   //   const updatedCart = cartItems.filter((_, i) => i !== index);
//   //   setCartItems(updatedCart);
//   // };

//   // const clearCart = () => setCartItems([]);

//   // const grandTotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

//   // if (cartItems.length === 0) {
//   //   return (
//   //     <div style={{ padding: "20px" }}>
//   //       <h2>Your cart is empty</h2>
//   //       <Link to="/shop-now">Go back to Shop</Link>
//   //     </div>
//   //   );
//   // }









//   // =============================================== Main Return Area =========================== ///
//   return (
//     <div className="cart-page-container">
//       <div className="cart-wrapper">
//         <div className="cart-container">
//           {/* ---- Left Side ---- */}
//           <div className="cart-left">
//             <div className="cart-header-row">
//               <h6 className="product_name_field_min">Product</h6>
//               <h6 className="price_field_min">Price</h6>
//               <h6 className="quantity_field_min">Quantity</h6>
//               <h6>Subtotal</h6>
//               <h6>Stock Availability</h6>
//             </div>

//             {/* ---- Cart Items ---- */}
//             {cartItems.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <div className="cart-product-info product_name_field_min">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="product-image"
//                     style={{ width: "80px", height: "80px", objectFit: "cover" }}
//                   />
//                   <span className="product_name">{item.title}</span>
//                 </div>
//                 <div className="cart-price price_field_max">
//                   {item.price.toLocaleString()} ৳
//                 </div>

//                 <div className="cart-qty quantity_field_max">
//                   <button onClick={() => handleQtyChange(index, -1)}>-</button>
//                   <input type="text" value={item.quantity} readOnly />
//                   <button onClick={() => handleQtyChange(index, +1)}>+</button>
//                 </div>

//                 <div className="cart-subtotal">
//                   {item.subtotal.toLocaleString()} ৳
//                 </div>
//                 <div className="cart-stock">{item.stock || "Available"}</div>
//                 <div className="cart-delete" onClick={() => handleDelete(index)}>
//                   <FaTrashAlt />
//                 </div>
//               </div>
//             ))}

//             {/* Cart Actions */}
//             <div className="cart-actions">
//               <button className="clear-cart" onClick={clearCart}>
//                 🗑️ Clear Cart
//               </button>
//               <Link to="/shop-now">
//                 <button className="continue-btn">← Continue Shopping</button>
//               </Link>
//               <button className="sign-in-btn">Sign In 🔐</button>
//             </div>
//           </div>

//           {/* ---- Right Side Summary ---- */}
//           <div className="cart-right">
//             <h3>Order Summary</h3>
//             <div className="summary-line">
//               <span>Subtotal:</span>
//               <span>{grandTotal.toLocaleString()} ৳</span>
//             </div>
//             <div className="summary-total">
//               <span>Total:</span>
//               <strong>{grandTotal.toLocaleString()} ৳</strong>
//             </div>
//             <p className="discount-text">Discount code or gift card</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






























// import React, { useState } from "react";
// import { FaTrashAlt, FaSignInAlt } from "react-icons/fa";
// import { Link } from 'react-router-dom';

// const CartAllPage = () => {
//   const [quantity, setQuantity] = useState(7);
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
//         <div className="">
//           <div className="cart-container">
//             {/* Left Side */}
//             <div className="cart-left">
//               <div className="cart-header-row">
//                 <h6 className="product_name_field_min">Product</h6>
//                 <h6 className="price_field_min">Price</h6>
//                 <h6 className="quantity_field_min">Quantity</h6>
//                 <h6>Subtotal</h6>
//                 <h6>Stock Availability</h6>
//               </div>

//               {/* Product Row */}
//               <div className="cart-item">
//                 <div className="cart-product-info product_name_field_min">
//                   <img
//                     src="../../src/assets/images/product_img/product_12_kg.jpg"
//                     alt="LPG Cylinder"
//                     className="product-image"
//                   />
//                   <span className="product_name">
//                     25 kg 22 mm LPG Refilled cylinder
//                   </span>
//                 </div>
//                 <div className="cart-price price_field_max">
//                   {price.toLocaleString()} ৳
//                 </div>

//                 <div className="cart-qty quantity_field_max">
//                   <button onClick={decreaseQty}>-</button>
//                   <input type="text" value={quantity} readOnly />
//                   <button onClick={increaseQty}>+</button>
//                 </div>

//                 <div className="cart-subtotal">
//                   {subtotal.toLocaleString()} ৳
//                 </div>
//                 <div className="cart-stock">Available</div>
//                 <div className="cart-delete">
//                   <FaTrashAlt />
//                 </div>
//               </div>

//               {/* Buy Now Button */}
//               {/* <button className="thm-btn main-menu__btn fa fa-arrow-right">
//                 <Link to="/buy-now">
//                   <i className="fa fa-arrow-right"></i> Buy Now
//                 </Link>
//               </button> */}

//               {/* Order Form */}
//               <form className="order-form" onSubmit={handleSubmit}>
//                 <h3>Order Now</h3>

//                 <label>Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />

//                 <label>Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Enter your phone number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />

//                 <label>Address</label>
//                 <textarea
//                   name="address"
//                   placeholder="Enter your address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 ></textarea>

//                 <button type="submit" className="submit-btn">
//                   SUBMIT
//                 </button>
//               </form>
//             </div>

//             {/* Right Side - Order Summary */}
//             <div className="cart-right">
//               <h3>Order Total</h3>
//               <div className="summary-line">
//                 <span>Subtotal:</span>
//                 <span>{subtotal.toLocaleString()} ৳</span>
//               </div>
//               <div className="summary-total">
//                 <span>Total:</span>
//                 <strong>{subtotal.toLocaleString()} ৳</strong>
//               </div>
//               <p className="discount-text">Discount code or gift card</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartAllPage;






























// import React, { useState } from "react";
// // import "./CartAllPage.css";
// import { FaTrashAlt, FaSignInAlt } from "react-icons/fa";
// import { Link, useLocation } from 'react-router-dom'

// const CartAllPage = () => {
//   const [quantity, setQuantity] = useState(7);

//   const price = 2653;
//   const subtotal = price * quantity;

//   const increaseQty = () => setQuantity(quantity + 1);
//   const decreaseQty = () => quantity > 1 && setQuantity(quantity - 1);
  

//   return (

//     <div className="cart-page-container">
//         <div className="cart-wrapper">


//      <div className="">
//       {/* Top Progress Bar */}
//       {/* <div className="cart-steps">
//         <span>Review Order</span>
//         <span className="active">Address</span>
//         <span>Confirm Order</span>
//       </div> */}

//       <div className="cart-container">
//         {/* Left Side */}
//         <div className="cart-left">
//           <div className="cart-header-row">
//             <h6 className="product_name_field_min">Product</h6>
//             <h6 className="price_field_min">Price</h6>
//             <h6 className="quantity_field_min">Quantity</h6>
//             <h6>Subtotal</h6>
//             <h6>Stock Availability</h6>
//           </div>

//           {/* Product Row */}
//           <div className="cart-item">
//             <div className="cart-product-info product_name_field_min">
//               <img
//                 src="../../src/assets/images/product_img/product_12_kg.jpg"
//                 alt="LPG Cylinder"
//                 className="product-image"
//               />
//               <span className="product_name" >25 kg 22 mm LPG Refilled cylinder</span>
//             </div>
//             <div className="cart-price price_field_max">{price.toLocaleString()} ৳</div>

//             <div className="cart-qty quantity_field_max">
//               <button onClick={decreaseQty}>-</button>
//               <input type="text" value={quantity} readOnly />
//               <button onClick={increaseQty}>+</button>
//             </div>

//             <div className="cart-subtotal">{subtotal.toLocaleString()} ৳</div>
//             <div className="cart-stock">Available</div>
//             <div className="cart-delete">
//               <FaTrashAlt />
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="">
//             {/* <button className="continue-btn">← Continue Shopping</button> */}
//             {/* <button className="signin-btn">
//               Sign In <FaSignInAlt />
//             </button> */}
//             {/* <button className="thm-btn main-menu__btn fa fa-arrow-right">Buy Now</button> */}

                
            
//             <button className="thm-btn main-menu__btn fa fa-arrow-right">
//                 <Link to="/buy-now" className="">
//                     <i className="fa fa-arrow-right"></i> Buy Now
//                   </Link>
//             </button>

//             <div>
//                 <h1> Customer Purchase Form. </h1>
//             </div>

//           </div>

//         </div>

//         {/* Right Side - Order Summary */}
//         <div className="cart-right">
//           <h3>Order Total</h3>
//           <div className="summary-line">
//             <span>Subtotal:</span>
//             <span>{subtotal.toLocaleString()} ৳</span>
//           </div>
//           <div className="summary-total">
//             <span>Total:</span>
//             <strong>{subtotal.toLocaleString()} ৳</strong>
//           </div>
//           <p className="discount-text">Discount code or gift card</p>
//         </div>
//       </div>
//      </div>



//         </div>
//     </div>


//   );
// };

// export default CartAllPage;















// import React from 'react';

// const CartAllPage = () => {
//     return (
//         <div>
//             <h1> All Cart Show page. </h1>
//         </div>
//     );
// };

// export default CartAllPage;
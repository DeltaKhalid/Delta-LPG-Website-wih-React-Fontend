import React, { useState, useEffect } from 'react';
// import './ProductModal.css'; // Create and style this CSS file based on the image
import { Link } from "react-router-dom";

const PopupModal = ({ show, onClose, product }) => {
    const [selectedType, setSelectedType] = useState('refill');
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        if (product) {
            setMainImage(product.image);
        }
    }, [product]);

    if (!show || !product) {
        return null;
    }

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const handleThumbnailClick = (imagePath) => {
        setMainImage(imagePath);
    };

    // Assuming the "New" option adds 2000 to the base price
    const newPrice = selectedType === 'new' ? product.price + 2000 : product.price;
    // const unitPrice = selectedType === 'new' ? product.price + 2000 : product.price;
    const totalPrice = newPrice * quantity;


    return (
        <div className="popup-overlay">
            <div className="popup-modal">


                {/* <div className="popup-header">
                    <h2>{product.title}</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div> */}


                <div className="popup-content">

                    {/* Left side: Images */}
                    <div className="image-section">
                        <img src={mainImage} alt={product.title} className="main-image" />
                        <div className="thumbnail-container">
                            <img
                                src={product.image}
                                alt="Thumbnail 1"
                                className={`thumbnail ${mainImage === product.image ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(product.image)}
                            />
                            {/* Assuming a second thumbnail exists */}
                            {product.thumbnail2 && (
                                <img
                                    src={product.thumbnail2}
                                    alt="Thumbnail 2"
                                    className={`thumbnail ${mainImage === product.thumbnail2 ? 'active' : ''}`}
                                    onClick={() => handleThumbnailClick(product.thumbnail2)}
                                />
                            )}
                        </div>
                    </div>

                    {/* Right side: Details */}
                    <div className="details-section">

                        <div className="popup-header">
                            <h2>{product.title}</h2>
                            <button className="close-btn" onClick={onClose}>×</button>
                            
                        </div>





                        <div className="price-info">
                            <span className="price">{newPrice.toLocaleString()} ৳ </span>
                        </div>



                        <div className="product-options">
                            <label className="option-label">Type</label>
                            <div className="option-buttons">
                                <button
                                    className={`option-button ${selectedType === 'refill' ? 'active' : ''}`}
                                    onClick={() => setSelectedType('refill')}
                                >
                                    Refill
                                </button>
                                <button
                                    className={`option-button ${selectedType === 'new' ? 'active' : ''}`}
                                    onClick={() => setSelectedType('new')}
                                >
                                    {/* New <span>+ 2,000.00 ৳</span> */}
                                    New <span> {totalPrice} ৳</span>
                                </button>
                            </div>
                        </div>
                        <p className="vat-info">** Price is for LPG ONLY (VAT Inclusive) **</p>
                        <div className="stock-status">
                            <span className="in-stock">✔ In Stock</span>
                        </div>
                        <div className="quantity-selector">
                            <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</button>
                            <input type="text" value={quantity} readOnly className="quantity-input" />
                            <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <div className="action-buttons">

                            {/* <button className="add-to-cart">Add to Cart</button> */}
                            <Link to="/cart-all-show">
                                <button className="add-to-cart">Add to Cart</button>
                            </Link>

                            {/* <button className="buy-now"></button> */}
                            <Link to="/buy-now">
                                <button className="buy-now">Buy Now</button>
                            </Link>




                        </div>
                        <a href="#" className="view-details-link">View full details →</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopupModal;



















// import React from 'react';

// const PopupModal = ({ show, onClose }) => {
//   if (!show) return null;

//   return (



//     <div className="popup-overlay">
//       <div className="popup-modal">
//         <button className="close-btn" onClick={onClose}>✕</button>
//         <h2>Order Now</h2>
//         <p>Thank you for your interest! Our team will contact you shortly.</p>
//         <button onClick={onClose} className="close-btn">Close</button>
//       </div>
//     </div>




//   );
// };

// export default PopupModal;




// --------------------------------------------------------- Old Code --------------------------------------------- //


// import React from 'react';
// // import './ProductModal.css';

// const ProductModal = ({ product, onClose }) => {
//   if (!product) return null;

//   return (

//     <div className="modal-overlay">
//       <div className="modal">
//         <button className="close-btn" onClick={onClose}>✕</button>
//         <div className="modal-content">
//           <div className="modal-left">
//             <img src={product.image} alt={product.title} className="modal-img" />
//             <div className="thumbs">
//               <img src={product.image} alt="thumb1" className="thumb" />
//               <img src={product.image} alt="thumb2" className="thumb" />
//             </div>
//           </div>
//           <div className="modal-right">
//             <h2>{product.title}</h2>
//             <p className="price">{product.price.toLocaleString()} ৳</p>
//             <label>Type:</label>
//             <div className="type-buttons">
//               <button className="active">Refill</button>
//               <button>New <small>+ 2,000.00 ৳</small></button>
//             </div>
//             <p className="vat-note">** Price is for LPG ONLY (VAT Inclusive) **</p>
//             <p className="stock"><span>✔</span> In Stock</p>
//             <div className="qty-row">
//               <button>-</button>
//               <span>1</span>
//               <button>+</button>
//             </div>
//             <div className="action-buttons">
//               <button className="add-cart">🛒 Add to Cart</button>
//               <button className="buy-now">⚡ Buy Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default ProductModal;

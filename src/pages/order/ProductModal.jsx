import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Urls from '../../constants/urls';

const PopupModal = ({ show, onClose, product }) => {
    // ===== All hooks must be at the top =====
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const [selectedType, setSelectedType] = useState('refill');
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState('');

    // Reset modal data when product changes
useEffect(() => {
    if (product) {
        setMainImage(`${Urls.baseUrl}${product.product_image}`);
        setQuantity(1);   // ✅ Always start from 1
        setSelectedType('refill');
    }
}, [product]);


    // useEffect(() => {
    //     if (product) {
    //         setMainImage(`${Urls.baseUrl}${product.product_image}`);
    //         setQuantity(1);
    //         setSelectedType('refill');
    //     }
    // }, [product, show]);

    // ===== Early return if modal is hidden =====
    if (!show || !product) return null;

    const basePrice = Number(product.product_price) || 0;
    const newPrice = selectedType === 'new' ? basePrice + 2000 : basePrice;
    const totalPrice = newPrice * quantity;

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const handleThumbnailClick = (imagePath) => {
        setMainImage(imagePath);
    };

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-modal" onClick={e => e.stopPropagation()}>
                <div className="popup-content">

                    {/* ===== Left: Images ===== */}
                    <div className="image-section">
                        <img src={mainImage} alt={product.product_name} className="main-image" />
                        <div className="thumbnail-container">
                            <img
                                src={`${Urls.baseUrl}${product.product_image}`}
                                alt="Thumbnail 1"
                                className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image}` ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image}`)}
                            />
                            {product.product_image_2 && (
                                <img
                                    src={`${Urls.baseUrl}${product.product_image_2}`}
                                    alt="Thumbnail 2"
                                    className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image_2}` ? 'active' : ''}`}
                                    onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image_2}`)}
                                />
                            )}
                            {product.product_image_3 && (
                                <img
                                    src={`${Urls.baseUrl}${product.product_image_3}`}
                                    alt="Thumbnail 3"
                                    className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image_3}` ? 'active' : ''}`}
                                    onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image_3}`)}
                                />
                            )}
                            {product.product_image_4 && (
                                <img
                                    src={`${Urls.baseUrl}${product.product_image_4}`}
                                    alt="Thumbnail 4"
                                    className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image_4}` ? 'active' : ''}`}
                                    onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image_4}`)}
                                />
                            )}
                        </div>
                    </div>

                    {/* ===== Right: Details ===== */}
                    <div className="details-section">
                        <div className="popup-header">
                            <h2>{product.product_name}</h2>
                            <button className="close-btn" onClick={onClose}>×</button>
                        </div>

                        <div className="price-info">
                            <span className="price">{newPrice.toLocaleString()} ৳</span>
                            <div className="total-price">
                                Total: {totalPrice.toLocaleString()} ৳
                            </div>
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
                                    New <span>+ 2,000 ৳</span>
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

                            {/* {
                                console.log('Total product quantity:', quantity)
                            } */}
                            
                            <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
                        </div>

                        <div className="action-buttons">
                            {/* ===== Add To Cart ===== */}
                            <button
                                className="add-to-cart"
                                onClick={() => {
                                    addToCart({
                                        title: product.product_name,
                                        price: newPrice,
                                        image: mainImage,
                                        quantity: quantity,
                                        subtotal: totalPrice,
                                        stock: "Available",
                                    });
                                    onClose();
                                    navigate('/cart-all-show');
                                }}
                            >
                                Add to Cart
                                {
                                    console.log('Total product quantity:', quantity)
                                }
                            </button>

                            {/* ===== Buy Now ===== */}
                            <button
                                className="buy-now"
                                onClick={() => {
                                    addToCart({
                                        title: product.product_name,
                                        price: newPrice,
                                        image: mainImage,
                                        quantity: quantity,
                                        subtotal: totalPrice,
                                        stock: "Available",
                                    });
                                    onClose();
                                    navigate('/buy-now');
                                }}
                            >
                                Buy Now
                            </button>
                        </div>

                        <a href="#" className="view-details-link">View full details →</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopupModal;


































// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import Urls from '../../constants/urls';   // make sure to import this for baseUrl

// import { useCart } from '../../context/CartContext';
// import { useNavigate } from 'react-router-dom';




// const PopupModal = ({ show, onClose, product }) => {
//     const [selectedType, setSelectedType] = useState('refill');
//     const [quantity, setQuantity] = useState(1);
//     const [mainImage, setMainImage] = useState('');

//     useEffect(() => {
//     if (product) {
//         setMainImage(`${Urls.baseUrl}${product.product_image}`);
//         setQuantity(1); // reset quantity to 1 when popup opens
//         setSelectedType('refill'); // optional: reset type to default too
//     }
// }, [product, show]);


//     if (!show || !product) {
//         return null;
//     }

//     const handleQuantityChange = (delta) => {
//         setQuantity(prev => Math.max(1, prev + delta));
//     };

//     const handleThumbnailClick = (imagePath) => {
//         setMainImage(imagePath);
//     };

//     // Assuming "New" option adds 2000 to base price
//     const basePrice = Number(product.product_price) || 0;
//     const newPrice = selectedType === 'new' ? basePrice + 2000 : basePrice;
//     // Multiply by quantity
//     const totalPrice = newPrice * quantity;


//     // const newPrice = selectedType === 'new' ? product.product_price + 2000 : product.product_price;
//     // const totalPrice = newPrice * quantity;

//     // Inside component
//     const { addToCart } = useCart();
//     const navigate = useNavigate();

//     return (
//         <div className="popup-overlay">
//             <div className="popup-modal">

//                 <div className="popup-content">

//                     {/* Left side: Images */}
//                     {/* Left side: Images */}
//                     <div className="image-section">
//                         <img src={mainImage} alt={product.product_name} className="main-image" />
//                         <div className="thumbnail-container">
//                             {/* Always render main product_image */}
//                             <img
//                                 src={`${Urls.baseUrl}${product.product_image}`}
//                                 alt="Thumbnail 1"
//                                 className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image}` ? 'active' : ''}`}
//                                 onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image}`)}
//                             />

//                             {/* Optional thumbnails if available */}
//                             {product.product_image_2 && (
//                                 <img
//                                     src={`${Urls.baseUrl}${product.product_image_2}`}
//                                     alt="Thumbnail 2"
//                                     className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image_2}` ? 'active' : ''}`}
//                                     onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image_2}`)}
//                                 />
//                             )}
//                             {product.product_image_3 && (
//                                 <img
//                                     src={`${Urls.baseUrl}${product.product_image_3}`}
//                                     alt="Thumbnail 3"
//                                     className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image_3}` ? 'active' : ''}`}
//                                     onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image_3}`)}
//                                 />
//                             )}
//                             {product.product_image_4 && (
//                                 <img
//                                     src={`${Urls.baseUrl}${product.product_image_4}`}
//                                     alt="Thumbnail 4"
//                                     className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image_4}` ? 'active' : ''}`}
//                                     onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image_4}`)}
//                                 />
//                             )}
//                         </div>
//                     </div>

//                     {/* Right side: Details */}
//                     <div className="details-section">

//                         <div className="popup-header">
//                             <h2>{product.product_name}</h2>
//                             <button className="close-btn" onClick={onClose}>×</button>
//                         </div>

//                         <div className="price-info">
//                             <span className="price">{newPrice.toLocaleString()} ৳ </span>
//                         </div>

//                         <div className="product-options">
//                             <label className="option-label">Type</label>
//                             <div className="option-buttons">
//                                 <button
//                                     className={`option-button ${selectedType === 'refill' ? 'active' : ''}`}
//                                     onClick={() => setSelectedType('refill')}
//                                 >
//                                     Refill
//                                 </button>
//                                 <button
//                                     className={`option-button ${selectedType === 'new' ? 'active' : ''}`}
//                                     onClick={() => setSelectedType('new')}
//                                 >
//                                     New <span>+ 2,000 ৳</span>
//                                 </button>
//                             </div>
//                         </div>

//                         <p className="vat-info">** Price is for LPG ONLY (VAT Inclusive) **</p>
//                         <div className="stock-status">
//                             <span className="in-stock">✔ In Stock</span>
//                         </div>

//                         <div className="quantity-selector">
//                             <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</button>
//                             <input type="text" value={quantity} readOnly className="quantity-input" />
//                             <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
//                         </div>

//                         <div className="action-buttons">

//                             {/* --- Add To Cart --- */}
//                             {/* // Add to Cart button */}
//                             <button
//                             className="add-to-cart"
//                             onClick={() => {
//                                 // Add product to context
//                                     addToCart({
//                                     title: product.product_name,
//                                     price: newPrice,
//                                     image: mainImage,
//                                     quantity: quantity,
//                                     subtotal: totalPrice,
//                                     stock: "Available",
//                                     });

//                                     // Close modal
//                                     onClose();

//                                     // Navigate to cart page
//                                     navigate('/cart-all-show');
//                                 }}
//                                 >
//                                 Add to Cart
//                             </button>


//                             {/* <Link
//                                 to="/cart-all-show"
//                                 state={{
//                                     product: {
//                                     title: product.product_name,
//                                     price: newPrice,
//                                     image: mainImage,
//                                     quantity: quantity,
//                                     subtotal: newPrice * quantity,
//                                     stock: "Available"
//                                     }
//                                 }}
//                                 >
//                                 <button className="add-to-cart">Add to Cart</button>
//                             </Link> */}

//                             {/* --- Buy Now Button --- */}
//                             <Link
//                                 to="/buy-now"
//                                 state={{
//                                     product: {
//                                         title: product.product_name,
//                                         price: newPrice,
//                                         image: mainImage,
//                                         quantity: quantity
//                                     }
//                                 }}
//                             >
//                                 <button className="buy-now">Buy Now</button>
//                             </Link>


//                         </div>

//                         <a href="#" className="view-details-link">View full details →</a>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PopupModal;






































// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import Urls from '../../constants/urls';   // make sure to import this for baseUrl

// const PopupModal = ({ show, onClose, product }) => {
//     const [selectedType, setSelectedType] = useState('refill');
//     const [quantity, setQuantity] = useState(1);
//     const [mainImage, setMainImage] = useState('');

//     useEffect(() => {
//     if (product) {
//         setMainImage(`${Urls.baseUrl}${product.product_image}`);
//         setQuantity(1); // reset quantity to 1 when popup opens
//         setSelectedType('refill'); // optional: reset type to default too
//     }
// }, [product, show]);

//     // useEffect(() => {
//     //     if (product) {
//     //         // Set main image from product_image (full URL)
//     //         setMainImage(`${Urls.baseUrl}${product.product_image}`);
//     //     }
//     // }, [product]);




//     if (!show || !product) {
//         return null;
//     }

//     const handleQuantityChange = (delta) => {
//         setQuantity(prev => Math.max(1, prev + delta));
//     };

//     const handleThumbnailClick = (imagePath) => {
//         setMainImage(imagePath);
//     };

//     // Assuming "New" option adds 2000 to base price
//     const basePrice = Number(product.product_price) || 0;
//     const newPrice = selectedType === 'new' ? basePrice + 2000 : basePrice;
//     // Multiply by quantity
//     const totalPrice = newPrice * quantity;


//     // const newPrice = selectedType === 'new' ? product.product_price + 2000 : product.product_price;
//     // const totalPrice = newPrice * quantity;

//     return (
//         <div className="popup-overlay">
//             <div className="popup-modal">

//                 <div className="popup-content">

//                     {/* Left side: Images */}
//                     {/* Left side: Images */}
//                     <div className="image-section">
//                         <img src={mainImage} alt={product.product_name} className="main-image" />
//                         <div className="thumbnail-container">
//                             {/* Always render main product_image */}
//                             <img
//                                 src={`${Urls.baseUrl}${product.product_image}`}
//                                 alt="Thumbnail 1"
//                                 className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image}` ? 'active' : ''}`}
//                                 onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image}`)}
//                             />

//                             {/* Optional thumbnails if available */}
//                             {product.product_image_2 && (
//                                 <img
//                                     src={`${Urls.baseUrl}${product.product_image_2}`}
//                                     alt="Thumbnail 2"
//                                     className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image_2}` ? 'active' : ''}`}
//                                     onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image_2}`)}
//                                 />
//                             )}
//                             {product.product_image_3 && (
//                                 <img
//                                     src={`${Urls.baseUrl}${product.product_image_3}`}
//                                     alt="Thumbnail 3"
//                                     className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image_3}` ? 'active' : ''}`}
//                                     onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image_3}`)}
//                                 />
//                             )}
//                             {product.product_image_4 && (
//                                 <img
//                                     src={`${Urls.baseUrl}${product.product_image_4}`}
//                                     alt="Thumbnail 4"
//                                     className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image_4}` ? 'active' : ''}`}
//                                     onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image_4}`)}
//                                 />
//                             )}
//                         </div>
//                     </div>






//                     {/* <div className="image-section">
//                         <img src={mainImage} alt={product.product_name} className="main-image" />
//                         <div className="thumbnail-container">
//                             <img
//                                 src={`${Urls.baseUrl}${product.product_image}`}
//                                 alt="Thumbnail 1"
//                                 className={`thumbnail ${mainImage === `${Urls.baseUrl}${product.product_image}` ? 'active' : ''}`}
//                                 onClick={() => handleThumbnailClick(`${Urls.baseUrl}${product.product_image}`)}
//                             />
//                         </div>
//                     </div> */}






//                     {/* Right side: Details */}
//                     <div className="details-section">

//                         <div className="popup-header">
//                             <h2>{product.product_name}</h2>
//                             <button className="close-btn" onClick={onClose}>×</button>
//                         </div>

//                         <div className="price-info">
//                             <span className="price">{newPrice.toLocaleString()} ৳ </span>
//                         </div>

//                         <div className="product-options">
//                             <label className="option-label">Type</label>
//                             <div className="option-buttons">
//                                 <button
//                                     className={`option-button ${selectedType === 'refill' ? 'active' : ''}`}
//                                     onClick={() => setSelectedType('refill')}
//                                 >
//                                     Refill
//                                 </button>
//                                 <button
//                                     className={`option-button ${selectedType === 'new' ? 'active' : ''}`}
//                                     onClick={() => setSelectedType('new')}
//                                 >
//                                     New <span>+ 2,000 ৳</span>
//                                 </button>
//                             </div>
//                         </div>

//                         <p className="vat-info">** Price is for LPG ONLY (VAT Inclusive) **</p>
//                         <div className="stock-status">
//                             <span className="in-stock">✔ In Stock</span>
//                         </div>

//                         <div className="quantity-selector">
//                             <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</button>
//                             <input type="text" value={quantity} readOnly className="quantity-input" />
//                             <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
//                         </div>

//                         <div className="action-buttons">

//                             {/* --- Add To Cart --- */}
//                             <Link
//                                 to="/cart-all-show"
//                                 state={{
//                                     product: {
//                                     title: product.product_name,
//                                     price: newPrice,
//                                     image: mainImage,
//                                     quantity: quantity,
//                                     subtotal: newPrice * quantity,
//                                     stock: "Available"
//                                     }
//                                 }}
//                                 >
//                                 <button className="add-to-cart">Add to Cart</button>
//                             </Link>


//                             {/* <Link to="/cart-all-show">
//                                 <button className="add-to-cart">Add to Cart</button>
//                             </Link> */}


//                             {/* --- Buy Now Button --- */}
//                             <Link
//                                 to="/buy-now"
//                                 state={{
//                                     product: {
//                                         title: product.product_name,
//                                         price: newPrice,
//                                         image: mainImage,
//                                         quantity: quantity
//                                     }
//                                 }}
//                             >
//                                 <button className="buy-now">Buy Now</button>
//                             </Link>


//                         </div>

//                         <a href="#" className="view-details-link">View full details →</a>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PopupModal;
































// import React, { useState, useEffect } from 'react';
// // import './ProductModal.css'; // Create and style this CSS file based on the image
// import { Link } from "react-router-dom";

// const PopupModal = ({ show, onClose, product }) => {
//     const [selectedType, setSelectedType] = useState('refill');
//     const [quantity, setQuantity] = useState(1);
//     const [mainImage, setMainImage] = useState('');

//     useEffect(() => {
//         if (product) {
//             setMainImage(product.image);
//         }
//     }, [product]);

//     if (!show || !product) {
//         return null;
//     }

//     const handleQuantityChange = (delta) => {
//         setQuantity(prev => Math.max(1, prev + delta));
//     };

//     const handleThumbnailClick = (imagePath) => {
//         setMainImage(imagePath);
//     };

//     // Assuming the "New" option adds 2000 to the base price
//     const newPrice = selectedType === 'new' ? product.price + 2000 : product.price;
//     // const unitPrice = selectedType === 'new' ? product.price + 2000 : product.price;
//     const totalPrice = newPrice * quantity;


//     return (
//         <div className="popup-overlay">
//             <div className="popup-modal">


//                 {/* <div className="popup-header">
//                     <h2>{product.title}</h2>
//                     <button className="close-btn" onClick={onClose}>×</button>
//                 </div> */}


//                 <div className="popup-content">

//                     {/* Left side: Images */}
//                     <div className="image-section">
//                         <img src={mainImage} alt={product.title} className="main-image" />
//                         <div className="thumbnail-container">
//                             <img
//                                 src={product.image}
//                                 alt="Thumbnail 1"
//                                 className={`thumbnail ${mainImage === product.image ? 'active' : ''}`}
//                                 onClick={() => handleThumbnailClick(product.image)}
//                             />
//                             {/* Assuming a second thumbnail exists */}
//                             {product.thumbnail2 && (
//                                 <img
//                                     src={product.thumbnail2}
//                                     alt="Thumbnail 2"
//                                     className={`thumbnail ${mainImage === product.thumbnail2 ? 'active' : ''}`}
//                                     onClick={() => handleThumbnailClick(product.thumbnail2)}
//                                 />
//                             )}
//                         </div>
//                     </div>

//                     {/* Right side: Details */}
//                     <div className="details-section">

//                         <div className="popup-header">
//                             <h2>{product.title}</h2>
//                             <button className="close-btn" onClick={onClose}>×</button>
                            
//                         </div>





//                         <div className="price-info">
//                             <span className="price">{newPrice.toLocaleString()} ৳ </span>
//                         </div>



//                         <div className="product-options">
//                             <label className="option-label">Type</label>
//                             <div className="option-buttons">
//                                 <button
//                                     className={`option-button ${selectedType === 'refill' ? 'active' : ''}`}
//                                     onClick={() => setSelectedType('refill')}
//                                 >
//                                     Refill
//                                 </button>
//                                 <button
//                                     className={`option-button ${selectedType === 'new' ? 'active' : ''}`}
//                                     onClick={() => setSelectedType('new')}
//                                 >
//                                     {/* New <span>+ 2,000.00 ৳</span> */}
//                                     New <span> {totalPrice} ৳</span>
//                                 </button>
//                             </div>
//                         </div>
//                         <p className="vat-info">** Price is for LPG ONLY (VAT Inclusive) **</p>
//                         <div className="stock-status">
//                             <span className="in-stock">✔ In Stock</span>
//                         </div>
//                         <div className="quantity-selector">
//                             <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</button>
//                             <input type="text" value={quantity} readOnly className="quantity-input" />
//                             <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
//                         </div>
//                         <div className="action-buttons">

//                             {/* <button className="add-to-cart">Add to Cart</button> */}
//                             <Link to="/cart-all-show">
//                                 <button className="add-to-cart">Add to Cart</button>
//                             </Link>

//                             {/* <button className="buy-now"></button> */}
//                             {/* <Link to="/buy-now">
//                                 <button className="buy-now">Buy Now</button>
//                             </Link> */}

//                             <Link
//                                 to="/buy-now"
//                                 state={{
//                                     product: {
//                                     title: product.title,
//                                     price: newPrice,
//                                     image: mainImage,
//                                     quantity: quantity
//                                     }
//                                 }}
//                                 >
//                                 <button className="buy-now">Buy Now</button>
//                             </Link>




//                         </div>
//                         <a href="#" className="view-details-link">View full details →</a>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PopupModal;








































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

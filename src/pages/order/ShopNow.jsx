// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import PopupModal from './ProductModal';
// import './ShopNow.css'; // Assuming you have a CSS file for product cards
{/* <Link to="/"><img src="../src/assets/images/resources/delta_header_logo_170_91.png" alt="Delta Logo" /></Link> */}
import { fetchCylinderLpgProducts } from '../../api/apiCall';
import Urls from '../../constants/urls';


const ShopNow = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleOrderClick = (product) => {
        setSelectedProduct(product);
        setShowPopup(true);
    };

    // ====================================================== API Call Area ======================================= //

    const [CylinderProducts, setCylinderProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetchCylinderLpgProducts();
                // res.data contains the actual products array
                setCylinderProducts(res?.data || []);
                console.log('Cylinder LP Gas shop now API Call Data', res?.data);
            } catch (error) {
                console.error('Failed to load products:', error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;


    // ====================================================== Main Return Area ==================================== //
    return (

        // <h1> Shop Now page</h1>

        <section className="shop-now">
        <h2>Shop Now</h2>
        <div className="product-grid">
            {CylinderProducts.length > 0 ? (
                CylinderProducts.map((product) => (
                    <div className="product-card" key={product.id}>

                        {/* <img src={product.product_image} alt={product.product_name} /> */}
                        <img
                            src={`${Urls.baseUrl}${product.product_image}`}
                            alt={product.product_name}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "8px",
                            }}
                        />


                        <h4>{product.product_name}</h4>
                        {/* <h4>{product.product_price} </h4> */}
                        <p className="price">{product.product_price.toLocaleString()} ৳ <small>(As Per BERC)</small></p>

                        <button className="order-btn" onClick={() => handleOrderClick(product)}>
                            Order Now
                        </button>
                    </div>
                ))
            ) : (
                <p>No products available.</p>
            )}
        </div>

        <PopupModal
            show={showPopup}
            onClose={() => setShowPopup(false)}
            product={selectedProduct}
        />

    </section>


    );
};

export default ShopNow;






























// // import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';
// import PopupModal from './ProductModal';
// // import './ShopNow.css'; // Assuming you have a CSS file for product cards
// {/* <Link to="/"><img src="../src/assets/images/resources/delta_header_logo_170_91.png" alt="Delta Logo" /></Link> */}
// import { fetchCylinderLpgProducts } from '../../api/apiCall';
// import Urls from '../../constants/urls';


// // const products = [
// //     {
// //         id: 1,
// //         title: '12 KG LPG CYLINDER',
// //         image: '../../src/assets/images/product_img/test_img_300_400.png',
// //         rating: 5,
// //         reviews: 1,
// //         price: 1273.00,
// //         thumbnail1: '../../src/assets/images/product_img/product_12_kg.jpg', // Add thumbnail images
// //         thumbnail2: '../../src/assets/images/product_img/product_45_kg.jpg',
// //     },
// //     {
// //         id: 2,
// //         title: '25 KG LPG CYLINDER',
// //         image: '../../src/assets/images/product_img/test_img_300_400.png', // Updated image path
// //         rating: 0,
// //         reviews: 0,
// //         price: 2653.00,
// //         thumbnail1: '../../images/product_img/product_25_kg_thumb1.png',
// //         thumbnail2: '../../images/product_img/product_25_kg_thumb2.png',
// //     },
// //     {
// //         id: 3,
// //         title: '35 KG LPG CYLINDER',
// //         image: '../../src/assets/images/product_img/test_img_300_400.png', // Updated image path
// //         rating: 1,
// //         reviews: 1,
// //         price: 3714.00,
// //         thumbnail1: '../../assets/images/product_img/product_35_kg_thumb1.jpg',
// //         thumbnail2: '../../assets/images/product_img/product_35_kg_thumb2.jpg',
// //     },
// // ];

// const ShopNow = () => {
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [showPopup, setShowPopup] = useState(false);

//     const handleOrderClick = (product) => {
//         setSelectedProduct(product);
//         setShowPopup(true);
//     };

//     // ====================================================== API Call Area ======================================= //
//     // const [CylinderProducts, setCylinderProducts] = useState(null);
//     // const [loading, setLoading] = useState(true);

//     // useEffect(() => {
//     //     const getProducts = async () => {
//     //     try {
//     //         const data = await fetchCylinderLpgProducts();
//     //         setCylinderProducts(data);
//     //         console.log('Cylinder LP Gas shop now API Call Data', data);
//     //     } catch (error) {
//     //         console.error('Failed to load products:', error);
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     //     };

//     //     getProducts();
//     // }, []);

//     // if (loading) return <p>Loading products...</p>;

//     const [CylinderProducts, setCylinderProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const getProducts = async () => {
//             try {
//                 const res = await fetchCylinderLpgProducts();
//                 // res.data contains the actual products array
//                 setCylinderProducts(res?.data || []);
//                 console.log('Cylinder LP Gas shop now API Call Data', res?.data);
//             } catch (error) {
//                 console.error('Failed to load products:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getProducts();
//     }, []);

//     if (loading) return <p>Loading products...</p>;


//     // ====================================================== Main Return Area ==================================== //
//     return (

//         // <h1> Shop Now page</h1>

//         <section className="shop-now">
//         <h2>Shop Now</h2>
//         <div className="product-grid">
//             {CylinderProducts.length > 0 ? (
//                 CylinderProducts.map((product) => (
//                     <div className="product-card" key={product.id}>



//                         {/* <img src={product.product_image} alt={product.product_name} /> */}
//                         <img
//                             src={`${Urls.baseUrl}${product.product_image}`}
//                             alt={product.product_name}
//                             style={{
//                                 width: "100%",
//                                 height: "auto",
//                                 borderRadius: "8px",
//                             }}
//                         />




//                         <h4>{product.product_name}</h4>

//                         {/* <h4>{product.product_price} </h4> */}

//                         <p className="price">{product.product_price.toLocaleString()} ৳ <small>(As Per BERC)</small></p>



//                         <button className="order-btn" onClick={() => handleOrderClick(product)}>
//                             Order Now
//                         </button>
//                     </div>
//                 ))
//             ) : (
//                 <p>No products available.</p>
//             )}
//         </div>

//         <PopupModal
//             show={showPopup}
//             onClose={() => setShowPopup(false)}
//             product={selectedProduct}
//         />

//     </section>









        
//         // <section className="shop-now">
//         //     <h2>Shop Now</h2>
//         //     <div className="product-grid">
//         //         {CylinderProducts.map((product, index) => (
//         //             <div className="product-card" key={product.id}>
//         //                 <img src={product.product_image} alt={product.product_name} />
//         //                 <h4>{product.product_name}</h4>
                        
                        
//         //                 <button className="order-btn" onClick={() => handleOrderClick(product)}>
//         //                     Order Now
//         //                 </button>
//         //             </div>
//         //         ))}
//         //     </div>

//         //     {/* Pass the selectedProduct to the modal */}
//         //     <PopupModal
//         //         show={showPopup}
//         //         onClose={() => setShowPopup(false)}
//         //         product={selectedProduct} // Pass the selected product data
//         //     />
//         // </section>








//         // <section className="shop-now">
//         //     <h2>Shop Now</h2>
//         //     <div className="product-grid">
//         //         {products.map((product) => (
//         //             <div className="product-card" key={product.id}>
//         //                 <img src={product.image} alt={product.title} />
//         //                 <h4>{product.title}</h4>
//         //                 <div className="rating">
//         //                     {Array.from({ length: 5 }, (_, i) => (
//         //                         <span key={i} className={i < product.rating ? 'filled' : ''}>★</span>
//         //                     ))}
//         //                     <span className="review-count">({product.reviews})</span>
//         //                 </div>
//         //                 <p className="price">{product.price.toLocaleString()} ৳ <small>(As Per BERC)</small></p>
//         //                 <button className="order-btn" onClick={() => handleOrderClick(product)}>
//         //                     Order Now
//         //                 </button>
//         //             </div>
//         //         ))}
//         //     </div>

//         //     {/* Pass the selectedProduct to the modal */}
//         //     <PopupModal
//         //         show={showPopup}
//         //         onClose={() => setShowPopup(false)}
//         //         product={selectedProduct} // Pass the selected product data
//         //     />
//         // </section>


//     );
// };

// export default ShopNow;

























// // import React from 'react';
// import React, { useState } from 'react';
// // import './ShopNow.css'; // Create and style this CSS file
// // import ProductModal from './ProductModal';
// import PopupModal from './ProductModal';

// const products = [
//   {
//     id: 1,
//     title: '12 KG LPG CYLINDER',
//     image: '../../images/product_img/product_12_kg.png',
//     rating: 5,
//     reviews: 1,
//     price: 1273.00,
//   },
//   {
//     id: 2,
//     title: '25 KG LPG CYLINDER',
//     image: '../../images/product_img/product_12_kg.png',
//     rating: 0,
//     reviews: 0,
//     price: 2653.00,
//   },
//   {
//     id: 3,
//     title: '35 KG LPG CYLINDER',
//     image: '../../assets/images/product_img/product_12_kg.jpg',
//     // src: ../../images/product_img/C:\Users\USER\Desktop\Delta React Website V3\delta_react_website_v3\src\assets\images\product_img\product_12_kg.jpg
//     rating: 1,
//     reviews: 1,
//     price: 3714.00,
//   },
// ];

// const ShopNow = () => {

//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [showPopup, setShowPopup] = useState(false);


//   return (

//         <section className="shop-now">
//             <h2>Shop Now</h2>
//             <div className="product-grid">
//                 {products.map((product) => (
//                 <div className="product-card" key={product.id}>
//                     <img src={product.image} alt={product.title} />
//                     <h4>{product.title}</h4>
//                     <div className="rating">
//                     {Array.from({ length: 5 }, (_, i) => (
//                         <span key={i} className={i < product.rating ? 'filled' : ''}>★</span>
//                     ))}
//                     <span className="review-count">({product.reviews})</span>
//                     </div>
//                     <p className="price">{product.price.toLocaleString()} ৳ <small>(As Per BERC)</small></p>

//                     <button
//                     className="order-btn"
//                     onClick={() => {
//                         setSelectedProduct(product);
//                         setShowPopup(true);
//                     }}
//                     >
//                     Order Now
//                     </button>
//                 </div>
//                 ))}
//             </div>

//             {/* ✅ This is outside the map */}
//             <PopupModal
//                 show={showPopup}
//                 onClose={() => setShowPopup(false)}
//             />

//     </section>

//   );
// };

// export default ShopNow;

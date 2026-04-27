// import React from 'react';
import React, { useEffect, useState } from 'react';
import { fetchProductList } from '../api/apiCall'; // Your existing API call
import Urls from './urls';                         // *** must import manully this class

const ApiTest = () => {

    /// --- Product API Call --- ///
    const [productMap, setProductMap] = useState(new Map());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
        try {
            const data = await fetchProductList();

            // ✅ Convert the product array into a Map with product.id as key
            const map = new Map();
            data.forEach((product) => {
            map.set(product.id, product);
            });

            setProductMap(map);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
        };

        getProducts();
    }, []);

    if (loading) return <p>Loading...</p>;




    /// --- Main Return Start --- ///
    return (
        <div>
            {/* <h1> This is Contact Page.</h1> */}
            <div className="custom-cursor">


                {/* --- API call and set individual data show --- */}
                <div>
                    <h1>API Test Page...</h1>
                    <h1>
                        {productMap.size > 0
                        ? Array.from(productMap.values())[2].product_name
                        : 'Loading product name...'}
                    </h1>
                </div>

                <div>
                    <h1>API Test Page 2...</h1>

                    <h1>
                        {productMap.size > 2
                        ? Array.from(productMap.values())[2].product_name
                        : 'Loading product name...'}
                    </h1>

                    {productMap.size > 2 && (
                    <img
                        // https://media.istockphoto.com/id/1124698138/photo/line-3d.jpg?s=612x612&w=is&k=20&c=-Mh26vixqDydzjS7NmYc6xmtDciA2EgXu93Qg3qczIg=
                        // src={`https://media.istockphoto.com/id/1124698138/photo/line-3d.jpg?s=612x612&w=is&k=20&c=-Mh26vixqDydzjS7NmYc6xmtDciA2EgXu93Qg3qczIg=`}
                        // http://127.0.0.1:8000/api/media/product_images/delta_header_logo.png
                        // src={`http://127.0.0.1:8000${Array.from(productMap.values())[2].product_img}`}

                        // src={`http://127.0.0.1:8000/api/media/product_images/delta_header_logo.png`}

                        // src={`http://127.0.0.1:8000/api${Array.from(productMap.values())[2].product_img}`}
                        // src={`http://127.0.0.1:8000/api${Array.from(productMap.values())[2].product_img}`}

                        // src={`${Urls.baseUrl}${Array.from(productMap.values())[2].product_img}`}
                        src={`${Urls.baseUrl}${Array.from(productMap.values())[2].product_img}`}

                        // alt={Array.from(productMap.values())[2].product_name}
                        alt={Array.from(productMap.values())[2].product_name}
                        style={{
                        width: '100%',
                        maxWidth: '300px',
                        height: 'auto',
                        borderRadius: '5px',
                        }}
                    />
                    )}

                </div>


                <div style={{ padding: '20px' }}>
                <h2>Product List (From Map)</h2>

                {/* --- Product show with a list --- */}
                {/* ✅ Displaying all products from Map */}
                {Array.from(productMap.values()).map((product) => (
                    <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px', borderRadius: '8px' }}>
                    <img
                        // src={`http://127.0.0.1:8000${product.product_img}`}
                        src={`${Urls.baseUrl}${product.product_img}`}
                        // src={`${Urls.baseUrl}${Array.from(productMap.values())[2].product_img}`}
                        alt={product.product_name}
                        style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '5px' }}
                    />
                    <p className="about_us_text_design"><strong>Name:</strong> {product.product_name}</p>
                    <p><strong>Code:</strong> {product.product_code}</p>
                    <p><strong>Description:</strong> {product.product_description}</p>
                    <p><strong>Status:</strong> {product.product_status === 'true' ? '✅ Active' : '❌ Inactive'}</p>
                    </div>
                ))}
                </div>
                
            </div>


            {/* ------------------------------------------------------- test */}




        </div>
    );
};

export default ApiTest;
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ========= Add To Cart =========
  const addToCart = (newItem) => {
  setCartItems((prevItems) => {
    const existingIndex = prevItems.findIndex(
      (item) => item.title === newItem.title && item.price === newItem.price
    );

    if (existingIndex >= 0) {
      const updatedItems = [...prevItems];
      // ✅ Replace with the new quantity instead of adding
      updatedItems[existingIndex].quantity = newItem.quantity;
      updatedItems[existingIndex].subtotal =
        updatedItems[existingIndex].price * updatedItems[existingIndex].quantity;
      return updatedItems;
    } else {
      return [...prevItems, { ...newItem, subtotal: newItem.price * newItem.quantity }];
    }
  });
};

  // const addToCart = (newItem) => {
  //   setCartItems((prevItems) => {
  //     const existingIndex = prevItems.findIndex(
  //       (item) =>
  //         item.title === newItem.title &&
  //         item.price === newItem.price // checks same product + variant
  //     );

  //     if (existingIndex >= 0) {
  //       // ✅ Update existing item quantity
  //       const updatedItems = [...prevItems];
  //       updatedItems[existingIndex].quantity += newItem.quantity;
  //       updatedItems[existingIndex].subtotal =
  //         updatedItems[existingIndex].price *
  //         updatedItems[existingIndex].quantity;
  //       return updatedItems;
  //     } else {
  //       // ✅ Add as a new product
  //       return [...prevItems, newItem];
  //     }
  //   });
  // };

  // ========= Remove From Cart =========
  const removeFromCart = (title, price) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.title === title && item.price === price)
      )
    );
  };

  // ========= Clear Cart =========
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);




































// import React, { createContext, useState, useContext } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       // Use a unique key to check existing product
//       // e.g., title + price + type
//       const productKey = `${product.title}_${product.price}`;

//       const existingIndex = prevItems.findIndex(
//         (item) => `${item.title}_${item.price}` === productKey
//       );

//       if (existingIndex !== -1) {
//         // Product exists → increase quantity
//         const updated = [...prevItems];
//         const existingItem = updated[existingIndex];
//         existingItem.quantity += product.quantity;
//         existingItem.subtotal = existingItem.quantity * existingItem.price;
//         return updated;
//       } else {
//         // New product → add as new
//         return [...prevItems, { ...product, subtotal: product.price * product.quantity }];
//       }
//     });
//   };

//   const removeFromCart = (title, price) => {
//     const productKey = `${title}_${price}`;
//     setCartItems((prevItems) =>
//       prevItems.filter(item => `${item.title}_${item.price}` !== productKey)
//     );
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, setCartItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);




























// import React, { createContext, useState, useContext } from "react";

// // Create context
// const CartContext = createContext();

// // Provider component
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Add product to cart
//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       // Check if product already exists
//       const existingIndex = prevItems.findIndex(
//         (item) => item.title === product.title && item.price === product.price
//       );

//       if (existingIndex !== -1) {
//         // If exists, update quantity and subtotal
//         const updated = [...prevItems];
//         const existingItem = updated[existingIndex];
//         existingItem.quantity += product.quantity;
//         existingItem.subtotal = existingItem.quantity * existingItem.price;
//         return updated;
//       } else {
//         return [...prevItems, { ...product, subtotal: product.price * product.quantity }];
//       }
//     });
//   };

//   // Remove product
//   const removeFromCart = (title) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.title !== title));
//   };

//   // Clear cart
//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, setCartItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook
// export const useCart = () => useContext(CartContext);


































// import React, { createContext, useContext, useState } from "react";

// // Create context
// const CartContext = createContext();

// // Provider
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Add item to cart
//   const addToCart = (item) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.id === item.id);
//       if (existing) {
//         return prev.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//   };

//   // Remove single item from cart
//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((i) => i.id !== id));
//   };

//   // Clear cart after purchase
//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Hook for easier usage
// export const useCart = () => useContext(CartContext);

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0); // More descriptive name

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const addToWishlist = () => {
    setWishlistCount(wishlistCount + 1);
  };

  return (
    <CartContext.Provider
      value={{ cartCount, wishlistCount, addToCart, addToWishlist }}
    >
      {children}
    </CartContext.Provider>
  );
};

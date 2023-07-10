import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity, size) => {
    const itemIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.size === size
    );
    if (itemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex] = {
        ...updatedCartItems[itemIndex],
        quantity: updatedCartItems[itemIndex].quantity + quantity,
      };
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity, size }]);
    }
  };
  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (prevItem) => prevItem.id !== item.id || prevItem.size !== item.size
      )
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const countItemsInCart = () => {
    return cartItems.reduce(
      (totalCount, currentItem) => totalCount + currentItem.quantity,
      0
    );
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        countItemsInCart,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

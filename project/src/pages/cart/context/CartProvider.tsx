import React, { useState, useMemo, ReactNode } from "react";

import { Product } from "../../products/service/products.service";
import { CartDispatchContext, CartStateContext } from "./cart.context";

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((item) => item.id === product.id);
      if (itemExists) {
        alert("This product is already in the cart!");
        return prevItems;
      }
      return [...prevItems, product];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const memoizedStateValue = useMemo(() => ({ cartItems }), [cartItems]);

  const memoizedDispatchValue = useMemo(
    () => ({ addToCart, removeFromCart }),
    [addToCart, removeFromCart]
  );

  return (
    <CartStateContext.Provider value={memoizedStateValue}>
      <CartDispatchContext.Provider value={memoizedDispatchValue}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export default CartProvider;

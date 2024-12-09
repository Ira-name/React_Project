import { useContext } from "react";
import { CartDispatchContext, CartStateContext } from "../context/cart.context";

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (!context) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (!context) {
    throw new Error("useCartDispatch must be used within a CartProvider");
  }
  return context;
};

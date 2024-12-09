import React, { createContext, useMemo, ReactNode } from "react";
import { Product } from "../../products/service/products.service";

interface CartStateContextProps {
  cartItems: Product[];
}

interface CartDispatchContextProps {
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

const initialCartState: CartStateContextProps = {
  cartItems: [],
};

const CartStateContext = createContext<CartStateContextProps>(initialCartState);
const CartDispatchContext = createContext<CartDispatchContextProps | null>(null);

export { CartStateContext, CartDispatchContext };

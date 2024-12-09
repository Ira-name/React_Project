import CartList from "./components/CartList";
import { useCartDispatch, useCartState } from "./hook/useProductTableContext";

const CartPage = () => {
  const { cartItems } = useCartState();
  const { removeFromCart } = useCartDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      <CartList cartItems={cartItems} onRemoveFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;

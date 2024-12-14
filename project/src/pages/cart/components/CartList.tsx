import React from "react";
import { ListGroup, Button } from "react-bootstrap";
// import { Product } from "../../products/service/products.service";
import { useCartDispatch, useCartState } from "../hook/useProductTableContext";
import "../css/cart.css";

const CartList: React.FC = () => {
  const { cartItems } = useCartState();
  const { removeFromCart } = useCartDispatch();

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id} className="list-cart">
              <div>
                <strong>{item.title}</strong> - ${item.price}
              </div>
              <Button
                variant="outline-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default CartList;

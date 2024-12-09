import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Product } from "../../products/service/products.service";

interface CartListProps {
  cartItems: Product[];
  onRemoveFromCart: (id: number) => void;
}

const CartList: React.FC<CartListProps> = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between"
            >
              <div>
                <strong>{item.title}</strong> - ${item.price}
              </div>
              <Button
                variant="outline-danger"
                onClick={() => onRemoveFromCart(item.id)}
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

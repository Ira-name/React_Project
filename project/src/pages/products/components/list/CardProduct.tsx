import { Button, Card } from "react-bootstrap";
import { Product } from "../../service/products.service";

interface CardProductProps {
  product: Product;
}

const CardProduct = ({ product }: CardProductProps) => {
  return (
    <Card style={{ width: "24rem", margin: "10px" }}>
      <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        {/* <Card.Text>
            <strong>Description:</strong> {product.description}
          </Card.Text> */}
        <Card.Text>
          <strong>Price:</strong> ${product.price}
        </Card.Text>
        {/* <Card.Text>
            <strong>Discount:</strong> {product.discountPercentage}%
          </Card.Text> */}
        <Card.Text>
          <strong>Rating:</strong> {product.rating}
        </Card.Text>
        {/* <Card.Text>
            <strong>Brand:</strong> {product.brand}
          </Card.Text> */}
        {/* <Card.Text>
            <strong>Category:</strong> {product.category}
          </Card.Text> */}
        <div className="d-flex justify-content-between mt-3">
          <Button variant="outline-primary">Details</Button>
          <Button variant="outline-primary">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;

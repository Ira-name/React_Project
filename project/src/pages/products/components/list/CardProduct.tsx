import { Button, Card } from "react-bootstrap";
import { ChangeEvent, memo, useCallback, useMemo, useState } from "react";
import "../../css/product.css";
// import { useRenderCount } from "../../../../hooks/useRenderCount";
import { Product } from "../../service/products.service";
import ProductTitleInput from "../ProductTitleInput";
import { useCartDispatch } from "../../../cart/hook/useProductTableContext";

interface CardProductProps {
  product: Product;
  onProductItemDelete: (id: number) => void;
  onSaveProductButtonClick: (
    productId: number,
    updatedProduct: Partial<Product>
  ) => void;
}
const CardProductComponent = ({
  product,
  onProductItemDelete,
  onSaveProductButtonClick,
}: CardProductProps) => {
  // const renderCount = useRenderCount();

  const { addToCart } = useCartDispatch();

  const role = localStorage.getItem("role");
  const memoizedTitle = useMemo(() => product.title, [product.title]);
  const memoizedDescription = useMemo(
    () => product.description,
    [product.description]
  );
  const memoizedPrice = useMemo(() => product.price, [product.price]);
  const memoizedThumbnail = useMemo(
    () => product.thumbnail,
    [product.thumbnail]
  );

  const [title, setTitle] = useState(memoizedTitle);
  const [description, setDescription] = useState(memoizedDescription);
  const [price, setPrice] = useState(memoizedPrice);
  const [thumbnail, setThumbnail] = useState(memoizedThumbnail);

  const [isEditMode, setIsEditMode] = useState(false);

  const memoizedSetTitle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    []
  );

  const memoizedSetDescription = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    },
    []
  );

  const memoizedSetPrice = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPrice(Number(event.target.value));
    },
    []
  );

  const memoizedSetThumbnail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const fileURL = URL.createObjectURL(file);
        setThumbnail(fileURL);
      }
    },
    []
  );

  const memoizedSetIsEditModeCallback = useCallback((isEdit: boolean) => {
    setIsEditMode(isEdit);
  }, []);

  const memoizedSaveProductButtonClickCallback = useCallback(() => {
    onSaveProductButtonClick(product.id, {
      title,
      description,
      price,
      thumbnail,
    });
    setIsEditMode(false);
  }, [
    onSaveProductButtonClick,
    product.id,
    title,
    description,
    price,
    thumbnail,
  ]);

  const memoizedProductItemDeleteCallback = useCallback(() => {
    onProductItemDelete(product.id);
  }, [onProductItemDelete, product.id]);

  return (
    <Card className="card-photo">
      <Card.Img variant="top" src={thumbnail} alt={product.title} />
      <Card.Body>
        <Card.Title>
          {isEditMode ? (
            <ProductTitleInput
              title={title}
              onProductTitleChange={memoizedSetTitle}
            />
          ) : (
            product.title
          )}
        </Card.Title>
        <Card.Text>
          {isEditMode ? (
            <ProductTitleInput
              title={description}
              onProductTitleChange={memoizedSetDescription}
            />
          ) : (
            product.description
          )}
        </Card.Text>
        <Card.Text>
          {isEditMode ? (
            <ProductTitleInput
              title={price.toString()}
              onProductTitleChange={memoizedSetPrice}
            />
          ) : (
            product.price
          )}
        </Card.Text>
        {isEditMode && (
          <div>
            <label>Upload Thumbnail:</label>
            <input
              type="file"
              accept="image/*"
              onChange={memoizedSetThumbnail}
            />
          </div>
        )}
        <div className="cards">
          <Button variant="outline-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
        {role === "admin" && (
          <div className="card-button">
            {isEditMode ? (
              <Button
                className="button-crud"
                variant="dark"
                onClick={memoizedSaveProductButtonClickCallback}
              >
                Save
              </Button>
            ) : (
              <Button
                className="button-crud"
                variant="secondary"
                onClick={() => memoizedSetIsEditModeCallback(true)}
              >
                Edit
              </Button>
            )}
            {isEditMode ? (
              <Button
                className="button-crud"
                variant="dark"
                onClick={() => memoizedSetIsEditModeCallback(false)}
              >
                Cancel
              </Button>
            ) : (
              <Button
                className="button-crud"
                variant="danger"
                onClick={memoizedProductItemDeleteCallback}
              >
                Delete
              </Button>
            )}
          </div>
        )}
        {/* <Card.Text>"render"{renderCount}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};
const CardProduct = memo(CardProductComponent);
export default CardProduct;

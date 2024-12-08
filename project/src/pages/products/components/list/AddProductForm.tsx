import { memo, useCallback, useState, useMemo } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Product } from "../../service/products.service";

interface AddProductFormProps {
  onAddProduct: (newProduct: Partial<Product>) => void;
}

const AddProductFormComponent = ({ onAddProduct }: AddProductFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const role = localStorage.getItem("role");
  const [showModal, setShowModal] = useState(false);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const handleDescriptionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
    },
    []
  );

  const handlePriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value ? parseFloat(e.target.value) : "";
      setPrice(value);
    },
    []
  );

  const handleThumbnailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const fileURL = URL.createObjectURL(file);
        setThumbnail(fileURL);
      }
    },
    []
  );

  const handleAddProduct = useCallback(() => {
    if (!title || !price) {
      alert("Title and Price are required.");
      return;
    }
    onAddProduct({ title, description, price, thumbnail });
    setTitle("");
    setDescription("");
    setPrice("");
    setThumbnail("");
    setShowModal(false);
  }, [title, description, price, thumbnail, onAddProduct]);

  const handleShow = useCallback(() => setShowModal(true), []);
  const handleClose = useCallback(() => setShowModal(false), []);

  const isAdmin = useMemo(() => role === "admin", [role]);

  if (!isAdmin) return null;
  const formContent = useMemo(
    () => (
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
        </Form.Group>
        <Form.Group controlId="formThumbnail">
          <Form.Label>Thumbnail</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
          />
        </Form.Group>
      </Form>
    ),
    [
      title,
      description,
      price,
      thumbnail,
      handleTitleChange,
      handleDescriptionChange,
      handlePriceChange,
      handleThumbnailChange,
    ]
  );

  return (
    <>
      <div className="d-flex justify-content-end ">
        <Button variant="success" onClick={handleShow}>
          Create Product
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>{formContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const AddProductForm = memo(AddProductFormComponent);
export default AddProductForm;

import { memo, useCallback, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { User } from "../service/users.service";
import "../css/users.css";
interface AddUserFormProps {
  onAddUser: (newUser: Partial<User>) => void;
}

const AddUserFormComponent = ({ onAddUser }: AddUserFormProps) => {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleShowModal = useCallback(() => setShowModal(true), []);
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setPassword("");
  }, []);

  const handleAddUser = useCallback(() => {
    if (!firstName || !lastName || !email || !username) {
      alert("Please fill in all required fields.");
      return;
    }

    onAddUser({ firstName, lastName, email, username, password });
    handleCloseModal();
  }, [
    firstName,
    lastName,
    email,
    username,
    password,
    onAddUser,
    handleCloseModal,
  ]);

  return (
    <>
    
      <Button variant="success" className="add-user" onClick={handleShowModal} >
        Add User
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const AddUserForm = memo(AddUserFormComponent);

export default AddUserForm;

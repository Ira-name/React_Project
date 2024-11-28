import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const AppMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const userJson = localStorage.getItem("user");
  let user;
  try {
    user = userJson ? JSON.parse(userJson) : null;
  } catch (error) {
    console.error(error);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><img
            src="src/components/img/bag_2.png"
            alt="Shop Logo"
            style={{ height: "40px", width: "auto" }}
          /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" state={{ hello: "Hello, world!" }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          {user?.role === "admin" && (
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
          )}
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          <Nav.Link onClick={handleLogout} style={{ cursor: "pointer" }}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppMenu;

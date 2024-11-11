import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const users = [
  {
    userName: "admin",
    password: "admin",
    email: "admin@gmail.com",
    role: "admin",
  },
  {
    userName: "user",
    password: "user",
    email: "user@gmail.com",
    role: "user",
  },
  {
    userName: "ira",
    password: "ira",
    email: "iryna.krush@oa.edu.ua",
    role: "admin",
  },
];

const LoginPage = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUserNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserName(event.target.value);
  };

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };
  const submitShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = users.find((user) => user.userName === userName);
    if (!user) {
      alert("User does not exist");
      return;
    }

    if (user.password !== password) {
      alert("Invalid password");
      return;
    }
    if (user.email !== email) {
      alert("Invalid email");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("role", user.role);

    if (user.role === "admin") {
      navigate("/users");

      return;
    }

    if (user.role === "user") {
      navigate("/");

      return;
    }
  };

  return (
    <div className="d-flex  justify-content-center align-items-center ">
    <img src="./shop2.jpg" alt="ЛОГОТИП" className="mt-5 mr-5 " />

    <Form
      onSubmit={handleSubmit} /*className="w-100"*/
      style={{ width: "350px" }}
    >
      <h1 className="text-center mb-4">Login</h1>

      <Form.Group
        className="mb-3 d-flex flex-column align-items-start"
        controlId="formUserName"
      >
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={userName}
          onChange={handleUserNameInputChange}
        />
      </Form.Group>

      <Form.Group
        className="mb-3 d-flex flex-column align-items-start"
        controlId="formEmail"
      >
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailInputChange}
        />
      </Form.Group>

      <Form.Group
        className="mb-3 d-flex flex-column align-items-start"
        controlId="formPassword"
      >
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordInputChange}
          />
          <Button
            variant="outline-secondary"
            onClick={submitShowPassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </Button>
        </InputGroup>
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Login
      </Button>
    </Form>
  </div>
);
};

export default LoginPage;

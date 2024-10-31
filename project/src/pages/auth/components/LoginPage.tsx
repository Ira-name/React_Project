import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
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
    <div className="item">
      <div>
        <img src="./shop2.jpg" alt="Img"></img>
      </div>
      <div className="login">
        <h1>Login</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="name">
              <label className="text" htmlFor="username">
                Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={userName}
                onChange={handleUserNameInputChange}
              />
            </div>
            <div className="email">
              <label className="text" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleEmailInputChange}
              />
            </div>

            <div className="password">
              <label className="text" htmlFor="password">
                Password
              </label>
              <div className="show">
                <input
                  className="password_show"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordInputChange}
                />
                <button
                  type="button"
                  onClick={submitShowPassword}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                  />
                </button>
              </div>
            </div>
            <button className="submit" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

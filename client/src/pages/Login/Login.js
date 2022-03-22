import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../service/auth";
import { Alert, Navbar } from "../../components";
import "flowbite";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const refreshCount = parseInt(sessionStorage.getItem("refreshCount"));
    if (refreshCount < 2) {
      sessionStorage.setItem('refreshCount', String(refreshCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('refreshCount');
    }
  }, []);

  const onLogin = async () => {
    try {
      await login(username, password);
      sessionStorage.setItem("refreshCount", 1);
      navigate("/");
    } catch (error) {
      setAlert(true);
    }
  };

  return (
    <div className="login-main-wrapper">
      <Navbar />
      <div className="login-wrapper">
        <div className="login-container">
          <Alert
            alert={alert}
            setAlert={setAlert}
            message={"INCORRECT USERNAME OR PASSWORD"}
          />
          <div className="wrapper-login-title">
            <h1 className="login-title">TODO</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" onClick={onLogin}>
            Login
          </button>
          <p className="register-already">
            Not a member ?{" "}
            <a href="/register" className="sign-in-text">
              Sign Up
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;

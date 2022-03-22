import React, { useState, useEffect } from "react";
import "./Register.css";
import Navbar from "../../components/Navbar";
import { register } from '../../service/auth';
import { Alert } from '../../components';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState('');
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

  const onRegister = async () => {
    if (password !== confirmPassword) {
      setMessage("Please enter correct password");
      setAlert(true);
      return;
    } else if (password.length < 8) {
      setMessage("Password must contain at least 8 characters");
      setAlert(true);
      return;
    } else if (!email.includes('@')) {
      setMessage("Please enter a valid email");
      setAlert(true);
      return;
    }
    try {
      await register(username, password, email, phone, firstname, lastname);
      sessionStorage.setItem("refreshCount", 1);
      navigate('/login');
    } catch (error) {
      setMessage("User is already exist!");
      setAlert(true);
    }
  };

  return (
    <div>
      <div className="register-main-wrapper">
        <Alert alert={alert} setAlert={setAlert} message={message} />
        <Navbar />
        <div class="register-wrapper">
          <div className="register-container">
            <div class="title">
              <span className="register-title">TODO</span>
            </div>
            <div className="out-register">
              <div className="register-left">
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Password"
                  minLength='7'
                  className={`${password?.length < 8 && "active"}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="pass-suggest">* Password must contain at least 8 characters</span>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  minLength='7'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="register-right">
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />

                <button className="register-btn" onClick={onRegister}>Register</button>
              </div>
            </div>
            <p className="register-already">
              Already have an account ? <a href="/login" className="sign-in-text">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

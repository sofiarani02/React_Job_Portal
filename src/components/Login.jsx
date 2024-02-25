import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    // For example, you can send a request to your server with the user data
    // or perform client-side validation
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Login</h1>
        <form className="user" onSubmit={handleSubmit} action="">
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FontAwesomeIcon icon={faUnlockAlt} />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-btn">
            <button type="submit" className="btn">
            <Link to="/home">Login</Link>
            </button>
            <p className="signup">
              No account yet ?{' '}
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

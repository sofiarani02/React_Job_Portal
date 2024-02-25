import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Sign Up</h1>
        <form className="user" onSubmit={handleSubmit}>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Full Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <FontAwesomeIcon icon={faUnlockAlt} />
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          /><br /><br />
          <div className="login-btn">
            <button type="submit" className="btn">
            <Link to="/login">Sign Up</Link>
            </button>
            <p className="signup">
              Already have an account ?{' '}
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

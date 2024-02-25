import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import the Link component from react-router-dom

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li className="signup">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

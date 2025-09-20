// Header.js
import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Callcontext } from '../context/Mycontext'; // 👈 import context

function Header() {
  const { theme, toggel } = useContext(Callcontext); // 👈 use context

  return (
    <header className="header">
      {/* Left Logo */}
      <div className="logo">
        <h1>Brainlylingo</h1>
      </div>

      {/* Center Nav Menu */} 
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">LeaderBoard</Link></li>
          <li><Link to="/mycart">Mycart</Link></li>
        </ul>
      </nav>

      {/* Right Buttons */}
      <div className="auth-btn">
        <button>Sign Out</button>
        {/* 👇 Theme toggle button yaha add kiya */}
        <button onClick={toggel}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;

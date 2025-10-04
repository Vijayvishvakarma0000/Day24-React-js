
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-inner">
        
        <Link to="/" className="logo"> 
          <span className="mark">A</span>
          <span>ACORE_Ecome</span>
        </Link>

       
        <nav className="nav-links">
          <Link to="/">Home</Link>            
          <Link to="/category">Category</Link> 
          <Link to="/about">About</Link>      
          <Link to="/contact">Contact</Link>  
          <Link to="/wishlist" className="cta">Wishlist</Link> 
        </nav>

        {/* Hamburger Button */}
        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/signup" className="cta" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

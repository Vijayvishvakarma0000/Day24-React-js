import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <h2>Laptop_DEKHO</h2>
          <p>
            Your one-stop shop for best laptops online. Stay connected with the latest technology.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Twitter" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Laptop_DEKHO. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

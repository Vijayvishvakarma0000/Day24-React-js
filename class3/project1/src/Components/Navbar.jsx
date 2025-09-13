// Navbar.js
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>MyWebsite</h2>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/loginpage">Login</Link></li>
          <li><Link to="/registration">Register</Link></li>
      </ul>
      <button className={styles.btn}>Mode change </button>
    </nav>
  );
}

export default Navbar;
